<template>
  <router-link :to="{name:'winery',params:{id : winery.id}}" class="text-decoration-none">
    <div class="card rounded-0 shadow text-decoration-none zoom-effect" style="width: 25rem;" href="/winery">
      <img class="card-img-top rounded-0 ratio ratio-3x2" alt="Card image cap">

      <div class="card-body bg-primary text-white text-center px-4">
        <h5 class="card-title">{{ winery.legal_name }}</h5>
        <hr/>
        <p class="card-text">{{ winery.description }}</p>
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
</style>