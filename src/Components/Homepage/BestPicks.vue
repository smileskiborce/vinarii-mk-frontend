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
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </slide>
    </carousel>
    <carousel v-else :items-to-show="4" :breakpoints="breakpoints">

      <slide v-for="(wine,i) in bestWines.data" :key="i">
        <router-link :to="{name:'wine',params:{id : wine.id}}" class="text-decoration-none">
          <div class="card border-0 btn px-5 ps-md-0">
            <div class="d-flex mt-4 justify-content-between">
              <div>
                <img class="wine-card" style="height: 200px" :src="wine.image">
              </div>
              <div class="align-self-center text-end ">
                <div class="text-center text-primary">
                  Price:
                </div>
                <p class="rounded-3 bg-success text-white  rounded-4 px-md-2 py-1 fs-6 text-nowrap">{{ wine.price }}
                  ден.</p>


              </div>
            </div>
            <div class="text-start mt-2">
              <p class="fs-5">{{ wine.name }}</p>
              <h5>({{ wine.region }}) <br/>
                {{ wine.vintage }} - {{ wine.country }}</h5>
              <p>Country: {{ wine.country_name.slice(0, 20) }}</p>
              <span>
              {{ wine.description.toString().slice(0, 70) }}...
            </span>
            </div>

          </div>
        </router-link>
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
    itemsToShow: 1,
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