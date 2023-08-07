<template>
  <main class="bg-primary">
    <hero-section/>
    <what-do-we-offer-section/>
    <h2 class="mt-5 fw-lighter text-center text-white-50">WINERIES</h2>
    <hr class="mb-5 text-white"/>
    <wineries-section class="d-flex flex-column  align-items-center"/>
    <div class="text-center my-5">
      <a class="btn btn-outline-light mb-5 w-25 fs-5 text-white bg-secondary" href="/wineries">See all >></a>
    </div>
    <most-popular-wines/>
    <about-us-section/>
    <custom-footer/>
  </main>
</template>

<script>

export default {
  name: "Index",
}
</script>
<script setup>

import HeroSection from "../Components/index/HeroSection.vue";
import CustomFooter from "../Components/layouts/CustomFooter.vue";
import WhatDoWeOfferSection from "../Components/index/WhatDoWeOfferSection.vue";
import WineriesSection from "../Components/WineriesSection.vue";
import AboutUsSection from "@/Components/index/AboutUsSection.vue";
import MostPopularWines from "@/Components/Wine/MostPopularWines.vue";



</script>

<style scoped>
.margin-100px {
  margin-bottom: 100px;
}
</style>