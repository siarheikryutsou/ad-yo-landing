<script setup lang="ts">
const refCanvas = ref<HTMLCanvasElement>();
let observer: IntersectionObserver;

function onResize(event?: Event): void {
  if (refCanvas.value) {
    const canvas = refCanvas.value;
  }
}

onMounted(() => {
  if (refCanvas.value) {
    window.addEventListener("resize", onResize);
    onResize();

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          //animator.isStarted() ? animator.resume() : animator.start();
        } else {
          //animator.isStarted() && animator.pause();
        }
      });
    });
  }
});

onBeforeUnmount(() => {

});
</script>

<template>
  <canvas />
</template>