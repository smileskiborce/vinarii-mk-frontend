<template>

  <hero-section/>
  <custom-footer/>
</template>

<script>

export default {
  name: "Index",
}
</script>
<script setup>

import HeroSection from "../Components/index/HeroSection.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import CustomFooter from "../Components/layouts/CustomFooter.vue";
</script>

<style scoped>
</style>