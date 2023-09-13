<template>
  <router-link :to="{name:'winery',params:{id : winery.id}}" class="text-decoration-none">
    <div class="card rounded-3 shadow text-decoration-none zoom-effect card-size"  href="/winery">
      <img class="card-img-top ratio ratio-3x2" alt="Card image cap " height="250" :src="winery.cover_image">

      <div class="card-body rounded-bottom-3 bg-primary text-white text-center px-4">
        <h5 class="card-title">{{ winery.legal_name }}</h5>
        <hr/>
        <p class="card-text">{{ winery.description.slice(0, 300) }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "WineryCard"
}

</script>
<script setup>
defineProps({
  winery: {
    default: null,
    type: Object
  }
})

</script>
<style scoped>
.zoom-effect {
  transition: transform 0.3s ease-in-out; /* Adjust the transition duration as needed */
}

.card:hover {
  transform: scale(1.05); /* Adjust the scaling factor to control the zoom level */
}
.card-size{
  width: 25rem;
}
@media (min-width: 768px) and (max-width: 1200px) {
  .card-size{
    width: 18rem;
  }
}
@media (min-width: 1200px) and (max-width: 1400px){
  .card-size{
    width: 20rem;
  }
}
@media (max-width: 576px){
  .card-size{
    width: 20rem;
  }
}
</style>