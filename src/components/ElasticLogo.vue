<script setup lang="ts">
withDefaults(defineProps<{part?: "full" | "ad" | "yo"}>(), {
  part: "full"
});
</script>

<template>
  <div class="flex justify-center items-center gap-1">
    <nuxt-icon v-if="part !== 'yo'" name="intro_ad" filled />
    <div class="w-full h-[5px] bg-black mt-2"></div>
    <nuxt-icon v-if="part !== 'ad'" name="intro_yo" class="pt-[10px]" filled />
  </div>
</template>