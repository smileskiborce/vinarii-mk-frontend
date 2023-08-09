<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner" style="height: 90vh">
      <div class="carousel-item active" v-for="image in images">
        <img :src="image" class="d-block w-100 object-fit-fill" alt="...">\

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
  'src/assets/images/carousel/vineyard1.jpg',
  'src/assets/images/carousel/vineyard2.jpg',
  'src/assets/images/carousel/vineyard3.jpg',
  'src/assets/images/carousel/vineyard4.jpg',
]
</script>

<style scoped>

</style>