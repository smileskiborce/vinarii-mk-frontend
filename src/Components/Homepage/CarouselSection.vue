<template>
  <div class="px-5 d-none d-lg-block text-primary text-center position-absolute top-25 my-5 start-50 translate-middle-x z-1">
    <h1 class="fw-light mb-4 display-1">DISCOVER. TASTE. ENJOY.</h1>
    <h3>feel the scent of sun and happiness</h3>
  </div>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner " >
      <div class="carousel-item active ratio-21x9 ratio  " v-for="image in images">
        <img :src="'src/assets/images/carousel/'+image.img" class="d-block  w-100 object-fit-fill">
      </div>

    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup>
const images = [
  {
    img: 'vineyard1.jpg'
  },
  {
    img: 'vineyard2.jpg'
  },
  {
    img: 'vineyard3.jpg'
  },
]
</script>

<style scoped>

</style>