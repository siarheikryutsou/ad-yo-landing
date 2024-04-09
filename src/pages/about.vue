<script setup lang="ts">
const roadmapContent = [
  { title: "Roadmap",
    year: "2023",
    list: [
      "Blockchain testnet rollout",
      "AYO token issuance",
      "Campaign manager",
      "Back-end architecture",
      "App prototype",
      "Pre-seed round of investment — 150k EUR",
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
      "Network decentralisation",
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
      "Ad-Yo foundation investments",
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
    name: "Artem Shaginyan",
    img: "team_pavlo.png",
    position: "Founder",
    description: "Entrepreneur & Industrial Designer",
    experience: "Founder of Lunu.io payment cryptosystem, product design development of Lunu mPOS Terminal. 11 years of experience in e-commerce and IT projects. 4 years in blockchain and fintech projects."
  },
  {
    name: "Artem Shaginyan",
    img: "team_petr.png",
    position: "Founder",
    description: "Entrepreneur & Industrial Designer",
    experience: "Founder of Lunu.io payment cryptosystem, product design development of Lunu mPOS Terminal. 11 years of experience in e-commerce and IT projects. 4 years in blockchain and fintech projects."
  },
  {
    name: "Artem Shaginyan",
    img: "team_alisa.png",
    position: "Founder",
    description: "Entrepreneur & Industrial Designer",
    experience: "Founder of Lunu.io payment cryptosystem, product design development of Lunu mPOS Terminal. 11 years of experience in e-commerce and IT projects. 4 years in blockchain and fintech projects."
  }
];
</script>

<template>
  <section>
    <p>The idea of Ad-Yo originated in 2021 and the development started in 2022.</p>
    <p>The company is headquartered in Paris, France, and the entire team consists of 8 people.</p>
  </section>

  <section class="wrapper !pt-28 !pb-40">
    <h1 class="text-center mb-28">Team</h1>
    <div class="flex gap-32">
      <div class="flex-1" v-for="person in team" :key="person.name">
        <div class="h-64 w-full mb-28">
          <img class="object-contain w-full h-full" :src="`/images/${person.img}`" :alt="`${person.name}'s photo`" />
        </div>
        <h3 class="font-bold">{{ person.name }}</h3>
        <p class="mb-28">{{ person.position }}</p>
        <p class="mb-10 font-bold">{{ person.description }}</p>
        <p>{{ person.experience }}</p>
      </div>
    </div>
  </section>

  <section>
    <div class="wrapper !mb-0">
      <h2 class="text-8xl mb-28">Roadmap</h2>
      <div class="flex">
        <div v-for="point in roadmapContent" :key="point.year" class="flex-1 text-3xl">
          <div>{{ point.year }}</div>
          <div class="w-px h-24 border border-black mt-7"></div>
        </div>
      </div>
    </div>
    <img src="/images/about_roadmap.svg" alt="Illustration">

    <div class="wrapper flex [&>*]:flex-1">
      <div v-for="point in roadmapContent" :key="point.title">
        <div class="w-px h-24 border border-black mb-7"></div>
        <h3 class="text-3xl font-bold mb-16">{{ point.title }}</h3>
        <ul class="list-disc text-2xl font-medium ml-8">
          <li v-for="item in point.list" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>