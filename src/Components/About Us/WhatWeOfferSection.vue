<template>
<section class="container">
  <div class="row" >
    <div class="col-md-4 d-flex flex-column align-items-center" v-for="(offer, i) in offers" :key="i">
      <div class="card border-0" style="width: 18rem;">
        <img class="card-img-top ratio ratio-1x1" :src=offer.image alt="Card image cap">
        <div class="card-body text-primary text-center">
          <h5 class="card-title mb-3">{{ offer.title }}</h5>
          <p class="card-text">{{ offer.text }}</p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "WhatWeOfferSection"
}
</script>
<script setup>
const offers = [
  {
    title: 'EXPLORATION',
    text: ' Our platform lets you explore each winery\'s unique charm.',
    image: 'src/assets/images/about-us/what-we-offer-section/explore.png',
  },
  {
    title: 'EDUCATION',
    text: 'We\'re here to enhance your wine knowledge and appreciation.',
    image: 'src/assets/images/about-us/what-we-offer-section/education.png',
  },
  {
    title: 'TASTING NOTES',
    text: 'Experience the essence of each wine before you even uncork the bottle.',
    image: 'src/assets/images/about-us/what-we-offer-section/tasting.png',
  },
]
</script>
<style scoped>

</style>