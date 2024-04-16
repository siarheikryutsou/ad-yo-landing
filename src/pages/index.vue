<script setup lang="ts">
const refH1 = ref<HTMLElement>();
const animationIsComplete = ref(false);

onMounted(() => {
  refH1.value?.addEventListener("animationend", () => {
    animationIsComplete.value = true;
  });
});
</script>

<template>
  <section class="relative" :class="{'bg-black': animationIsComplete}">
    <Intro v-if="!animationIsComplete" />
    <Abstraction v-if="animationIsComplete"
                 class="absolute h-full right-6 md:left-1/2 md:-translate-x-1/2 md:right-auto" />
    <div class="wrapper h-dvh md:h-auto flex items-center">
      <h1 ref="refH1" class="opacity-0 max-w-[200px] md:max-w-[530px] md:mt-24 text-white animate-index-h1-show">
        Blockchain protocol<br class="md:hidden" /> for digital advertising</h1>
    </div>
  </section>

  <section class="bg-[#EAEAEA] px-24 py-40 flex flex-col justify-center">
    <div class="flex justify-between gap-12">
      <h2>Ad–Yo — is a scalable open-source platform based on blockchain and peer-to-peer
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

      <div class="flex flex-col justify-end info-block">
        <h3 class="font-bold">Our mission is to change the way advertisers and customers interact. </h3>
        <p>Customers can trade their accurate and depersonalized data to advertisers in the global digital market and
          earn
          profit for viewed ads without intermediaries.</p>
      </div>
    </div>
  </section>

  <section>
    <h2 class="max-w-[380px] mx-auto">The transaction for viewed ads<br /> is conducted between customers and
      advertisers
      without third parties</h2>
    <div class="flex justify-between w-3/4 mx-auto">
      <p class="max-w-[110px]">All views are authentic</p>
      <p class="max-w-[120px]">All rewards for ad views go to customers</p>
    </div>
  </section>

  <section class="bg-cup flex">
    <div class="flex flex-col grow">
      <div class="flex justify-between h-full grow">
        <div class="info-block max-w-[270px]">
          <h3>Advertiser</h3>
          <p>Ad–Yo allows customers to sell access to their blockchain-encrypted personal data and receive payments for
            ad
            views and other actions taken.</p>
        </div>

        <div class="info-block max-w-[270px] flex flex-col justify-end flex-grow">
          <h3>Customer</h3>
          <p>Ad–Yo allows customers to sell access to their blockchain-encrypted personal data and receive payments for
            ad
            views and other actions taken.</p>
        </div>
      </div>
    </div>

  </section>

  <section>
    <h2 class="h1">Identity that matters</h2>
    <div class="flex gap-12">
      <div class="flex flex-col justify-between">
        <p>Every individual has a set of values and interests that come together in a unique way</p>
        <p>For every Ad-Yo customer, a dynamic NFT artwork is created using generative technologies, based on the
          personal data provided by the customer</p>
      </div>

      <div>
        <img src="/images/index_pic_3.webp" loading="lazy" alt="Illustration">
      </div>

      <div class="flex flex-col">
        <p>The NFT reflects the evolution of the profile, which develops alongside the customer's interactions with
          advertisers and purchasing choices</p>
      </div>
    </div>
  </section>

  <section class="bg-bag">

  </section>

  <section class="bg-preserves">

  </section>

  <section class="flex">
    <div class="flex flex-col grow">
      <div class="flex justify-between h-full grow [&>*]:flex-1 [&>*]:max-w-[300px]">
        <div class="flex flex-col justify-end flex-grow">
          <div class="info-block">
            <h3>Compliance with GDPR data protection law</h3>
            <p>This law establishes the rights of customers in relation to their personal data, namely: access control,
              storage, edit and deletion. Ad-Yo fully complies with the law: personal data is stored directly on user
              devices, and their data encrypted in hashes is stored on the blockchain. The advertiser gets access to
              this
              data only with the consent of the customer.</p>
          </div>
        </div>

        <div class="info-block">
          <h3>Rewards for viewing ads</h3>
          <p>All revenue from ads in the current business model goes to media platforms. The customer themselves acts as
            a
            product, receiving nothing but access to the platform itself. With Ad-yo, the customer receives all rewards
            minus the network commission.</p>
        </div>

        <div class="flex flex-col justify-between flex-grow">
          <div class="info-block">
            <h3>Verifiability</h3>
            <p>Depersonalized customer data, ad views and transaction information are recorded in the blockchain and can
              be verified for authenticity.</p>
          </div>

          <div class="info-block">
            <h3>Confidentiality</h3>
            <p>The platform provides advertisers with access to each customer and their interests without revealing the
              identity of that customer.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section>
    <h2 class="h1 max-w-1/2">Scalable open-source protocol</h2>
    <div class="flex [&>*]:flex-1">
      <div>
        <div class="info-block">
          <h3>Media platforms, social networks, instant messengers, games </h3>
          <p>Affiliate network / referral program. Increasing the loyalty of the target audience, attracting a new
            audience
          </p>
          <p>The global digital advertising market was valued at approximately $420.64 billion in 2023. It is expected
            to grow at a compound annual growth rate (CAGR) of 15.5% from 2023 to 2030, reaching an estimated $1,154.43
            billion by the end of the forecast period (GrandViewResearch)</p>
        </div>
      </div>
      <div class="max-w-[600px] flex-grow">
        <img src="/images/index_pic_4.webp" loading="lazy" alt="Illustration">
      </div>
      <div class="info-block">
        <h3>Thanks to open-source solutions, the technology can be integrated into the global trade and media
          industries</h3>
        <h4>E-commerce</h4>
        <p>Viewing ads and buying goods from the real sector within a single system</p>
        <p>The e-commerce market is estimated to reach a valuation of approximately $8.80 trillion in 2024 and is
          expected to grow to $18.81 trillion by 2029, with a compound annual growth rate (CAGR) of 15.80% during the
          forecast period (2024-2029) (MordorIntelligence)</p>
      </div>
    </div>
  </section>

  <section>
    <div class="wrapper">
      <h2>A new paradigm in digital advertising</h2>
    </div>
  </section>

  <footer class="bg-[#EAEAEA] wrapper !py-20">
    <div class="flex [&>*]:flex-1">
      <h3>Contact information</h3>
      <nav class="flex items-center gap-2-">
        <a href="#">Ad – Yo SAS</a>
        <div>Email: <a href="mailto:contact@ad-yo.com">contact@ad-yo.com</a>
        </div>
      </nav>
    </div>
  </footer>
</template>
