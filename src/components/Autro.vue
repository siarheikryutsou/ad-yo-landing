<script setup lang="ts">
import { Bitmap, CanvasAnimator, CanvasAnimatorAnimation, EASE, loadImages, Square } from "~/shared/lib/CanvasAnimator";

const refCanvas = ref<HTMLCanvasElement>();
const MARGIN_BOTTOM = 40;
const MARGIN_X = 40;
const AD_MARGIN_BOTTOM = 5;
let animator: CanvasAnimator;
const squareWidths = [26.8, 25.3, 12.2, 3.1, 2.4, 2.6, 3.2, 2.5, 2.5, 1.6, 1.1, 1.1, 1.8, 1.1, 1.1, 1.1, 1.1, 1.1, 8.3];
const GAP = 4;

function onResize() {
  const canvas = refCanvas.value;
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setTargets();
  }
}

onMounted(async () => {
  const canvas = refCanvas.value;
  if (canvas) {
    window.addEventListener("resize", onResize);
    onResize();

    animator = new CanvasAnimator(canvas);
    const images = await loadImages(["/images/intro_ad.svg", "/images/intro_yo.svg"]);
    const ad = new Bitmap(images[0]);
    const yo = new Bitmap(images[1]);

    ad.x = 40;
    ad.y = -ad.height;
    yo.y = -yo.height;

    animator.addAnimation(
      new CanvasAnimatorAnimation(ad, {}, 3000, 0, EASE.OUT_CUBIC, () => {
        animator.stop();
      })
    )

    for(let i = 0, len = squareWidths.length; i < len; i++) {
      const square = new Square();
      square.color = "black";
      square.height = 5;
      square.y = -square.height;
      animator.addAnimation(
        new CanvasAnimatorAnimation(square, {}, 3000 + (Math.random() * 2000), Math.random() * 3000, EASE.OUT_CUBIC)
      );
    }

    animator.addAnimation(
      new CanvasAnimatorAnimation(yo, {}, 3000, 0, EASE.OUT_CUBIC)
    );

    setTargets();

    animator.start();
  }
});

function setTargets(): void {
  const canvas = refCanvas.value;
  if (canvas && animator) {
    const animations = animator.getAnimations();
    const ad = animations[0];
    const yo = animations[animations.length - 1];
    const targetXyo = canvas.width - yo.displayObject.width - MARGIN_X;
    let lastSquare;
    yo.displayObject.x = canvas.width - yo.displayObject.width - MARGIN_X;
    ad.setTarget({ y: canvas.height - ad.displayObject.height - MARGIN_BOTTOM - AD_MARGIN_BOTTOM});
    yo.setTarget({ y: canvas.height - ad.displayObject.height - MARGIN_BOTTOM});

    const squaresFieldWidth = targetXyo - ad.displayObject.right - GAP * 2;


    for(let i = 1, len = animations.length - 1; i < len; i++) {
      const square = animations[i];
      if(lastSquare) {
        square.displayObject.x = lastSquare.displayObject.right;
      } else {
        square.displayObject.x = ad.displayObject.right + GAP;
      }
      square.displayObject.width = Math.floor(squaresFieldWidth / 100 * squareWidths[i - 1]);
      square.setTarget({ y: canvas.height - square.displayObject.height - MARGIN_BOTTOM - 14 });
      lastSquare = square;
    }

    if(lastSquare) {
      lastSquare.displayObject.width = yo.displayObject.x - GAP - lastSquare.displayObject.x;
    }
  }
}

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
});

</script>

<template>
  <canvas ref="refCanvas" class="absolute inset-0 w-full h-full bg-neutral-400" width="100%" height="100%" />
</template>