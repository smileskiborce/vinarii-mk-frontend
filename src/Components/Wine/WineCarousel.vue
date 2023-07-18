<template>
  <div class="text-white py-3 container my-5">
    <carousel :items-to-show="3">
      <slide v-for="wine in wines" :key="slide">
        <div class="ratio ratio-4x3">
          <img :src="'/images/wine-carousel/'+wine" style="width:96%"/>
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
  name: "WineCarousel"
}
</script>
<script setup>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

const wines = [
  'wine1.png',
  'wine2.png',
  'wine3.png',
  'wine1.png',
  'wine2.png',
  'wine3.png'
]
</script>
<style scoped>

</style>