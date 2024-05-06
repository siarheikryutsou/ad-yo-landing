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
let points: {a: Square, b: Square, c: Square, d: Square, e: Square, f: Square, g: Square};

let animator: CanvasAnimator;

function onResize() {
  const canvas = refCanvas.value;
  const container = refContainer.value;
  if (canvas && container) {
    if(animator) {
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

    const animations = animator.getAnimations();
    const yo = animations[animations.length - 1];
    yo.displayObject.x = canvas.width - yo.displayObject.width;
    yo.displayObject.y = Math.round((rectRT.bottom + ((rectRB.y - rectRT.bottom) * 0.65)) - (yo.displayObject.height / 2));

    points.b.x = Math.round(rectLB.width * 0.6 - (points.b.width / 2));
    points.b.y = points.a.y;

    points.a.width = points.b.x - points.a.x;

    points.c.x = Math.round(rectLB.right + ((rectCT.x - rectLB.right) / 2) - (points.c.width / 2));
    points.c.y = Math.round(rectCT.height / 2 - (points.c.height / 2));

    points.d.x = Math.round(rectCT.x + (rectCT.width / 2) - (points.d.width / 2));
    points.d.y = Math.round(rectLB.y + (rectLB.height * 0.65) - (points.d.height / 2));

    points.e.x = Math.round(rectCT.right + ((rectRT.x - rectCT.right) / 2) - (points.e.width / 2));
    points.e.y = Math.round(rectRT.bottom + ((rectRB.y - rectRT.bottom) * 0.4) - (points.e.height / 2));

    points.f.x = Math.round(rectRB.x + (rectRB.width * 0.4));
    points.f.y = Math.round(yo.displayObject.y + (yo.displayObject.height / 2) - (points.g.height / 2));

    points.g.x = Math.round(yo.displayObject.x - points.g.width - POINT_SIZE);
    points.g.y = points.f.y;

    points.f.width = points.g.x - points.f.x;


    const heightBC = points.c.y - points.b.bottom;
    const widthBC = points.c.x - points.b.right;
    const maxPointsX = Math.floor(widthBC / POINT_SIZE);

    //console.log(heightBC + "x" + widthBC);
    //console.log("maxPoints:", maxPointsX);

    /*for(let i = 0, point; i < maxPointsX; i++) {
      point =
      animator.addAnimation(
        new CanvasAnimatorAnimation(new Square(points.b.right + (i * POINT_SIZE), points.b.bottom, POINT_SIZE, POINT_SIZE, "#FF00FF"), {}, 0)
      )
    }*/

  }

}

onMounted(async () => {
  const canvas = refCanvas.value;
  if(!canvas) return;

  window.addEventListener("resize", onResize);
  onResize();

  animator = new CanvasAnimator(canvas);

  const images = await loadImages(["/images/intro_ad.svg", "/images/intro_yo.svg"]);
  const ad = new Bitmap(images[0]);
  const yo = new Bitmap(images[1]);
  points = {
    a: new Square(ad.width + POINT_SIZE, Math.round(yo.height * 0.5), POINT_SIZE, POINT_SIZE, "#00FF00"),
    b: new Square(0, 0, POINT_SIZE, POINT_SIZE, "#FF00FF"),
    c: new Square(0, 0, POINT_SIZE, POINT_SIZE, "#0000FF"),
    d: new Square(0, 0, POINT_SIZE, POINT_SIZE, "#00FFFF"),
    e: new Square(0, 0, POINT_SIZE, POINT_SIZE, "#FF0000"),
    f: new Square(0, 0, POINT_SIZE, POINT_SIZE, "#FFFF00"),
    g: new Square(0, 0, POINT_SIZE, POINT_SIZE, "#808080")
  }
  animator.addAnimations(
    new CanvasAnimatorAnimation(ad, {}, 0),
    new CanvasAnimatorAnimation(points.a, {}, 0),
    new CanvasAnimatorAnimation(points.b, {}, 0),
    new CanvasAnimatorAnimation(points.c, {}, 0),
    new CanvasAnimatorAnimation(points.d, {}, 0),
    new CanvasAnimatorAnimation(points.e, {}, 0),
    new CanvasAnimatorAnimation(points.f, {}, 0),
    new CanvasAnimatorAnimation(points.g, {}, 0),
    new CanvasAnimatorAnimation(yo, {}, 0),
  );

  setPositions();

  animator.start();
  /*setTimeout(() => {
    animator.pause();
  }, 1000);*/

});



</script>

<template>
  <div ref="refContainer" class="flex flex-col grow relative">
    <canvas ref="refCanvas" class="hidden xl:block w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-emerald-100" />
    <div class="xl:hidden">
      <img src="/images/snake_mob_decor_curve_1.svg" width="92" height="29" alt="" aria-hidden="true" loading="lazy" />
      <img class="w-full mt-10 mb-20" src="/images/snake_mob.svg" width="312" height="148" aria-hidden="true" alt="" loading="lazy">
    </div>
    <div class="flex flex-col xl:flex-row justify-between h-full grow space-y-20 xl:space-y-0 xl:[&>*]:flex-1 xl:[&>*]:max-w-[300px] z-10">
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
          <p>All revenue from ads in the current business model goes to media platforms. The customer themselves acts as
            a
            product, receiving nothing but access to the platform itself. With Ad-yo, the customer receives all rewards
            minus the network commission.</p>
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
          <p>The platform provides advertisers with access to each customer and their interests without revealing the
            identity of that customer.</p>
        </div>
      </div>

    </div>
  </div>
</template>
