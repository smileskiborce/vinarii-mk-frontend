<template>
<default>
  <hero-section/>
</default>
</template>

<script>
import Default from "../layouts/Default.vue";
import HeroSection from "@/Components/index/HeroSection.vue";
export default {
  name: "Index",
  components: {HeroSection, Default},
}
</script>

<style scoped>

</style>