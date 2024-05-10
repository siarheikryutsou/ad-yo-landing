<script setup lang="ts">

useSeoMeta({
  title: "Scalable open-source platform based on blockchain | Ad-Yo",
  description: "Learn about Ad-Yo blockchain protocol, ADYO token, meet the team and discover Ad-Yo's strategic roadmap."
});

const roadmapContent = [
  {
    title: "Roadmap",
    year: "2023",
    list: [
      "Blockchain testnet rollout",
      "AYO token issuance",
      "Campaign manager",
      "Back-end architecture",
      "App prototype",
      "Pre-seed round of investment — 150k EUR"
    ]
  },

  {
    title: "MVP",
    year: "2024",
    list: [
      "Public mainnet launch",
      "Launch with early adopters",
      "App launch",
      "Generative NFT launch",
      "Initial advertisers",
      "Presale and public sale of tokens (ICO)",
      "Network decentralisation"
    ]
  },

  {
    title: "Market Validation",
    year: "2025",
    list: [
      "Network decentralization to step 'Market Validation' from 'MVP'",
      "Customers net growth",
      "Advertisers net growth",
      "Publishers net growth",
      "Ad-Yo foundation investments"
    ]
  }
];
const team = [
  {
    name: "Artem Shaginyan",
    img: "team_artem.png",
    position: "Founder",
    description: "Entrepreneur & Industrial Designer",
    experience: "Founder of Lunu.io payment cryptosystem, product design development of Lunu mPOS Terminal. 11 years of experience in e-commerce and IT projects. 4 years in blockchain and fintech projects."
  },
  {
    name: "Pavlo Denysiuk",
    img: "team_pavlo.png",
    position: "Partner, CEO",
    description: "Experienced Chief Operating Officer",
    experience: "Well rounded with experience of working in the management consulting industry. Skilled in Sales, Leadership, Management, Marketing, Merger & Acquisitions, Business Development and Marketing Strategy with a proven history of working in the e-commerce industry."
  },
  {
    name: "Petr Vishnyakov",
    img: "team_petr.png",
    position: "Partner",
    description: "Business Analyst & System Architect",
    experience: "Blockchain evangelist. Founder of Lunu.io payment cryptosystem. More than 20 years of experience in international IT projects. 7 years in blockchain and fintech projects."
  },
  {
    name: "Alisa Mitvol",
    img: "team_alisa.png",
    position: "Partner, CPO",
    description: "Product, Creative Direction, Web3 Strategy",
    experience: "Alisa has major experience in product development and management in a number of Web3 startups, having skillset to image and create digital products according to brands’ needs. She has a background in digital art, working with mixed reality and metaverse for more than five years."
  }
];
</script>

<template>
  <section class="h-auto xl:!min-h-0 flex grow xl:block">
    <div class="relative xl:px-[30px] flex xl:block">
      <div class="relative xl:pt-[56.25%] xl:-mx-[30px] grow flex">
        <div
          class="xl:bg-about xl:absolute xl:overflow-hidden inset-0 w-full bg-no-repeat bg-[length:120%] bg-[left_top] grow">
          <div class="wrapper flex w-full flex-col h-full grow">
            <div class="flex flex-col xl:flex-row w-full h-full grow xl:justify-between">
              <div class="flex items-end">
                <h1 class="">Digital advertising<br class="hidden xl:block" /> using blockchain<br class="hidden xl:block" /> technology</h1>
              </div>
              <div class="info-block xl:max-w-[300px] mt-10">
                <p>The idea of Ad-Yo originated in 2021 and the development started in 2022.</p>
                <p>The company is headquartered in Paris, France, and the entire team consists of 8 people. </p>
              </div>
              <div class="w-full grow items-center flex mt-16 xl:hidden">
                <img src="/images/bg_about_top.gif" width="2560" height="1440" alt="Illustration: Mobile app screenshot" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-about">
      <!--      <h1>Digital advertising using blockchain technology</h1>
            <p>The idea of Ad-Yo originated in 2021 and the development started in 2022.</p>
            <p>The company is headquartered in Paris, France, and the entire team consists of 8 people.</p>-->
    </div>
  </section>

  <section id="team" class="wrapper md:!pt-28 md:!pb-40">
    <h2 class="h1 mb-28">Team</h2>
    <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-16">
      <div class="" v-for="person in team" :key="person.name">
        <div class="h-64 w-full mb-14">
          <img class="object-contain object-left-top xl:object-center w-full h-full" :src="`/images/${person.img}`"
               :alt="`${person.name}'s photo`" />
        </div>
        <h3 class="h2 font-bold">{{ person.name }}</h3>
        <p class="h2 mb-8">{{ person.position }}</p>
        <p class="mb-8 font-bold">{{ person.description }}</p>
        <p>{{ person.experience }}</p>
      </div>
    </div>
  </section>

  <section id="roadmap">
    <div class="hidden lg:block">
      <div class="wrapper !mb-0">
        <h2 class="h1 mb-28">Roadmap</h2>
        <div class="flex">
          <div v-for="point in roadmapContent" :key="point.year" class="flex-1 h2">
            <div>{{ point.year }}</div>
            <div class="w-px h-24 border border-black mt-7"></div>
          </div>
        </div>
      </div>

      <img class="w-full" src="/images/about_roadmap.svg" alt="Illustration" aria-hidden="true" width="1760" height="109">

      <div class="wrapper flex [&>*]:flex-1">
        <div v-for="point in roadmapContent" :key="point.title">
          <div class="w-px h-24 border border-black mb-7"></div>
          <h3 class="h2 mb-16">{{ point.title }}</h3>
          <ul class="list-disc ml-8 space-y-4">
            <li v-for="item in point.list" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="lg:hidden wrapper">
      <h2 class="h1 mb-28">Roadmap</h2>
      <div class="flex gap-3">

        <div class="bg-roadmap-mob w-[64px] shrink-0" />

        <div class="grow space-y-14">
          <div v-for="point in roadmapContent" :key="point.title">
            <h3 class="h2 font-bold mb-8">— {{ point.year }}</h3>
            <div class="ml-7">
              <h4 class="h2 mb-6">{{point.title}}</h4>
              <ul class="list-disc ml-8 space-y-4">
                <li v-for="item in point.list" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>