<template>
  <header class="flex justify-between items-center fixed w-full z-50">
    <nuxt-link to="/" class="pl-10" aria-label="Ad-Yo Logo">
      <nuxt-icon filled name="header_logo" />
    </nuxt-link>
    <Menu />
  </header>
  <main class="flex flex-col flex-grow">
    <NuxtPage />
  </main>
  <footer/>
</template>
