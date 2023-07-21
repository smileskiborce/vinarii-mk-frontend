<template>
  <section class="bg-color">
    <div class="py-5 container text-white">
      <div class="row">
        <div class="col-lg-6 mb-5 mb-lg-none" :class="[counter%2===0 ? 'order-1 text-center text-lg-end':'order-0 text-center text-lg-start']">
          <h3 class="fw-lighter mb-5 ">{{ winery.name }}</h3>
          <img class="ratio ratio-1x1" :src=winery.image alt=" ">
        </div>
        <div class="col-lg-6 " :class="[counter%2!==0 ? 'order-1 text-center text-lg-end':'order-0 text-center text-lg-start']">
          <div class="d-none d-lg-block " >
            <button class="btn btn-outline-light mb-5">View more >></button>
          </div>
          <p class="fs-4 mb-5 pb-5 fw-lighter">{{ winery.description }}</p>
          <div v-for="(wine, j) in winery.wines" :key="j"
               class="d-flex flex-column justify-content-center justify-content-lg-start text-lg-start">
            <div class="gap-3 mb-3 mb-lg-5 ms-lg-5">
              <img src="../assets/Images/hero-section/wine.svg"><span>{{ wine }}</span>
            </div>
          </div>
          <button class="d-lg-none btn btn-outline-light mt-5">View more >></button>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
defineProps({
  winery: {
    type: Object,
    default: null
  },
  counter: {
    type: Number,
    default: null
  }
})
</script>

<style scoped>
.bg-color {
  background-color: #5E5E5E !important;
}
</style>