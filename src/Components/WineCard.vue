<template>
  <router-link :to="{name:'wine',params:{id : wine.id}}" class="text-decoration-none">
    <div class="row g-0 mb-5 shadow-sm">
      <div class="col-md-3">
        <div class="col-12 text-center">
          <img :src="wine.image" style="height: 320px" class="img-fluid" alt="...">
        </div>
      </div>
      <div class="col-md-8 ps-2">
        <div class="card-body ms-3">
          <h2 class="card-title text-primary mt-2">{{ wine.name }}</h2>

          <div class="row mt-5">
            <div class="col-6 col-sm-3 col-md-6 col-xl-3">
              <p class="card-text fw-bold text-primary text-nowrap">WINE TYPE:</p>
              <p class="card-text fw-bold text-primary">YEAR:</p>
              <p class="card-text fw-bold text-primary">ALCOHOL:</p>
              <p class="card-text fw-bold text-primary">COUNTRY:</p>
            </div>
            <div class="col-6 col-sm-3 col-md-6 col-xl-6">
              <p class="card-text"> {{ wine.wine_type_name }} </p>
              <p class="card-text"> {{ wine.vintage }} </p>
              <p class="card-text"> {{ wine.alcohol_content }} </p>
              <p class="card-text"> {{ wine.country_name }} </p>
            </div>
            <div class="col-xl-3 col-12 text-center mb-4 mb-md-0">
              <div class="">
                <span class="fs-1">{{ wine.rating }}</span><br/>
                <div class="text-nowrap">
                  <i v-for="star in Math.floor(wine.rating)" class="fa fa-star text-primary"></i>
                  <i v-if="wine.rating % 1 > 0" class="fa fa-star-half-empty text-primary"></i>
                </div>
                <span class="text-nowrap">1242 ratings</span>
              </div>
              <div class="mt-2">
                <button class="btn btn-success px-4 fw-semibold rounded-5 text-nowrap text-center">{{ wine.price }} ден.
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <hr/>

      <div class="row">
        <div class="col-2 text-center align-items-center justify-content-center d-flex">
          <button class="rounded-4 btn btn-sm fw-bold fs-6 text-nowrap"
                  style="background-color: rgba(241,241,156,0.51); color: #eaa40b">
            <i class="fa fa-star"></i> {{ wine.rating }}
          </button>
        </div>
        <div class="col-10">
          <p class=" fs-5">{{ wine.description }}</p>

        </div>

      </div>


    </div>
  </router-link>
</template>

<script>
export default {
  name: "WineCard"
}
</script>
<script setup>
defineProps({
  wine: {
    default: null,
    type: Object
  }
})
</script>

<style scoped>
.gradient-border {
  border: 10px solid transparent; /* Set a transparent border */
  background-clip: padding-box; /* Ensure the gradient is within the border */
  border-image: linear-gradient(to right, white, #800020); /* Replace with your desired gradient colors */
  border-image-slice: 1; /* Make the entire border show the gradient */
  border-radius: 2px;
}
</style>