<template>
  <section class="max-width-1600px mx-auto h-100vh position-relative">


    <div class="position-absolute top-0  w-100 d-none d-lg-block">
      <img
          src="../../assets/Images/hero-section/hero-background.svg"
          alt="Background image for the section"
          class=" h-right"
      />
    </div>
    <custom-header  />


  </section>
</template>

<script>
import CustomHeader from "../layouts/CustomHeader.vue";
export default {
  name: "HeroSection",
  components: {CustomHeader}
}
</script>

<style scoped>

@media (min-width: 991px) {
  .h-right {
    width: 100%;
  }
  .h-100vh {
    height: min(129vh, 1500px);
  }
}

@media (max-width: 1000px) {
  .custom-header-font-size {
    font-size: 1.9rem !important;
  }
}

@media (min-width: 500.01px) and (max-width: 1199.97px) {
  .custom-header-font-size {
    font-size: 2.3rem !important;
  }
}

@media (min-width: 1200px) {
  .custom-header-font-size {
    font-size: 3.5rem !important;
  }

  .custom-paragraph-font-size {
    font-size: 1.25rem !important;
  }
}
</style>