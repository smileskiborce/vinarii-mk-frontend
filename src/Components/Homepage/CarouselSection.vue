<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner" style="height: 90vh">
      <div class="carousel-item active" v-for="image in images">
        <img :src="'src/assets/images/carousel/'+image.img" class="d-block w-100 object-fit-fill">
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
  {
    img: 'vineyard4.jpg'
  },
]
</script>

<style scoped>

</style>