<template>
  <div v-if="wine" style="background-color: #f7f3f0;">
    <div class="container py-3">
      <div class="row py-5">
        <div class="col-4">
          <img :src="wine.image" style="height: 500px">
        </div>
        <div class="col-md-4 col-12">
          <div class="mt-4">
            <div class="fs-4">{{ wine.region }}</div>
            <h1> {{ wine.name }}</h1>
            <div class="mt-5">
              <div class="row">
                <div class="col-1 align-self-center">
                  <h2> {{ wine.rating }}</h2>
                </div>
                <div class="col-2 align-self-center fs-6 text-nowrap ps-4">
                  <i v-for="star in Math.floor(wine.rating)" class="fa fa-star text-primary"></i>
                  <i v-if="wine.rating % 1 > 0" class="fa fa-star-half-empty text-primary"></i>
                  <p>21241 ratings</p>
                </div>
              </div>
              <div class="mt-3">
                <i class="fa fa-shopping-cart">
                </i> Add to cart
              </div>
              <div class="row mt-4">
                <div class="col-6 col-sm-3 col-md-6 col-xl-3">
                  <p class="card-text fw-bold text-primary text-nowrap">WINE TYPE:</p>
                  <p class="card-text fw-bold text-primary">YEAR:</p>
                  <p class="card-text fw-bold text-primary">ALCOHOL:</p>
                  <p class="card-text fw-bold text-primary">COUNTRY:</p>
                </div>
                <div class="col-6 col-sm-3 col-md-6 col-xl-3">
                  <p class="card-text"> {{ wine.wine_type_name }} </p>
                  <p class="card-text"> {{ wine.vintage }} </p>
                  <p class="card-text"> {{ wine.alcohol_content }} </p>
                  <p class="card-text"> {{ wine.country_name }} </p>
                </div>
              </div>
              <div class="mt-4 ">
                {{ wine.description }}
              </div>
            </div>

          </div>
        </div>
        <div class="col-xl-4 col-12 pb-5">
          <div class="mt-5 pt-2" style="background-color: #333;color:#dba969">
            <img class="align-self-center" src="../assets/images/wine/best_pick.jpg" height="60"> <span
              class="fs-4 ps-2">Best picks</span>
          </div>
          <div class="bg-white p-4 rounded-3">


            <div>
              <p class="fs-2 pt-2">{{ wine.price }} ден.</p>
              <p>Price is per bottle</p>
            </div>

            <button class="btn btn-success w-100 rounded-3 fw-semibold py-2 fs-5">
              Add to cart
            </button>

            <div class="mt-4">
              <i class="fa fa-car pe-3"></i>Estimated between Mon, Sep 18 and Thu, Sep 21
            </div>
            <div class="mt-4">
              <i class="fa fa-map-marker pe-3"></i>Sold by vinarii.mk.com
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-5 container mb-5" style="background-color: #f7f3f0;">
    <div class=" text-center py-4" style="color:#c38e64;">
      <p class="fs-5">
        WINE DESCRIPTION
      </p>
      <div class="text-center">
        <div class="row justify-content-center">
          <h4 class="col-8">
            “96-Point Ultimate Luxury—An Iconic Rosé Champagne Beloved By Critics and Consumers From a Historic Family and Female-Owned House (Over 26,000 Ratings!)”
          </h4>
          <div class="col-9 text-dark my-4">
              With 96 points from Connoisseur’s Guide this Rosé Champagne is, “Elegant and fruity at the same time with a quick invitation from bright, pure cherryish notes and then filled out handsomely by whiffs of chalky soils and well-integrated, rich and uplifting yeast-driven scents, this wine manages to be both vigorous and layered at one and the same time.” Add 95 points from Decanter which found it “Very long and easy to enjoy.” Freshness, elegance, and purity—these are the hallmarks of Laurent-Perrier’s distinctive style of Champagne. Founded in 1812, the house has grown from a small family-owned operation to an international powerhouse that is today regarded as one of the finest producers in the region. And this bottle proves it.
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "WinePage"
}
</script>

<script setup>

import {onMounted, ref} from "vue";
import axios from "axios";
import {BACKEND_API} from "../../constant";
import {useRoute} from "vue-router/dist/vue-router";

const route = useRoute()
const wine = ref(null)
const loading = ref(true)

onMounted(() => {
  axios.get(BACKEND_API + 'wines/' + route.params.id)
      .then((response) => {
        wine.value = response.data.data;
        loading.value = false;
      })
})
</script>
<style scoped>

</style>