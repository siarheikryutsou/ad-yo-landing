<script setup lang="ts">
import { loadImages } from "~/shared/lib/CanvasAnimator";
import { SymbolKind } from "vscode-languageserver-types";

const refSection = ref<HTMLElement>();
const TOTAL_FRAMES = 153;
const frames = [1, 4, 7, 10, 13, 28, 31, 34, 37, 55, 58, 76, 79, 82, 85, 91];
let animationId: number | null = null;
let observer: IntersectionObserver;
const timeline: number[] = new Array(TOTAL_FRAMES);
const FPS = 30;
const INTERVAL = 1000 / FPS;

// first frame
timeline[0] = timeline[21] = timeline[60] = timeline[93] = timeline[123] = 1;
// cycle 1
timeline[3] = timeline[15] = 4;
timeline[6] = timeline[18] = 7;
timeline[9] = 10;
timeline[12] = 13;
// cycle 2 + first 5 frames of cycle 3
timeline[27] = timeline[63] = 28;
timeline[30] = timeline[66] = 31;
timeline[33] = timeline[69] = 34;
timeline[36] = timeline[72] = 37;
// cycle 3
timeline[75] = 76;
timeline[78] = 79;
timeline[81] = 82;
timeline[84] = 85;
timeline[90] = 91;

// cycle 4 and 5
timeline[99] = timeline[129] = 28;
timeline[102] = timeline[132] = 31;
timeline[105] = timeline[135] = 34;
timeline[108] = timeline[138] = 37;
timeline[111] = timeline[141] = 28;
timeline[114] = timeline[144] = 31;
timeline[117] = timeline[147] = 34;
timeline[120] = timeline[150] = 37;

function startAnimation(images: HTMLImageElement[]) {
  console.log("Preserves startAnimation");
  const section = refSection.value;
  if (section) {
    let frameIndex = 0;
    let frame: number;
    let lastTime = 0;
    const animate = (time: number) => {
      if(!lastTime || (time - lastTime) >= INTERVAL) {
        //console.log("draw");
        lastTime = time;
        frame = timeline[frameIndex] || frame;
        const image = images[frames.indexOf(frame)];
        if (image) {
          section.style.backgroundImage = `url(${image.src})`;
        } else {
          console.error(`Image ${frame} not found`);
        }

        frameIndex = (frameIndex + 1) % timeline.length;
      }
      animationId = requestAnimationFrame(animate);
    }
    animationId = requestAnimationFrame(animate);
  }
}

function stopAnimation() {
  console.log("Preserves stopAnimation");
  if (animationId !== null) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
}

onMounted(async () => {
  console.log("Preserves mounted");
  if(!refSection.value) return;

  const images = await loadImages(frames.map(frame => `/images/preserves/${frame}.webp`));

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startAnimation(images);
      } else {
        stopAnimation();
      }
    });
  });

  observer.observe(refSection.value);

  //startAnimation(images);
});

onBeforeUnmount(() => {
  stopAnimation();
  observer?.disconnect();
})


</script>

<template>
  <section class="bg-preserves flex flex-col h-full bg-[center_top_60%] md:bg-[center_top_70%] lg:bg-center" ref="refSection">
    <slot />
  </section>
</template>
