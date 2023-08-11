<template>
  <div class="card my-3">
    <div class="card-header d-flex justify-content-between">
      <div class="">Photos</div>
      <div>
        <a class="text-primary text-decoration-none" href="#">See all photos</a>
      </div>
    </div>
    <div class="card-body">
      <div class="nine-photos-card">
        <div class="photo-grid">
          <div v-for="(imageUrl, index) in wineries_imgs" :key="index" class="photo">
            <img :src="imageUrl" alt="Photo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const wineries_imgs = [
  'src/assets/images/winery/winery.jpg',
  'src/assets/images/winery/winery.jpg',
  'src/assets/images/winery/winery.jpg',
  'src/assets/images/winery/winery.jpg',
  'src/assets/images/winery/winery.jpg',
  'src/assets/images/winery/winery.jpg',
  'src/assets/images/winery/winery.jpg',
  'src/assets/images/winery/winery.jpg',
  'src/assets/images/winery/winery.jpg',
];

</script>

<style scoped>
.nine-photos-card {
  max-width: 400px;
  margin: 0 auto;
}
.photo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.photo img{
  max-width: 100%;
  height: auto;
}
</style>