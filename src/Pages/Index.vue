<template>
  <main>
    <carousel-section />
    <best-picks/>
    <share-your-love/>
    <subscribe-us/>
  </main>
</template>

<script>

export default {
  name: "Index",
}
</script>
<script setup>


import CustomHeader from "../Components/layouts/CustomHeader.vue";
import CarouselSection from "../Components/Homepage/CarouselSection.vue";
import ShareYourLove from "../Components/Homepage/ShareYourLove.vue";
import SubscribeUs from "../Components/Homepage/SubscribeUs.vue";
import BestPicks from "../Components/Homepage/BestPicks.vue";
</script>

<style scoped>
</style>