<template>
  <main class="container py-5">
    <div class="text-center text-primary mb-5">
      <h1>WINERIES</h1>
    </div>
    <div class="row d-flex flex-column justify-content-center">
      <winery-card/>
    </div>
  </main>
</template>

<script>
import WineryCard from "@/Components/WineryCard.vue";
export default {
  name: "Wineries",
  components: {WineryCard}
}
</script>

<style scoped>

</style>