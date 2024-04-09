<script setup lang="ts">

</script>

<template>
  <div class="absolute inset-0">

    <!-- Logo -->
    <div class="absolute top-1/2 bottom-1/2 inset-0">
      <div class="flex justify-center items-center h-[35px]">
        <!-- Ad -->
        <div class="flex items-start h-full animate-logo-letter pr-1">
          <nuxt-icon class="w-[50px]" name="intro_ad" filled />
        </div>

        <!-- — -->
        <div class="w-8 h-1.5 bg-black animate-intro-logo-disperse ease-in-quint" />

        <!-- YO -->
        <div class="flex items-end h-full animate-logo-letter pl-1">
          <nuxt-icon class="w-[45px]" name="intro_yo" filled />
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>