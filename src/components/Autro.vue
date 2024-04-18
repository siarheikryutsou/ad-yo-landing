<script setup lang="ts">
import { Bitmap, CanvasAnimator, CanvasAnimatorAnimation, EASE, loadImages, Square } from "~/shared/lib/CanvasAnimator";

const refCanvas = ref<HTMLCanvasElement>();
const MARGIN_BOTTOM = 40;
const MARGIN_X = 40;
const AD_MARGIN_BOTTOM = 5;
let animator: CanvasAnimator;
const GAP = 4;
const DURATION = 4000;
const squareWidths = [0, 26.8, 25.3, 12.2, 3.1, 2.4, 2.6, 3.2, 2.5, 2.5, 1.6, 1.1, 1.1, 1.8, 1.1, 1.1, 1.1, 1.1, 1.1, 8.3, 0];
const animationsMap = [
  {
    width: 0,
    delay: 4,
  },
  {
    width: 26.8,
    delay: 3,
  },
  {
    width: 25.3,
    delay: 5,
  },
  {
    width: 12.2,
    delay: 10,
  },
  {
    width: 3.1,
    delay: 11,
  },
  {
    width: 2.4,
    delay: 12,
  },
  {
    width: 2.6,
    delay: 14,
  },
  {
    width: 3.2,
    delay: 20,
  },
  {
    width: 2.5,
    delay: 19,
  },
  {
    width: 2.5,
    delay: 18,
  },
  {
    width: 1.6,
    delay: 21
  },
  {
    width: 1.1,
    delay: 9,
  },
  {
    width: 1.1,
    delay: 8,
  },
  {
    width: 1.8,
    delay: 7,
  },
  {
    width: 1.1,
    delay: 6,
  },
  {
    width: 1.1,
    delay: 1,
  },
  {
    width: 1.1,
    delay: 17,
  },
  {
    width: 1.1,
    delay: 13,
  },
  {
    width: 1.1,
    delay: 15,
  },
  {
    width: 8.3,
    delay: 2,
  },
  {
    width: 0,
    delay: 16,
  },
];

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
    const easingFunction = EASE.OUT_BOUNCE;
    //const easingFunction = EASE.OUT_QUART;
    //const easingFunction = EASE.OUT_EXPO;
    //const easingFunction = EASE.OUT_QUINT;
    //const easingFunction = EASE.OUT_ELASTIC;
    const images = await loadImages(["/images/intro_ad.svg", "/images/intro_yo.svg"]);
    const ad = new Bitmap(images[0]);
    const yo = new Bitmap(images[1]);
    let delay: number = 0;
    let duration: number = 0;


    ad.x = 40;
    ad.y = -ad.height;
    yo.y = -yo.height;

    delay = getDelayFromIndex(0);
    duration = getDurationFromDelay(delay);
    animator.addAnimation(
      new CanvasAnimatorAnimation(ad, {}, duration, getDelayFromIndex(0), easingFunction, () => {
        animator.stop();
      })
    );

    for (let i = 1, len = squareWidths.length - 2; i < len; i++) {
      const square = new Square();
      square.color = "black";
      square.height = 5;
      square.y = -square.height;
      delay = getDelayFromIndex(i);
      duration = getDurationFromDelay(delay);
      animator.addAnimation(
        new CanvasAnimatorAnimation(square, {}, duration, delay, easingFunction)
      );
    }

    delay = getDelayFromIndex(animationsMap.length - 1);
    duration = getDurationFromDelay(delay);
    animator.addAnimation(
      new CanvasAnimatorAnimation(yo, {}, duration, delay, easingFunction)
    );

    setTargets();

    /*animator.getAnimations().forEach((animation, index) => {

    });*/

    animator.start();
  }
});

function getDelayFromIndex(index: number): number {
  return animationsMap[index].delay * 20;
}

function getDurationFromDelay(delay: number): number {
  return DURATION - delay;
}

function setTargets(): void {
  const canvas = refCanvas.value;
  if (canvas && animator) {
    const animations = animator.getAnimations();
    const ad = animations[0];
    const yo = animations[animations.length - 1];
    const targetXyo = canvas.width - yo.displayObject.width - MARGIN_X;
    let lastSquare;
    yo.displayObject.x = canvas.width - yo.displayObject.width - MARGIN_X;
    ad.setTarget({ y: canvas.height - ad.displayObject.height - MARGIN_BOTTOM - AD_MARGIN_BOTTOM }
    );
    yo.setTarget({ y: canvas.height - ad.displayObject.height - MARGIN_BOTTOM });

    const squaresFieldWidth = targetXyo - ad.displayObject.right - GAP * 2;

    for (let i = 1, len = animations.length - 1; i < len; i++) {
      const square = animations[i];
      if (lastSquare) {
        square.displayObject.x = lastSquare.displayObject.right;
      } else {
        square.displayObject.x = ad.displayObject.right + GAP;
      }
      square.displayObject.width = Math.floor(squaresFieldWidth / 100 * animationsMap[i].width);
      square.setTarget({ y: canvas.height - square.displayObject.height - MARGIN_BOTTOM - 14 });
      lastSquare = square;
    }

    if (lastSquare) {
      lastSquare.displayObject.width = yo.displayObject.x - GAP - lastSquare.displayObject.x;
    }
  }
}

onBeforeUnmount(() => {
  animator?.stop();
  window.removeEventListener("resize", onResize);
});

</script>

<template>
  <canvas ref="refCanvas" class="absolute inset-0 w-full h-full" width="100%" height="100%" />
</template>