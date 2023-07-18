<template>
  <div class="bg-gray">
    <custom-header/>
    <wine-description/>
    <wine-carousel/>
    <most-popular-wines/>
    <where-are-we-located/>
    <custom-footer/>
  </div>
</template>

<script>
export default {
  name: "Wine",
}
</script>
<script setup>
import WineDescription from "../Components/Wine/WineDescription.vue";
import CustomHeader from "../Components/layouts/CustomHeader.vue";
import WineCarousel from "../Components/Wine/WineCarousel.vue";
import MostPopularWines from "../Components/Wine/MostPopularWines.vue";
import WhereAreWeLocated from "../Components/Wine/WhereAreWeLocated.vue";
import CustomFooter from "../Components/layouts/CustomFooter.vue";
</script>

<style scoped>

</style>