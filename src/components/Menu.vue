<script setup lang="ts">
import { ROUTES } from "~/shared";

const showMenu = ref<boolean>(false);
const refMenu = ref<HTMLElement | null>(null);
const refMenuWrapper = ref<HTMLElement>();
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
  console.log(target, refMenu.value);
  if (target && showMenu.value) {
    const isMenu = refMenu.value?.contains(target);
    if (!isMenu || target.nodeName === "UL" || target === refMenuWrapper.value) {
      showMenu.value = false;
    }
  }
}

function setMenuItemsDelay() {
  document.querySelectorAll(".menu-item").forEach((el, index) => {
    (el as HTMLElement).style.animationDelay = `${Math.round(Math.random() * 350)}ms`;
  });
}

function onMenuButtonClick() {
  if (window.innerWidth < 768) {
    showMenu.value = false;
  }
}

onMounted(() => {
  window.addEventListener("click", onClick);
  window.addEventListener("keydown", onKeyDown);
  setMenuItemsDelay();
});

onBeforeUnmount(() => {
  window.removeEventListener("click", onClick);
  window.removeEventListener("keydown", onKeyDown);
});

watch(showMenu, () => {
  if (showMenu.value) {
    setMenuItemsDelay();
  }

  document.body.classList.toggle("menu-open", showMenu.value);
});

</script>

<template>
  <nav
    class="absolute w-full top-0 md:relative md:w-auto md:h-auto md:bg-transparent overflow-hidden md:overflow-visible"
    ref="refMenu"
    :class="{'bg-white bg-opacity-95 h-screen': showMenu}"
  >
    <div class="flex justify-end">
      <button
        class="flex-auto mt-3 mr-6 md:mt-0 md:mr-0 flex-shrink flex-grow-0 text-white font-semibold text-lg bg-black px-3 md:px-10 py-1.5 group"
        @click="showMenu = !showMenu">
        <span class="group-hover:opacity-70 transition">menu</span>
      </button>
    </div>

    <div v-show="showMenu" ref="refMenuWrapper"
         class="absolute wrapper !py-0 md:!p-0 w-full md:w-auto md:right-[35px] overflow-auto h-full md:h-auto md:overflow-visible">
      <ul v-for="(menuRow, index) in menuItems" :key="index"
          class="relative flex flex-col items-end md:flex-row md:justify-end -mt-px">
        <li v-for="menuItem in menuRow"
            class="-mb-px last:mb-0 md:last:-mb-px md:-mr-px md:mt-0 after:content-[''] after:w-full after:absolute after:border after:border-b-black after:bottom-0 after:left-0 md:after:content-none"
            :key="menuItem.name"
        >
          <nuxt-link :to="menuItem.path"
                     class="menu-item flex border border-black text-black font-medium text-lg whitespace-nowrap opacity-0"
                     :class="{'animate-menu-item-show': showMenu}"

          >
            <span
              class="px-2 py-1 border border-white bg-white hover:bg-black hover:text-white transition-colors ease-in duration-200"
              :class="{'text-white !bg-black transition-none' : menuItem.path === route.fullPath}"
              @click="onMenuButtonClick"
            >
              {{ menuItem.name }}
            </span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
