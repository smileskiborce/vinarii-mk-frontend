<template>
  <div class="container my-5">
    <h1 class="fw-bold pb-2">
      Best picks
    </h1>
    <p class="fs-5">
      Get great value and seamless service with these brilliant wines, available direct <br/>
      from Wineries.mk and a selection of our best merchant partners
    </p>
    <carousel :items-to-show="4">
      <slide v-for="slide in 4" :key="slide">
        <div class="card border-0  ">
          <div class="d-flex ">
            <div>
              <img class="wine-card" height="300" src="../../assets/images/homepage/carousel/bottle_wine.png">
            </div>

            <div class="align-self-center">
              <p class="rounded-3 bg-success text-white fs-5 x-2 pty-2">400 ден.</p>
            </div>
          </div>
          <div class="text-start mt-5">
            <p class="fs-5">Château Montrose</p>
            <h5>Saint-Estèphe (Grand Cru Classé) 2009</h5>
          </div>
        </div>
      </slide>

      <template #addons>
        <navigation/>
        <pagination/>
      </template>
    </carousel>
  </div>


</template>


<script setup>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'


</script>

<style scoped>
.wine-card:hover {
  transition: transform 1.1s;
  transform: scale(1.3);
}
</style>