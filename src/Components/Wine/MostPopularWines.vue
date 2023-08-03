<template>
  <div class="text-white-50 pb-5 container">
    <h3 class="text-center">
      Wines
    </h3>
    <div class="justify-content-center d-flex pb-5">
      <hr class="text-white" style="width: 200px;margin-top: -1px"/>
    </div>
    <carousel :items-to-show="3">
      <slide v-for="wine in wines" :key="slide" class="d-block">
        <div class="pb-4">
          <img :src="'/images/popular-wines/'+wine.img" style="height: 130px"/>
        </div>
        <div>
          {{wine.text}}
        </div>
      </slide>
      <template #addons>
        <navigation/>
        <pagination/>
      </template>
    </carousel>
  </div>
</template>

<script>
export default {
  name: "MostPopularWines"
}
</script>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

const wines = [
  {
    img: 'wine.svg',
    text: 'Lorem ipsum dolor sit amet'
  }, {
    img: 'wine.svg',
    text: 'Lorem ipsum dolor sit amet'
  }, {
    img: 'wine.svg',
    text: 'Lorem ipsum dolor sit amet'
  }, {
    img: 'wine.svg',
    text: 'Lorem ipsum dolor sit amet'
  },
]
</script>
<style scoped>

</style>