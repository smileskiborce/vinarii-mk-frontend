<template>
<section>
  <nav class="navbar navbar-expand-lg py-3" >
    <div class="container">
      <a class="navbar-brand" href="/"><img src="../../assets/images/logo.svg"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbar">
        <div class="navbar-nav ms-lg-auto text-center fs-5 nav-item" >
          <a class="nav-link text-dark" aria-current="page" href="/wineries">{{ $t('nav.wineries') }}</a>
          <a class="nav-link text-dark" aria-current="page" href="/contact-us">{{ $t('nav.contact') }}</a>
          <a class="nav-link text-dark" aria-current="page" href="/about-us">{{ $t('nav.about-us') }}</a>
          <LanguageSwitcher class="justify-content-center align-items-center mx-2"></LanguageSwitcher>
        </div>
      </div>
    </div>
  </nav>
  <div class="bg-primary" style="height: 2px; color: #800020 "></div>
</section>
</template>

<script>
import LanguageSwitcher from "../LanguageSwitcher.vue";

export default {
  name: "CustomHeader",
  components: {LanguageSwitcher}
}
</script>

<style scoped>


</style>