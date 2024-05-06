<script setup lang="ts">
defineProps<{
  num: number,
  text: string,
  numFirst: boolean
}>();
</script>

<template>
  <div class="tech-nft-num">
    <template v-if="numFirst">
      <img :src="`/images/num${num}.svg`" width="400" height="500" :alt="num.toString()" loading="lazy">
      <p>{{ text }}</p>
    </template>
    <template v-else>
      <p>{{ text }}</p>
      <img :src="`/images/num${num}.svg`" width="400" height="500" :alt="num.toString()" loading="lazy">
    </template>
  </div>
</template>
