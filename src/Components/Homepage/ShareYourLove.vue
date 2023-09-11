<template>
  <div class="py-5 container">
    <div class="rounded-3 border-1 border shadow" style="border-left: none!important;;">
      <div class="row ">
        <div class="col-md-3  col-12 d-none d-xl-block" >
          <div class="ratio ratio-1x1" >
            <img src="../../assets/images/homepage/white_wine_glasses.png" style="border-top-left-radius: 15px;border-bottom-left-radius: 15px">
          </div>
        </div>
        <div class="col-xl-8 col-12 px-4 px-xl-0 text-center d-flex flex-column align-items-center justify-content-center ps-xl-4">
            <div class="py-3 mt-2">
              <h2 class="fw-bold">
                Embark on a Journey Through Macedonian Wines
              </h2>
              <p class="pt-4 fs-6">
                Plan your visit to Wineries of Macedonia and immerse yourself in the world of exceptional wines. Explore vineyards, enjoy warm hospitality, and relish the rich heritage of Macedonian winemaking.
              </p>
              <router-link class="btn btn-outline-dark btn w-50  rounded rounded-5 fw-bold" to="/wineries">Explore wineries!</router-link>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShareYourLove"
}
</script>

<style scoped>

</style>