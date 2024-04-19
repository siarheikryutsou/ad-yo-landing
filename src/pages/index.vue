<script setup lang="ts">
const refH1 = ref<HTMLElement>();
const animationIsComplete = ref(false);

useSeoMeta({
  title: "Blockchain protocol for digital advertising | Ad-Yo",
  description: "Scalable open-source platform based on blockchain, where customers can trade their accurate and depersonalized data and get rewards from viewing digital ads.",
});

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
        Blockchain protocol<br class="md:hidden" /> for depersonalized data trading</h1>
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
        <img src="/images/index_pic_2_bl.svg" class="absolute -bottom-[53px] -left-[89px]" loading="lazy"
             alt="Illustration">
        <img src="/images/index_pic_2_br.svg" class="absolute -bottom-[39px] right-[24px]" loading="lazy"
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

  <section class="wrapper">
    <h2 class="max-w-[380px] mx-auto mb-12">The transaction for viewed ads<br /> is conducted between customers and
      advertisers
      without third parties</h2>
    <div class="w-3/4 mx-auto [&>*]:flex [&>*]:justify-between">
      <div>
        <nuxt-icon name="man" filled />
        <nuxt-icon name="man" filled />
      </div>

      <div class="items-center gap-1 mt-6 mb-12">
        <nuxt-icon name="intro_ad" filled />
        <div class="w-full h-[5px] bg-black mt-2"></div>
        <nuxt-icon name="intro_yo" class="pt-[10px]" filled />
      </div>

      <div class="[&>*]:max-w-[130px]">
        <p>All views are authentic</p>
        <p>All rewards for ad views go to customers</p>
      </div>
    </div>
  </section>

  <section class="bg-cup flex wrapper">
    <div class="flex flex-col grow relative">
      <div class="flex justify-between h-full grow [&>.info-block]:max-w-[300px]">
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
      <ElasticLogo class="absolute top-1/2 w-full -translate-y-1/2" />
    </div>

  </section>

  <section class="wrapper flex flex-col h-full">
    <h2 class="h1 mb-20">Identity that matters</h2>
    <div class="flex gap-12 grow [&>.copy]:max-w-[300px]">
      <div class="flex flex-col justify-between copy">
        <p>Every individual has a set of values and interests that come together in a unique way</p>
        <p>For every Ad-Yo customer, a dynamic NFT artwork is created using generative technologies, based on the
          personal data provided by the customer</p>
      </div>

      <div class="flex items-center">
        <img src="/images/index_pic_3.webp" loading="lazy" alt="Illustration">
      </div>

      <div class="flex flex-col copy">
        <p>The NFT reflects the evolution of the profile, which develops alongside the customer's interactions with
          advertisers and purchasing choices</p>
      </div>
    </div>
  </section>

  <section class="bg-bag flex flex-col">
    <h2 class="!text-[8.05vw] text-center mt-32">My data — my property</h2>
    <div class="flex justify-between items-center [&>.info-block]:max-w-[300px] wrapper grow">
      <div class="info-block">
        <p>The customer creates a profile with accurate personal data that verified, hashed and stored in the Ad-Yo blockchain </p>
        <p>Encrypted snapshots of the customer's depersonalized data are stored on the Ad–Yo blockchain</p>
      </div>
      <div class="info-block">
        <p>The customer's personal data is stored securely and exclusively on their mobile device, and only they have access to it</p>
      </div>
    </div>
  </section>

  <Preserves>
    <div class="wrapper flex justify-between [&>*]:space-y-16 [&>*]:max-w-[200px] grow">
      <div class="flex flex-col justify-center">
        <h2>A transparent decentralized economy</h2>
        <p>The advertiser purchases ad impressions by verified customer. Blockchain provides transparency of
          transactions and ad views</p>
        <p>Reliable information about the number of ads viewed is stored in a decentralized database on the blockchain
          and can be easily accessed</p>
      </div>

      <div class="flex flex-col justify-center">
        <p>The advertiser gets the opportunity to set up advertising campaigns, effectively focusing them on the right
          audience</p>
        <p>Effective audience targeting based on accurate personal data provided by the customer</p>
      </div>
    </div>

    <div>

    </div>
  </Preserves>

  <section class="flex wrapper">
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

  <section class="bg-[#EAEAEA] wrapper bg-artichoke">
    <h2 class="h1 w-1/2 mb-20">Scalable open-source protocol</h2>
    <div class="flex justify-between [&>*]:flex-1 [&>.info-block]:max-w-[300px]">
      <div class="info-block">
        <h3>Media platforms, social networks, instant messengers, games </h3>
        <p>Affiliate network / referral program. Increasing the loyalty of the target audience, attracting a new
          audience
        </p>
        <p>The global digital advertising market was valued at approximately $420.64 billion in 2023. It is expected
          to grow at a compound annual growth rate (CAGR) of 15.5% from 2023 to 2030, reaching an estimated $1,154.43
          billion by the end of the forecast period (GrandViewResearch)</p>
      </div>

      <div class="info-block">
        <h3>Thanks to open-source solutions, the technology can be integrated into the global trade and media
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
