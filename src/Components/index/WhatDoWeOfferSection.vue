<template>
  <section class=" pt-5 pb-4 mt-5">
    <div class="d-flex flex-column justify-content-center text-white-50 text-center">
      <h2 class="fw-lighter">WHAT DO WE OFFER</h2>
      <hr/>
      <div class=" justify-content-center mx-auto row ">
        <div class="col-4 " v-for="(offer, i) in offers" :key="i">
          <div class="pt-4">
            <img :src=offer.img>
          </div>
          <div class="py-4 mt-2 ">
            {{ offer.desc }}
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhatDoWeOfferSection",
  data() {
    return {
      offers: [
        {
          img: '/images/hero-section/wine.svg',
          desc: 'Lorem ipsum dolor sit amet',
        },
        {
          img: '/images/hero-section/wine.svg',
          desc: 'Lorem ipsum dolor sit amet',
        },
        {
          img: '/images/hero-section/wine.svg',
          desc: 'Lorem ipsum dolor sit amet',
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>