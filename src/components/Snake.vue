<script setup lang="ts">
import { Bitmap, CanvasAnimator, CanvasAnimatorAnimation, loadImages, Square } from "~/shared/lib/CanvasAnimator";
import { getElementRect } from "~/shared";

const refCanvas = ref<HTMLCanvasElement>();
const refContainer = ref<HTMLElement>();
const refBlockRB = ref<HTMLElement>();
const refBlockLB = ref<HTMLElement>();
const refBlockCT = ref<HTMLElement>();
const refBlockRT = ref<HTMLElement>();
const MIN_WIDTH_DESKTOP = 1280;
const POINT_SIZE = 8;
const isPLaying = false;
let interval: number = 0;
let loopTimeout: number = 0;
let targetColor: "white" | "black" = "black";

let points: {
  a: Square,
  b: Square,
  c: Square,
  d: Square,
  e: Square,
  f: Square,
  g: Square,
  bb: Square,
  cc: Square,
  ccc: Square,
  dd: Square,
  ddd: Square,
  ee: Square
};
let pointAnimations: CanvasAnimatorAnimation[] = [];
let yoAnimation: CanvasAnimatorAnimation;
let animator: CanvasAnimator;
let observer: IntersectionObserver;

function onResize() {
  const canvas = refCanvas.value;
  const container = refContainer.value;
  if (canvas && container) {
    if (animator) {
      if (window.innerWidth < MIN_WIDTH_DESKTOP) {
        animator.pause();
        return;
      } else {
        animator.resume();
      }
    }

    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    setTargets();
  }
}

function setTargets(): void {
  const canvas = refCanvas.value;
  if (canvas && animator) {
    setPositions();
  }
}

function setPositions(): void {
  const canvas = refCanvas.value;
  const blockRB = refBlockRB.value;
  const blockRT = refBlockRT.value;
  const blockLB = refBlockLB.value;
  const blockCT = refBlockCT.value;
  const container = refContainer.value;
  if (canvas && container && blockRB && blockRT && blockLB && blockCT) {
    const rectRB = getElementRect(blockRB, container);
    const rectRT = getElementRect(blockRT, container);
    const rectLB = getElementRect(blockLB, container);
    const rectCT = getElementRect(blockCT, container);

    const yo = yoAnimation;
    yo.displayObject.x = canvas.width - yo.displayObject.width;
    yo.displayObject.y = Math.round((rectRT.bottom + ((rectRB.y - rectRT.bottom) * 0.65)) - (yo.displayObject.height / 2));

    points.b.x = correctPoint(rectLB.width * 0.6 - (points.b.width / 2));
    points.b.y = correctPoint(points.a.y);

    //points.a.width = points.b.x - points.a.x;

    points.c.x = correctPoint(rectLB.right + ((rectCT.x - rectLB.right) / 2) - (points.c.width / 2));
    points.c.y = correctPoint(rectCT.height / 2 - (points.c.height / 2));

    points.bb.x = correctPoint(points.b.x + ((points.c.x - points.b.x) / 2));
    points.bb.y = correctPoint(points.b.y + ((points.c.y - points.b.y) * 0.3));

    points.d.x = correctPoint(rectCT.x + (rectCT.width / 2) - (points.d.width / 2));
    points.d.y = correctPoint(rectCT.bottom + rectCT.height - (points.d.height / 2));

    points.cc.x = correctPoint(points.c.x + ((rectCT.x - points.c.x) / 2));
    points.cc.y = correctPoint(points.d.y - (rectCT.height * 0.4));

    points.ccc.x = correctPoint(points.cc.x + ((points.d.x - points.cc.x) / 2));
    points.ccc.y = correctPoint(points.d.y - (rectCT.height * 0.1));

    points.e.x = correctPoint(rectCT.right + ((rectRT.x - rectCT.right) / 2) - (points.e.width / 2));
    points.e.y = correctPoint(rectCT.bottom + (rectCT.height * 0.2));

    points.dd.x = correctPoint(rectCT.right - (rectCT.width * 0.25));
    points.dd.y = correctPoint(points.d.y - (rectCT.height * 0.1));

    points.ddd.x = correctPoint(points.dd.x + ((points.e.x - points.dd.x) / 2));
    points.ddd.y = correctPoint(points.e.y + ((points.dd.y - points.e.y) * 0.3));

    points.f.x = correctPoint(rectRB.x + (rectRB.width * 0.4));
    points.f.y = correctPoint(yo.displayObject.y + (yo.displayObject.height / 2) - (points.g.height / 2));

    points.ee.x = correctPoint(points.e.x + ((points.f.x - points.e.x) * 0.3));
    points.ee.y = correctPoint(points.e.y + ((points.f.y - points.e.y) * 0.1));

    points.g.x = correctPoint(yo.displayObject.x - points.g.width - POINT_SIZE);
    points.g.y = points.f.y;

    points.f.width = points.g.x - points.f.x;

    if (pointAnimations.length) {
      pointAnimations.forEach(el => animator.removeAnimation(el));
      pointAnimations = [];
    }

    drawLine(points.a, points.b);
    drawLine(points.b, points.bb);
    drawLine(points.bb, points.c);
    drawLine(points.c, points.cc);
    drawLine(points.cc, points.ccc);
    drawLine(points.ccc, points.d);
    drawLine(points.d, points.dd);
    drawLine(points.dd, points.ddd);
    drawLine(points.ddd, points.e);
    drawLine(points.e, points.ee);
    drawLine(points.ee, points.f);
    drawLine(points.f, points.g);

  }
}

function correctPoint(value: number) {
  return Math.round(value / POINT_SIZE) * POINT_SIZE;
}

function drawLine(pointA: Square, pointB: Square): void {
  const dx = Math.abs(pointB.x - pointA.x);
  const dy = -Math.abs(pointB.y - pointA.y);
  const sx = (pointA.x < pointB.x) ? POINT_SIZE : -POINT_SIZE;
  const sy = (pointA.y < pointB.y) ? POINT_SIZE : -POINT_SIZE;

  let err = dx + dy;
  let currentX = pointA.x;
  let currentY = pointA.y;

  while (true) {
    const square = new Square(currentX, currentY, POINT_SIZE, POINT_SIZE, "white");
    const animation = new CanvasAnimatorAnimation(square, {}, 0);
    pointAnimations.push(animation);
    animator.addAnimation(animation);

    if (currentX >= pointB.x && currentY >= pointB.y) break;

    const e2 = 2 * err;
    if (e2 >= dy) {
      if (currentX === pointB.x) break;
      err += dy;
      currentX += sx;
    }
    if (e2 <= dx) {
      if (currentY === pointB.y) break;
      err += dx;
      currentY += sy;
    }
  }
}


onMounted(async () => {
  const canvas = refCanvas.value;
  if (!canvas) return;

  window.addEventListener("resize", onResize);
  onResize();

  animator = new CanvasAnimator(canvas);

  const images = await loadImages(["/images/intro_ad.svg", "/images/intro_yo.svg"]);
  const ad = new Bitmap(images[0]);
  const yo = new Bitmap(images[1]);
  points = {
    a: new Square(correctPoint(ad.width + POINT_SIZE), correctPoint(yo.height * 0.5), POINT_SIZE, POINT_SIZE, "#000"),
    b: new Square(0, 0, POINT_SIZE, POINT_SIZE, "#000"),
    bb: new Square(0, 0, POINT_SIZE, POINT_SIZE, "#000"),
    c: new Square(0, 0, POINT_SIZE, POINT_SIZE, "#000"),
    ccc: new Square(0, 0, POINT_SIZE, POINT_SIZE, "#000"),
    cc: new Square(0, 0, POINT_SIZE, POINT_SIZE, "#000"),
    d: new Square(0, 0, POINT_SIZE, POINT_SIZE, "#000"),
    dd: new Square(0, 0, POINT_SIZE, POINT_SIZE, "#000"),
    ddd: new Square(0, 0, POINT_SIZE, POINT_SIZE, "#000"),
    e: new Square(0, 0, POINT_SIZE, POINT_SIZE, "#000"),
    ee: new Square(0, 0, POINT_SIZE, POINT_SIZE, "#000"),
    f: new Square(0, 0, POINT_SIZE, POINT_SIZE, "#000"),
    g: new Square(0, 0, POINT_SIZE, POINT_SIZE, "#000")
  };

  yoAnimation = new CanvasAnimatorAnimation(yo, {}, 0);
  animator.addAnimations(
    new CanvasAnimatorAnimation(ad, {}, 0),
    yoAnimation
  );

  setPositions();

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        animator.isStarted() ? animator.resume() : animator.start();
        play();
      } else {
        animator.isStarted() && animator.pause();
        pause();
      }
    });
  });

  observer.observe(canvas);

});


function play():void {
  if(interval) {
    return;
  }
  let i = 0;
  interval = window.setInterval(() => {
    if(i > pointAnimations.length - 1) {
      i = 0;
      clearInterval(interval);
      interval = 0;
      loopTimeout = window.setTimeout(() => {
        targetColor = targetColor === "white" ? "black" : "white";
        play();
      }, 2000);
    }
    pointAnimations[i].displayObject.color = targetColor;
    i++;
  }, 25);
}

function pause(): void {
  if(interval) {
    clearInterval(interval);
    interval = 0;
  }
}

onBeforeUnmount(() => {
  animator?.stop();
  window.removeEventListener("resize", onResize);
  observer?.disconnect();
  interval && clearInterval(interval);
  loopTimeout && clearTimeout(loopTimeout);
})


</script>

<template>
  <div ref="refContainer" class="flex flex-col grow relative">
    <canvas ref="refCanvas"
            class="hidden xl:block w-full h-full absolute top-0 left-0 right-0 bottom-0" />
    <div class="xl:hidden">
      <img src="/images/snake_mob_decor_curve_1.svg" width="92" height="29" alt="" aria-hidden="true" loading="lazy" />
      <img class="w-full mt-10 mb-20" src="/images/snake_mob.svg" width="312" height="148" aria-hidden="true" alt=""
           loading="lazy">
    </div>
    <div
      class="flex flex-col xl:flex-row justify-between h-full grow space-y-20 xl:space-y-0 xl:[&>*]:flex-1 xl:[&>*]:max-w-[300px] z-10">
      <div class="flex flex-col justify-end xl:flex-grow">
        <div ref="refBlockLB" class="info-block">
          <h3>Compliance <br class="hidden xl:block" />with GDPR data protection law</h3>
          <p>This law establishes the rights of customers in relation to their personal data, namely: access control,
            storage, edit and deletion. Ad-Yo fully complies with the law: personal data is stored directly on user
            devices, and their data encrypted in hashes is stored on the blockchain. The advertiser gets access to
            this
            data only with the consent of the customer.</p>
        </div>
      </div>

      <div class="flex items-start">
        <div ref="refBlockCT" class="info-block">
          <h3>Rewards for viewing ads</h3>
          <p>All revenue from ads in the current business model goes to media platforms. The customers themselves act as
            a product, receiving nothing but access to the platform itself. With Ad-Yo, the customer receives all
            rewards minus the network commission.</p>
        </div>
      </div>

      <div class="flex flex-col xl:justify-between flex-grow">
        <div ref="refBlockRT" class="info-block">
          <h3>Verifiability</h3>
          <p>Depersonalized customer data, ad views and transaction information are recorded in the blockchain and can
            be verified for authenticity.</p>
        </div>

        <div ref="refBlockRB" class="info-block">
          <h3>Confidentiality</h3>
          <p>The platform provides advertisers access to each customer and their interests without revealing the
            identity of that customer.</p>
        </div>
      </div>

    </div>
  </div>
</template>
