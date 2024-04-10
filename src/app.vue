<template>
  <header class="flex justify-between items-center fixed w-full z-50">
    <nuxt-link to="/" class="pl-6 md:pl-10" aria-label="Ad-Yo Logo">
      <nuxt-icon name="header_logo" class="animate-logo-to-white" />
    </nuxt-link>
    <Menu />
  </header>
  <main class="flex flex-col flex-grow">
    <NuxtPage />
  </main>
  <footer/>
</template>
