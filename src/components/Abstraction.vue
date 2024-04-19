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
let lastY = 0;
const pt = 4;
const sizes = [pt, pt*2, pt*5, pt*12, pt*18];
const minWidth = pt*3;
const maxWidth = Math.round(canvasCenterX);
let observer: IntersectionObserver;

function fillCanvas() {
  const canvas = refCanvas.value;
  if(canvas) {
    while (lastY < canvas.height) {
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
        { x: xEnd, width: widthEnd },
        duration,
        delay,
        EASE.IN_OUT_CUBIC
      );

      lastY += h + margin;
    }
  }
}

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

function addAnimations() {
  if(!animator) return;
  console.log("addAnimations");
  const animations = animator.getAnimations();

  const lastAnimation = animations.reduce((max, current) => {
    return (max.displayObject.bottom > current.displayObject.bottom) ? max : current;
  });

  if(lastAnimation.displayObject.y < window.innerHeight) {
    lastY = lastAnimation.displayObject.bottom;
    fillCanvas();
  }
}

function removeAnimations() {
  const animations = animator.getAnimations();
  animations.forEach(animation => {
    if(animation.displayObject.y > window.innerHeight) {
      animator.removeAnimation(animation);
    }
  });
}

function onResize(event?: Event): void {
  if (refCanvas.value) {
    const canvas = refCanvas.value;
    canvas.width = 150;
    if(window.innerHeight > canvas.height) {
      canvas.height = window.innerHeight;
      addAnimations();
    } else if(window.innerHeight < canvas.height) {
      canvas.height = window.innerHeight;
      removeAnimations();
    }
  }
}

onMounted(() => {
  if (refCanvas.value) {
    window.addEventListener("resize", onResize);
    onResize();
    animator = new AdYoCanvasAnimator(refCanvas.value, canvasWidth, pt);
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
  <canvas ref="refCanvas" :width="canvasWidth" />
</template>