<script setup lang="ts">

const refAd = ref<HTMLElement>();
const refYo = ref<HTMLElement>();

function onLogoLettersAnimationEnd(event: Event): void {
  const target = event.target as HTMLElement;
  target.style.display = "none";
}

onMounted(() => {
  refAd.value?.addEventListener("animationend", onLogoLettersAnimationEnd);
  refYo.value?.addEventListener("animationend", onLogoLettersAnimationEnd);
  document.querySelector("#header-logo")?.classList.add("animate-logo-to-white");
});

onBeforeUnmount(() => {
  refAd.value?.removeEventListener("animationend", onLogoLettersAnimationEnd);
  refYo.value?.removeEventListener("animationend", onLogoLettersAnimationEnd);
})

</script>

<template>
  <div class="absolute inset-0">

    <!-- Logo -->
    <div class="absolute w-full top-1/2 -translate-y-1/2">
      <div class="flex justify-center items-center h-[35px]">
        <!-- Ad -->
        <div ref="refAd" class="flex items-start h-full animate-logo-letter pr-1">
          <nuxt-icon class="w-[50px]" name="intro_ad" filled />
        </div>

        <!-- — -->
        <div class="w-8 h-1.5 bg-black animate-intro-logo-disperse ease-in-quint" />

        <!-- YO -->
        <div ref="refYo" class="flex items-end h-full animate-logo-letter pl-1">
          <nuxt-icon class="w-[45px]" name="intro_yo" filled />
        </div>

      </div>
    </div>

    <!-- Shades -->
    <div class="w-full h-full relative [&>*]:bg-black">
      <div class="absolute w-full h-0 bottom-1/2 animate-shade-show"></div>
      <div class="absolute w-full h-0 top-1/2 animate-shade-show"></div>
    </div>
  </div>
</template>
