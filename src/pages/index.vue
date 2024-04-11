<script setup lang="ts">
const refH1 = ref<HTMLElement>();
const animationIsComplete = ref(false);

onMounted(() => {
  refH1.value?.addEventListener("animationend", () => {
    animationIsComplete.value = true;
  });
})
</script>

<template>
  <section class="relative" :class="{'bg-black': animationIsComplete}">
    <Intro v-if="!animationIsComplete" />
    <Abstraction v-if="animationIsComplete" class="absolute h-full right-6 md:left-1/2 md:-translate-x-1/2 md:right-auto" />
    <div class="wrapper h-dvh md:h-auto flex items-center">
      <h1 ref="refH1" class="opacity-0 max-w-[200px] md:max-w-[530px] md:mt-24 text-white animate-index-h1-show">
        Blockchain protocol<br class="md:hidden" /> for digital advertising</h1>
    </div>
  </section>

  <!--  <section class="bg-[#EAEAEA] px-24 py-40 flex flex-col justify-center">
      <div class="flex justify-between gap-24">
        <h2 class="text-5xl font-medium">Ad–Yo — is a scalable open-source platform based on blockchain and peer-to-peer
          networking technologies</h2>

        <div class="relative w-2/5 flex-shrink-0">
          <img src="/images/index_pic_2_tc.svg" class="absolute -top-[96px] left-[29%]" loading="lazy" alt="Illustration">
          <div class="relative">
            <img src="/images/index_pic_2.webp" loading="lazy" alt="Illustration">
            <img src="/images/index_pic_2_inside.svg" class="absolute top-[56%] left-[35%]" loading="lazy"
                 alt="Illustration">
          </div>
          <img src="/images/index_pic_2_bl.svg" class="absolute -bottom-[106px] -left-[30%]" loading="lazy"
               alt="Illustration">
        </div>

        <div class="text-3xl">
          <h3 class="font-bold">Our mission is to change the way advertisers and customers interact. </h3>
          <p>Customers can trade their accurate and depersonalized data to advertisers in the global digital market and
            earn
            profit for viewed ads without intermediaries.</p>
        </div>
      </div>

    </section>
    <h2>The transaction for viewed ads is conducted between customers and advertisers without third parties</h2>
    <section>

    </section>

    <section>

    </section>

    <section>

    </section>

    <section>

    </section>

    <section>

    </section>

    <section>

    </section>

    <section>

    </section>

    <section>

    </section>

    <section>
      <div class="wrapper">
        <h2>A new paradigm in digital advertising</h2>
      </div>
    </section>-->
</template>
