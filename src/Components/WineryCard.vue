<template>
  <div class="container">
    <div class="row mx-auto justify-content-center">
      <div class="col-md-5 col-xxl-4 mb-5 d-flex flex-column align-items-center" v-for="(winery, i) in wineries" :key="i">
        <div class="card rounded-2 rounded" style="width: 25rem;">
          <div class="ratio ratio-3x2">
            <img class="card-img-top rounded-0 ratio " :src="winery.img" alt="Card image cap">
          </div>
          <div class="card-body bg-primary text-white text-center px-4">
            <h5 class="card-title">{{ winery.name }}</h5>
            <hr/>
            <p class="card-text">{{ winery.description }}</p>
            <button :href="winery.link" class="btn  btn-outline-light fw-bold px-4">Повеќе</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WineryCard"
}

</script>
<script setup>
const wineries = [
  {
    img: 'src/assets/images/winery/winery.jpg',
    name: 'Winery 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '#'
  },
  {
    img: 'src/assets/images/winery/winery.jpg',
    name: 'Winery 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '#'
  },
  {
    img: 'src/assets/images/winery/winery.jpg',
    name: 'Winery 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '#'
  },
  {
    img: 'src/assets/images/winery/winery.jpg',
    name: 'Winery 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '#'
  },
  {
    img: 'src/assets/images/winery/winery.jpg',
    name: 'Winery 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '#'
  },
  {
    img: 'src/assets/images/winery/winery.jpg',
    name: 'Winery 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '#'
  },
  {
    img: 'src/assets/images/winery/winery.jpg',
    name: 'Winery 7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '#'
  },
  {
    img: 'src/assets/images/winery/winery.jpg',
    name: 'Winery 8',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '#'
  },
  {
    img: 'src/assets/images/winery/winery.jpg',
    name: 'Winery 9',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '#'
  },
]
</script>
<style scoped>

</style>