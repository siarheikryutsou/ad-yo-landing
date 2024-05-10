<script setup lang="ts">
useSeoMeta({
  title: "Ad-Yo's Infrastructure: App and Ad Manager | Ad-Yo",
  description: "Ad-Yo allows users to sell access to blockchain-encrypted personal data and receive payments for ad views and other actions taken."
});
</script>

<template>
  <section class="wrapper bg-infra-top-mob md:bg-infra-top flex flex-col grow md:justify-between">
    <h1 class="mb-6 md:mb-0">Ad-Yo App<br class="md:hidden" /> and Ad Manager</h1>
    <div class="flex md:flex-col md:items-end">
      <div class="max-w-[360px]">
        <h2 class="md:h1">Infrastructure</h2>
        <p>Ad–Yo allows customers to sell access to their blockchain-encrypted personal data and receive payments for ad
          views and other actions taken</p>
      </div>
    </div>
  </section>

  <section class="wrapper flex grow md:items-center gap-10 md:gap-14 flex-col md:flex-row" id="app">
    <div class="flex items-center">
      <h2 class="h1">App</h2>
    </div>

    <div class="w-full flex flex-col md:flex-row [&>*]:flex [&>*]:w-full [&>*]:gap-6 md:[&>*]:gap-0 md:[&>*]:flex-1 md:[&>*]:block md:[&>*]:max-w-[250px] md:[&>*]:space-y-12 justify-center gap-20">
      <div class="[&>*]:w-1/2 [&>p]:flex [&>p]:items-center md:[&>*]:w-full md:[&>*]:block">
        <img src="/images/infra_app_img_01.webp" alt="App screenshot: Sign Up screen" width="805" height="1736"
             loading="lazy" />
        <p>The app allows customers to register using a phone number and the data is stored directly on the device.</p>
      </div>
      <div class="[&>*]:w-1/2 [&>p]:flex [&>p]:items-center md:[&>*]:w-full md:[&>*]:block">
        <img class="order-1" src="/images/infra_app_img_02.webp" alt="App screenshot: Interface example" width="805" height="1736"
             loading="lazy" />
        <p>Through an intuitive interface, customers can interact with ads, complete quests and tasks for advertisers.</p>
      </div>
      <div class="[&>*]:w-1/2 [&>p]:flex [&>p]:items-center md:[&>*]:w-full md:[&>*]:block">
        <img src="/images/infra_app_img_03.webp" alt="App screenshot: Profile screen" width="805" height="1736"
             loading="lazy" />
        <p>The profile displays the balance and transaction history. In order to withdraw rewards, customers have to
          connect their browser wallets.</p>
      </div>
    </div>
  </section>

  <section class="lg:wrapper lg:bg-infra-ad-manager flex grow w-full" id="advert-manager">
    <div class="lg:max-w-[320px] flex flex-col lg:justify-center">
      <h2 class="h1 lg:mb-10 wrapper lg:p-0">Ad manager</h2>
      <p class="wrapper lg:p-0">Through a user-friendly interface, the advertiser gets the opportunity to set up advertising campaigns,
        effectively focusing them on the right audience.</p>
      <img class="block lg:hidden" src="/images/bg_infra_ad_manager_mob.webp" width="1449" height="1440" alt="Illustration: Mobile application screenshot" />
    </div>
  </section>
</template>
