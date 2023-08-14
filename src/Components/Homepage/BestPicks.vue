<template>
  <div class="container my-5">
    <h1 class="fw-bold pb-2">
      Best picks
    </h1>

    <p class="fs-5">
      Get great value and seamless service with these brilliant wines, available direct <br/>
      from Wineries.mk and a selection of our best merchant partners
    </p>
    <carousel v-if="loading" :items-to-show="4" :breakpoints="breakpoints">
      <slide v-for="slide in 4" :key="slide">
        <Skeletor :height="300"/>
        <div class="lds-ripple"><div></div><div></div></div>
      </slide>
    </carousel>
    <carousel v-else :items-to-show="4" :breakpoints="breakpoints">

      <slide v-for="(wine,i) in bestWines.data" :key="i">
        <div class="card border-0 btn ">
          <div class="d-flex mt-4 justify-content-between">
            <div>
              <img class="wine-card" style="height: 34vh" :src="wine.image">
            </div>
            <div class="align-self-center text-end ">
              <p class="rounded-3 bg-success text-white px-1 px-md-2 py-1 fs-6 text-nowrap me-lg-3">{{ wine.price }}
                ден.</p>
            </div>
          </div>
          <div class="text-start mt-2">
            <p class="fs-5">{{ wine.name }}</p>
            <h5>({{ wine.region }}) <br/>
              {{ wine.vintage }} - {{ wine.country }}</h5>
            <span>Country: {{ wine.country_name }}</span><br/>
            <span>
              {{ wine.description }}
            </span>
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
import {onMounted, ref} from "vue";
import axios from "axios";
import {BACKEND_API} from "../../../constant";
import 'vue-skeletor/dist/vue-skeletor.css';
import {Skeletor} from 'vue-skeletor';


const bestWines = ref([]);
const loading = ref(true)
onMounted(() => {
  axios.get(BACKEND_API + 'best-wines')
      .then((response) => {
        bestWines.value = response.data;
        loading.value = false;
      })
})
const breakpoints = {
  // 700px and up
  300: {
    itemsToShow: 1.5,
    snapAlign: 'center',
  },
  500: {
    itemsToShow: 2.5,
    snapAlign: 'center',
  },
  700: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
};
</script>

<style scoped>
.wine-card:hover {
  transition: transform 1.1s;
  transform: scale(1.15);
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #c5bdbd;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>