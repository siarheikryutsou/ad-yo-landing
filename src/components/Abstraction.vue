<script setup lang="ts">
import {
  CanvasAnimatorAnimation,
  EASE,
  type IAnimationProps, type IEasingFunction,
  Square
} from "~/shared/lib/CanvasAnimator";
import { AdYoCanvasAnimator } from "~/shared";

const refCanvas = ref<HTMLCanvasElement>();
const canvasWidth = 150;
const canvasCenterX = canvasWidth / 2;
let animator: AdYoCanvasAnimator;
const sizesWeights = [50, 25, 10, 7, 3];

onMounted(() => {
  if (refCanvas.value) {
    let lastY = 0;
    const pt = 4;
    const sizes = [pt, pt*2, pt*5, pt*12, pt*18];
    const minWidth = pt*3;
    const maxWidth = Math.round(canvasCenterX);

    animator = new AdYoCanvasAnimator(refCanvas.value, canvasWidth, pt);

    while(lastY < refCanvas.value?.height) {
      const xStart = Math.random() > 0.5 ? canvasCenterX : Math.random() * canvasCenterX;
      const widthStart = minWidth + (Math.random() * (maxWidth - minWidth));
      const h = sizes[weighedRandom(sizesWeights)];
      const widthEnd = Math.random() * canvasCenterX;
      const xEnd = xStart === canvasCenterX ? 0 : canvasCenterX;
      const margin = Math.random() > 0.5 ? 0 : pt;
      const duration = 2000 + Math.random() * 3000;
      const delay = Math.random() * 1000;

      addLoopAnimation(
        { x: xStart, y: lastY, width: widthStart, height: h },
        { x: xEnd, width: widthEnd},
        duration,
        delay,
        EASE.IN_OUT_CUBIC
      );

      lastY += h + margin;
    }

    animator.start();
  }
});

function addLoopAnimation(fromProps: IAnimationProps, toProps: IAnimationProps, duration: number, delay: number, ease: IEasingFunction, startsFromPercentage: number = 0) {
  const square = new Square(fromProps.x, fromProps.y, fromProps.width, fromProps.height, "white");
  let currentProps = toProps;
  let newFromProps = {} as IAnimationProps;

  for(const propKey in toProps) {
    const key = propKey as keyof IAnimationProps;
    newFromProps[key] = fromProps[key];
  }

  fromProps = newFromProps;

  const animation = new CanvasAnimatorAnimation(
    square,
    currentProps,
    duration,
    0,
    ease,
    () => {
      currentProps = currentProps === toProps ? fromProps : toProps;
      animation.setTarget(currentProps, delay);
    },
  );

  animator.addAnimation(animation);
}

function weighedRandom(weights: number[]): number {
  const sum = weights.reduce((acc, weight) => acc + weight, 0);
  const rand = Math.random() * sum;
  let acc = 0;

  for(let i = 0; i < weights.length; i++) {
    acc += weights[i];
    if (rand < acc) {
      return i;
    }
  }

  return 0;
}


onBeforeUnmount(() => {
  animator?.stop();
});

</script>

<template>
  <canvas ref="refCanvas" :width="canvasWidth" />
</template>