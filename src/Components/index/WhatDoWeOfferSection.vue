<template>
<section class=" py-5">
  <div class="d-flex flex-column justify-content-center text-white-50 text-center">
    <h2 class="fw-lighter">WHAT DO WE OFFER</h2>
    <hr/>
    <div v-for="(offer, i) in offers" :key="i" class="d-flex flex-row justify-content-between mx-auto">
      <img :src=offer.img>
      <span>{{offer.desc}}</span>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "WhatDoWeOfferSection",
  data(){
    return{
      offers:[
        {
          img: '../../../public/images/logo.svg',
          desc: 'Lorem ipsum dolor sit amet',
        },
        {
          img: '../../../public/images/logo.svg',
          desc: 'Lorem ipsum dolor sit amet',
        },
        {
          img: '../../../public/images/logo.svg',
          desc: 'Lorem ipsum dolor sit amet',
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>