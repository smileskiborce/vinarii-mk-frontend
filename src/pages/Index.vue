<template>
  <main class="bg-primary">
    <hero-section/>
    <what-do-we-offer-section/>
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

</script>

<style scoped>
</style>