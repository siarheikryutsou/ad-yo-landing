<script setup lang="ts">
import { CanvasAnimator, CanvasAnimatorAnimation, Square } from "~/shared/lib/CanvasAnimator";
import { CanvasAnimatorVerticalMirror } from "~/shared";

const refCanvas = ref<HTMLCanvasElement>();
let animator: CanvasAnimator;
let observer: IntersectionObserver;

function fillCanvas() {
  if(refCanvas.value) {
    const canvas = refCanvas.value;
    animator.addAnimation(
      new CanvasAnimatorAnimation(
        new Square(0, canvas.height / 2 - 3, canvas.width, 4), {}, 0
      )
    )
  }
}

function onResize(): void {
  const canvas = refCanvas.value;
  if(canvas) {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
}

onMounted(() => {
  if (refCanvas.value) {
    window.addEventListener("resize", onResize);
    onResize();
    animator = new CanvasAnimatorVerticalMirror(refCanvas.value);
    fillCanvas();

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          animator.isStarted() ? animator.resume() : animator.start();
        } else {
          animator.isStarted() && animator.pause();
        }
      });
    });

    observer.observe(refCanvas.value);
  }
});

onBeforeUnmount(() => {
  animator?.stop();
  window.removeEventListener("resize", onResize);
  observer?.disconnect();
});

</script>

<template>
  <div class="w-full h-[94px] relative">
    <img src="/images/transaction_animation.gif" class="absolute top-1/2 -translate-y-1/2 w-full mt-[5px]"  alt="" />
<!--    <canvas ref="refCanvas" class="w-full h-full absolute top-0 left-0 right-0 bottom-0" />-->
  </div>
</template>
