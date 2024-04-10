<script setup lang="ts">
import {
  CanvasAnimator,
  CanvasAnimatorAnimation,
  EASE,
  type IAnimationProps, type IEasingFunction,
  Square
} from "~/shared/lib/CanvasAnimator";

const refCanvas = ref<HTMLCanvasElement>();
const canvasWidth = 200;
let animator: CanvasAnimator;

onMounted(() => {
  if (refCanvas.value) {
    /*const square1 = new Square(100, 0, 0, 86, "white");
    const square2 = new Square(100, 0, 0, 86, "white");

    let animations = [
      new CanvasAnimatorAnimation(square1, { width: 38, x: 0 }, 3000, 0, EASE.IN_OUT_CUBIC, (animation: CanvasAnimatorAnimation) => {
        animator.removeAnimation(animation);
        animator.addAnimation(new CanvasAnimatorAnimation(square1, { width: 0, x: 100 }, 3000, 2000, EASE.IN_OUT_CUBIC, (animation) => {
          animator.removeAnimation(animation);
          animator.addAnimation(new CanvasAnimatorAnimation(square1, { width: 38, x: 0 }, 3000, 2000, EASE.IN_OUT_CUBIC));

        }));
      }),
      new CanvasAnimatorAnimation(square2, { width: 38, x: 200 - 38 }, 3000, 0, EASE.IN_OUT_CUBIC, (animation) => {
        animator.removeAnimation(animation);
        animator.addAnimation(new CanvasAnimatorAnimation(square2, { width: 0, x: 100 }, 3000, 2000, EASE.IN_OUT_CUBIC, (animation) => {
          animator.removeAnimation(animation);
          animator.addAnimation(new CanvasAnimatorAnimation(square2, { width: 38, x: 200 - 38 }, 3000, 2000, EASE.IN_OUT_CUBIC));

        }));
      }),
    ];*/
    animator = new CanvasAnimator(refCanvas.value);
    addLoopAnimation(
      {x: 100, y: 0, width: 0, height: 86},
      {width: 38, x: 0},
      3000,
      1000,
      EASE.IN_OUT_CUBIC
    );
    animator.start();
  }
});

function addLoopAnimation(fromOptions: IAnimationProps, toProps: IAnimationProps, duration: number, delay: number, ease: IEasingFunction) {
  const square = new Square(fromOptions.x, fromOptions.y, fromOptions.width, fromOptions.height, "white");
  const square2 = new Square(fromOptions.x, fromOptions.y, fromOptions.width, fromOptions.height, "white");

  const startAnimation = (square: Square, toProps: IAnimationProps, cycleDelay: number = 0) => {
    animator.addAnimation(
      new CanvasAnimatorAnimation(
        square,
        toProps,
        duration,
        cycleDelay,
        ease,
        (animation) => {
          animator.removeAnimation(animation);
          animator.addAnimation(
            new CanvasAnimatorAnimation(
              square,
              fromOptions,
              duration,
              delay,
              ease,
              (animation) => {
                animator.removeAnimation(animation);
                startAnimation(square, toProps, delay);
              }
            )
          )
        }
      )
    );
  }
  startAnimation(square, toProps);
  startAnimation(square2, {...toProps, x: canvasWidth - toProps.width!});
}

onBeforeUnmount(() => {
  animator?.stop();
});

</script>

<template>
  <canvas ref="refCanvas" />
</template>