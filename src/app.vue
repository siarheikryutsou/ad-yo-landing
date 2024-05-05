<template>
  <header class="flex justify-between items-center fixed w-full z-50">
    <nuxt-link to="/" class="pl-6 md:pl-10 py-3" aria-label="Ad-Yo Logo">
      <nuxt-icon name="header_logo" class="animate-logo-to-white" />
    </nuxt-link>
    <Menu />
  </header>
  <main class="flex flex-col flex-grow">
    <NuxtPage />
  </main>
  <footer class="bg-[#EAEAEA] wrapper !py-20">
    <div class="flex flex-col items-center gap-6 lg:gap-0 lg:flex-row justify-between [&>*]:flex [&>*]:gap-2">
      <h3>Ad – Yo SAS</h3>
      <div>
        <h4 class="h3">E-Mail:</h4>
        <a href="mailto:contact@ad-yo.com" title="Email us" aria-label="Email us">contact@ad-yo.com</a>
      </div>
      <div class="not-italic">
        <h4 class="h3">Address:</h4>
        <address class="not-italic">124 Rue Réaumur, 75002 Paris, France</address>
      </div>
      <div class="flex [&>*]:size-5 gap-5">
        <a href="#" title="Follow us on Twitter" aria-label="Follow us on Twitter">
          <nuxt-icon name="twitter" filled />
        </a>
        <a href="#" title="Follow us on LinkedIn" aria-label="Follow us on LinkedIn">
          <nuxt-icon name="linkedin" filled />
        </a>
        <a href="#" title="Follow us on Telegram" aria-label="Follow us on Telegram">
          <nuxt-icon name="telegram" filled />
        </a>
      </div>
    </div>
  </footer>
</template>
