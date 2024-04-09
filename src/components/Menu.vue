<script setup lang="ts">
import { ROUTES } from "~/shared";

const showMenu = ref<boolean>(false);
const refMenu = ref<HTMLElement | null>(null);
const route = useRoute();
const menuItems = [
  [
    { name: "Home", path: ROUTES.INDEX }
  ],
  [
    { name: "About", path: ROUTES.ABOUT },
    { name: "Team", path: ROUTES.TEAM },
    { name: "Roadmap", path: ROUTES.ROADMAP }
  ],
  [
    { name: "Technology", path: ROUTES.TECHNOLOGY },
    { name: "NFT Profile", path: ROUTES.NFT },
    { name: "Protocol", path: ROUTES.PROTOCOL },
    { name: "Blockchain", path: ROUTES.BLOCKCHAIN }
  ],
  [
    { name: "Infrastructure", path: ROUTES.INFRASTRUCTURE },
    { name: "App", path: ROUTES.APP },
    { name: "Ad manager", path: ROUTES.AD_MANAGER }
  ],
  [
    { name: "Contacts", path: ROUTES.CONTACTS }
  ]
];

function onKeyDown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    showMenu.value = false;
  }
}

function onClick(event: MouseEvent) {
  const target = event.target as Node;
  if (target && showMenu.value) {
    const isMenu = refMenu.value?.contains(target);
    if(!isMenu || target.nodeName === "UL") {
      showMenu.value = false;
    }
  }
}

onMounted(() => {
  window.addEventListener("click", onClick);
  window.addEventListener("keydown", onKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener("click", onClick);
  window.removeEventListener("keydown", onKeyDown);
})

</script>

<template>
  <nav class="relative" ref="refMenu">
    <div class="flex justify-end">
      <button class="flex-auto flex-shrink flex-grow-0 text-white font-semibold text-lg bg-black px-10 py-1.5 group"
              @click="showMenu = !showMenu">
        <span class="group-hover:opacity-70 transition">menu</span>
      </button>
    </div>

    <div v-show="showMenu" class="absolute right-[35px]">
      <ul v-for="(menuRow, index) in menuItems" :key="index" class="flex justify-end -mt-px">
        <li v-for="menuItem in menuRow"
            class="-mr-px"
            :key="menuItem.name"
        >
          <nuxt-link :to="menuItem.path"
                     class="flex border border-black text-black font-medium text-lg whitespace-nowrap opacity-0"
                     :class="{'animate-anim-menu-item-show': showMenu}"
                     :style="`animation-delay: ${Math.round(Math.random() * 350)}ms`"

          >
            <span
              class="px-2 py-1 border border-white bg-white hover:bg-black hover:text-white transition-colors ease-in duration-200"
              :class="{'text-white !bg-black transition-none' : menuItem.path === route.fullPath}">
              {{ menuItem.name }}
            </span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
