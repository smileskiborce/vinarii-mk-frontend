<template>
  <main class="bg-primary">
    <hero-section/>
    <what-do-we-offer-section/>
    <h2 class="mt-5 fw-lighter text-center text-white-50">WINERIES</h2>
    <hr class="mb-5 text-white"/>
    <div v-for="(winery, i) in wineries" :key="i">
      <wineries-section :class="[i !== wineries.length-1 ?'margin-100px':'' ]" :winery="winery" :counter="i"/>
    </div>
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


const wineries = [
  {
    name: 'Winery 1',
    link: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '../../src/assets/images/wineries/winery1.png',
    wines: [
      'Wine 1',
      'Wine 2',
      'Wine 3'
    ]
  },
  {
    name: 'Winery 2',
    link: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '../../src/assets/images/wineries/winery2.png',
    wines: [
      'Wine 1',
      'Wine 2',
      'Wine 3'
    ]
  },
  {
    name: 'Winery 3',
    link: '',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '../../src/assets/images/wineries/winery3.png',
    wines: [
      'Wine 1',
      'Wine 2',
      'Wine 3'
    ]
  },
]
</script>

<style scoped>
.margin-100px {
  margin-bottom: 100px;
}
</style>