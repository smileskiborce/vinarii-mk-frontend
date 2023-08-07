<template>
  <section class="bg-primary" id="wineries-section">
    <div class="py-5" v-for="(winery, i) in wineries" :key="i">
      <div class="row bg-secondary container p-4">
        <div class="col-lg-6 mb-5 mb-lg-none" :class="[i%2===0 ? 'order-0 text-center text-lg-start':'order-1 text-center text-lg-end']">
          <h3 class="fw-bold mb-5 ">{{ winery.name }}</h3>
          <img class="ratio ratio-1x1" :src=winery.image alt=" ">
        </div>
        <div class="col-lg-6 " :class="[i%2!==0 ? 'order-1 text-center text-lg-start':'order-0 text-center text-lg-end']">
          <div class="d-none d-lg-block " >
            <router-link class="btn btn-outline-light mb-5 text-white bg-primary" to="/winery">View more >></router-link>
          </div>
          <p class="fs-4 mb-5 pb-5 fw-lighter">{{ winery.description }}</p>
          <div v-for="(wine, j) in winery.wines" :key="j"
               class="d-flex flex-column justify-content-center justify-content-lg-start text-lg-start">
            <div class="gap-3 mb-3 mb-lg-5 ms-lg-5">
              <img src="../assets/Images/hero-section/wine.svg"><span>{{ wine }}</span>
            </div>
          </div>
          <button class="d-lg-none btn btn-outline-light mt-5" >View more >></button>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
const wineries = [
  {
    name: 'Winery 1',
    link: '/wine1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '../../src/assets/Images/wineries/winery1.png',
    wines: [
      'Wine 1',
      'Wine 2',
      'Wine 3'
    ]
  },
  {
    name: 'Winery 2',
    link: '/wine2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '../../src/assets/Images/wineries/winery2.png',
    wines: [
      'Wine 1',
      'Wine 2',
      'Wine 3'
    ]
  },
  {
    name: 'Winery 3',
    link: '/wine3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '../../src/assets/Images/wineries/winery3.png',
    wines: [
      'Wine 1',
      'Wine 2',
      'Wine 3'
    ]
  },
]
</script>

<style scoped>

</style>