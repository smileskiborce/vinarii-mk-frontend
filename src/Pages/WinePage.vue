<template>
  <div class="background">
    <div class="container py-3">
      <div class="row py-5" v-if="wine">
        <div class="row py-5">
          <div class="col-4 col-xl-4 col-lg-5 col-md-12 col-sm-12 text-center justify-content-center align-items-center">
            <img v-if="wine" :src="wine.image" style="height: 500px">
            <div v-if="loading" class="lds-ripple">
            </div>
          </div>
          <div class="col-12 col-xl-5 col-md-12 col-lg-7 px-lg-5" v-if="wine">
            <div class="mt-4 ">
              <div class="fs-4">{{ wine.region }}</div>
              <h1> {{ wine.name }}</h1>
              <div class="mt-5">
                <div class="row">
                  <div class="col-1">
                    <h2> {{ wine.rating }}</h2>
                  </div>
                  <div class="col-2 align-self-center fs-6 text-nowrap ps-4">
                    <i v-for="star in Math.floor(wine.rating)" class="fa fa-star text-primary"></i>
                    <i v-if="wine.rating % 1 > 0" class="fa fa-star-half-empty text-primary"></i>
                    <p>21241 ratings</p>
                  </div>
                </div>

                <div class="row mt-4 text-start">
                  <div class="col-6 col-sm-6 col-md-6 col-xl-4">
                    <p class="card-text fw-bold text-primary text-nowrap">WINE TYPE:</p>
                    <p class="card-text fw-bold text-primary">YEAR:</p>
                    <p class="card-text fw-bold text-primary">ALCOHOL:</p>
                    <p class="card-text fw-bold text-primary">COUNTRY:</p>
                  </div>
                  <div class="col-6 col-sm-6 col-md-6 col-xl-7">
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
          <div class="col-xl-3 col-12">
            <div class="mt-4 pt-2 pb-2 rounded-top-2" style="background-color: #333;color:#dba969">
              <div v-if="loading" class="lds-ripple col-md-4 col-12">
              </div>
              <div class="col-xl-12 col-12 px-2" v-if="wine">
                <div class=" pt-2 ps-2" style="background-color: #333;color:#dba969">
                  <img class="align-self-center" src="../assets/images/wine/best_pick.jpg" height="60"> <span
                    class="fs-4 ps-2">Best picks</span>
                </div>
                <div class="bg-white p-4 rounded-bottom-2">
                  <div style="color: #333">
                    <p class="fs-2 pt-2">{{ wine.price }} ден.</p>
                    <p>Price is per bottle</p>
                  </div>
                </div>
              </div>
              <div v-if="loading" class="col-xl-4 col-12 pb-5 lds-ripple">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-5 container mb-5" style="background-color: white;" v-if="wine">
    <div class=" text-center py-4" style="color:#c38e64;">
      <p class="fs-5">
        WINE DESCRIPTION
      </p>
      <div class="text-center">
        <div class="row justify-content-center">
          <h4 class="col-8">
            “96-Point Ultimate Luxury—An Iconic Rosé Champagne Beloved By Critics and Consumers From a Historic
            Family and Female-Owned House (Over 26,000 Ratings!)”
          </h4>
          <div class="col-9 text-dark my-4">
            With 96 points from Connoisseur’s Guide this Rosé Champagne is, “Elegant and fruity at the same time
            with a quick invitation from bright, pure cherryish notes and then filled out handsomely by whiffs
            of chalky soils and well-integrated, rich and uplifting yeast-driven scents, this wine manages to be
            both vigorous and layered at one and the same time.” Add 95 points from Decanter which found it
            “Very long and easy to enjoy.” Freshness, elegance, and purity—these are the hallmarks of
            Laurent-Perrier’s distinctive style of Champagne. Founded in 1812, the house has grown from a small
            family-owned operation to an international powerhouse that is today regarded as one of the finest
            producers in the region. And this bottle proves it.
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
.background {
  background: linear-gradient(to bottom, #800020, lightgoldenrodyellow);
}

.contained img {
  height: 100%;
  width: 100%;
}

.height {
  height: 550px;

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

  .lds-ripple div {
    position: absolute;
    border: 4px solid #c5bdbd;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
}
</style>