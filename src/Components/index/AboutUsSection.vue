<template xmlns="http://www.w3.org/1999/html">
  <section class="max-width-1600px mx-auto h-100vh position-relative my-5" id="about-us">
    <div class="position-absolute top-0  w-100 d-none d-lg-block">
      <img
          src="../../assets/Images/about-us-section/about-us.jpg"
          alt="Background image for the section"
          class=" h-right"
      />
    </div>
    <div class="d-none d-lg-block position-absolute end-0 text-white-50 ">

      <div class="fw-lighter fs-3rem d-flex text-end pe-5 me-5 mt-5 pt-5">
        DISCOVER.<br/>
        TASTE.<br/>
        ENJOY.</div>
    </div>
    <div class="d-none d-lg-block position-absolute end-0 bottom-0 text-white-50 pe-5 me-5 mt-5 top-20">
      <h2 class="fw-light">feel the scent of sun<br/> and happiness.</h2>
      <button class="btn btn-outline-light rounded-1 mt-3 text-white-50 text-center fs-5 px-5">About us >></button>
    </div>

  </section>
</template>

<script>
export default {
  name: "AboutUsSection"
}
</script>

<style scoped>

.top-20{
  top:70%
}

@media (min-width: 991px) {
  .h-right {
    width: 100%;
  }
  .h-100vh {
    height: min(129vh, 1400px);
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