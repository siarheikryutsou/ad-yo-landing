<script setup lang="ts">
import TransactionAnimation from "~/components/TransactionAnimation.vue";

const refH1 = ref<HTMLElement>();
const animationIsComplete = ref(false);

useSeoMeta({
  title: "Blockchain protocol for digital advertising | Ad-Yo",
  description: "Scalable open-source platform based on blockchain, where customers can trade their accurate and depersonalized data and get rewards from viewing digital ads."
});

onMounted(() => {
  refH1.value?.addEventListener("animationend", () => {
    animationIsComplete.value = true;
  });
});
</script>

<template>
  <section class="relative !pt-0" :class="{'bg-black': animationIsComplete}">
    <Intro v-if="!animationIsComplete" />
    <Abstraction v-if="animationIsComplete"
                 class="absolute h-full right-6 xl:left-1/2 md:-translate-x-1/2 md:right-auto md:left-3/4" />
    <div class="wrapper h-dvh lg:h-auto flex items-center">
      <h1 ref="refH1"
          class="opacity-0 z-10 max-w-[200px] md:max-w-[490px] lg:max-w-[530px] lg:mt-24 text-white animate-index-h1-show">
        Blockchain<br class="md:hidden" /> protocol for<br class="md:hidden" /> depersonalized<br class="md:hidden" /> data trading</h1>
    </div>
  </section>

  <section class="bg-[#EAEAEA] p-0 xl:px-24 xl:py-40 flex flex-col xl:justify-center">
    <div class="flex flex-col xl:flex-row justify-between xl:gap-12 grow xl:[&>.mv]:max-w-[300px]">
      <h2 class="mob-p md:wrapper xl:p-0 mv">Ad–Yo — is a scalable open-source platform based on blockchain and
        peer-to-peer
        networking technologies</h2>

      <div class="relative xl:w-2/5 xl:flex-shrink-0 grow flex items-center w-full">
        <img src="/images/index_pic_2_tc.svg" class="absolute -top-[96px] left-[29%] hidden xl:block" loading="lazy"
             alt="Illustration">
        <div class="relative w-full">
          <img src="/images/index_pic_2.webp" loading="lazy" alt="Illustration" class="w-full">
          <img src="/images/index_pic_2_inside.svg" class="absolute top-[56%] left-[35%] hidden xl:block" loading="lazy"
               alt="Illustration">
        </div>
        <img src="/images/index_pic_2_bl.svg" class="absolute -bottom-[53px] -left-[89px] hidden xl:block"
             loading="lazy"
             alt="Illustration">
        <img src="/images/index_pic_2_br.svg" class="absolute -bottom-[39px] right-[24px] hidden xl:block"
             loading="lazy"
             alt="Illustration">
      </div>

      <div class="flex flex-col justify-end info-block mob-p md:wrapper xl:p-0 mv">
        <h3 class="font-bold">Our mission is to change the way advertisers and customers interact. </h3>
        <p>Customers can trade their accurate and depersonalized data to advertisers in the global digital market and
          earn
          profit for viewed ads without intermediaries.</p>
      </div>
    </div>
  </section>

  <section class="wrapper flex flex-col justify-center bg-[#fcfcff]">
    <h2 class="max-w-[380px] mx-auto mb-12">The transaction for viewed ads<br /> is conducted between customers and
      advertisers
      without third parties</h2>
    <div class="md:w-3/4 w-full mx-auto [&>*]:flex [&>*]:justify-between">
      <div>
        <nuxt-icon name="man" filled />
        <nuxt-icon name="man" filled />
      </div>

      <div class="items-center gap-1 mt-6 mb-12">
        <nuxt-icon name="intro_ad" filled />
        <TransactionAnimation />
        <nuxt-icon name="intro_yo" class="pt-[10px]" filled />
      </div>

      <div class="[&>*]:max-w-[130px]">
        <p>All views are authentic</p>
        <p class="text-right">All rewards for ad views go to customers</p>
      </div>
    </div>
  </section>

  <section class="bg-cup-mob md:bg-cup flex md:wrapper">
    <div class="flex flex-col grow relative">
      <ElasticLogo part="ad" class="md:hidden mob-p pr-0 !m-0" />
      <div
        class="flex justify-between flex-col md:flex-row h-full grow md:[&>.info-block]:max-w-[300px] wrapper min-h-[600px]">
        <div class="info-block">
          <h3>Advertiser</h3>
          <p>Ad–Yo allows customers to sell access to their blockchain-encrypted personal data and receive payments for
            ad
            views and other actions taken.</p>
        </div>

        <div class="info-block flex flex-col justify-end flex-grow">
          <h3>Customer</h3>
          <p>Ad–Yo allows customers to sell access to their blockchain-encrypted personal data and receive payments for
            ad
            views and other actions taken.</p>
        </div>
      </div>
      <ElasticLogo class="absolute top-1/2 w-full -translate-y-1/2 hidden md:flex wrapper" />
      <ElasticLogo part="yo" class="md:hidden mob-p pl-0 !m-0" />
    </div>

  </section>

  <section class="wrapper flex flex-col justify-center">
    <div class="xl:grow flex flex-col gap-14">
      <h2 class="text-[28px] md:h1 xl:mb-20">Identity that matters</h2>
      <div class="flex flex-col gap-14 xl:flex-row xl:gap-12 grow xl:justify-between xl:[&>.copy]:max-w-[300px]">
        <div class="flex flex-col gap-14 xl:gap-0 justify-between copy">
          <p>Every individual has a set of values and interests that come together in a unique way</p>
          <p>The NFT reflects the evolution of the profile, which develops alongside the customer's interactions with
            advertisers and purchasing choices</p>
        </div>

        <div class="flex items-center">
          <img src="/images/index_pic_3.webp" loading="lazy" alt="Illustration">
        </div>

        <div class="flex flex-col copy">
          <p>For every Ad-Yo customer, a dynamic NFT artwork is created using generative technologies, based on the
            personal data provided by the customer</p>
        </div>
      </div>
      <div class="xl:hidden flex justify-end">
        <img src="/images/identity_decor_curve_1.svg" loading="lazy" alt="Decoration picture" width="52" height="17" />
      </div>
    </div>
  </section>

  <section class="xl:bg-bag flex flex-col bg-[#CFCDD2] !pt-0 !xl:pt-8">
    <div class="bg-bag-mob xl:bg-none">
      <div class="w-1/2 wrapper xl:w-full xl:!p-0">
        <h2 class="font-size-[20px] md:h1 xl:p-0 xl:!text-[8.05vw] xl:text-center xl:mt-32">My data<br
          class="xl:hidden" /> — <br class="xl:hidden" />my property</h2>
        <ElementsCopyCreateProfile class="block mt-14 xl:hidden" />
      </div>
    </div>

    <div
      class="flex justify-center items-start xl:justify-between xl:items-center flex-col xl:flex-row xl:[&>.info-block]:max-w-[300px] wrapper grow">
      <div class="info-block">
        <ElementsCopyCreateProfile class="hidden xl:block" />
        <p>Encrypted snapshots of the customer's depersonalized data are stored on the Ad–Yo blockchain.</p>
      </div>
      <div class="info-block mt-10 xl:mt-0 xl:!max-w-[315px]">
        <p>The customer's personal data is stored securely on their mobile device, and only they have access to it.</p>
      </div>
    </div>
  </section>

  <Preserves>
    <div class="wrapper flex flex-col lg:flex-row justify-between lg:[&>*]:space-y-16 lg:[&>*]:max-w-[200px] grow z-10">
      <div class="flex flex-col justify-center">
        <h2 class="mb-10 lg:mb-0">A transparent decentralized economy</h2>
        <div class="flex gap-6 lg:block lg:space-y-16">
          <p>The advertiser purchases ad impressions by verified customers. Blockchain provides transparency of
            transactions and ad views</p>
          <p>Reliable information about the number of ads viewed is stored in a decentralized database on the blockchain
            and can be easily accessed</p>
        </div>
      </div>

      <div class="flex [&>*]:flex-1 lg:[&>*]:flex-none lg:flex-col justify-center gap-6">
        <p>The advertiser gets the opportunity to set up advertising campaigns, effectively focusing them on the right
          audience</p>
        <p>Effective audience targeting is performed based on accurate personal data provided by the customer</p>
      </div>
    </div>

    <div>

    </div>
  </Preserves>

  <section class="flex wrapper">
    <Snake />
  </section>

  <section class="wrapper lg:bg-artichoke flex lg:items-center">
    <div
      class="flex flex-col justify-between w-full lg:items-center [&>*]:flex-1 lg:[&>.info-block]:max-w-[300px] grow lg:flex-row">
      <div>
        <h2 class="h1 mb-14 lg:mb-20">Scalable open-source<br class="hidden lg:block" /> protocol</h2>
        <div class="info-block lg:max-w-[300px]">
          <h3>Media platforms, social networks, instant messengers, games </h3>
          <p>Affiliate network / referral program. Increasing the loyalty of the target audience, attracting a new
            audience
          </p>
          <p>The global digital advertising market was valued at approximately $420.64 billion in 2023. It is expected
            to grow at a compound annual growth rate (CAGR) of 15.5% from 2023 to 2030, reaching an estimated $1,154.43
            billion by the end of the forecast period (GrandViewResearch)</p>
        </div>
      </div>

      <img src="/images/bg_artichoke.webp" class="lg:hidden w-full" width="2398" height="2400" loading="lazy"
           alt="Illustration">

      <div class="info-block">
        <h3 class="h2">Thanks to open-source solutions, the technology can be integrated into the global trade and media
          industries</h3>
        <h4 class="h3">E-commerce</h4>
        <p>Viewing ads and buying goods from the real sector within a single system</p>
        <p>The e-commerce market is estimated to reach a valuation of approximately $8.80 trillion in 2024 and is
          expected to grow to $18.81 trillion by 2029, with a compound annual growth rate (CAGR) of 15.80% during the
          forecast period (2024-2029) (MordorIntelligence)</p>
      </div>
    </div>
  </section>

  <section class="flex flex-col">
    <div class="flex-grow flex items-center justify-center relative">
      <Autro />
      <div class="wrapper z-10">
        <h2>A new paradigm in digital advertising</h2>
      </div>
    </div>
  </section>
</template>
