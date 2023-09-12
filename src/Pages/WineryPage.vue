<template>
  <div class="cover-image-container" v-if="winery">
    <img class="cover-image " :src="winery.cover_image"/>
  </div>
  <div class="container">

    <div class="d-flex mt-4 top-row" v-if="winery">
      <img :src="winery.logo_image" class="profile-image mx-3">
      <h1 class="text-center sticky-cards mt-4">{{ winery.legal_name }}</h1>
    </div>
    <div class="page my-3">
      <div class="left-column mx-2 mb-3">
        <div class="sticky-cards">
          <about-winery-section  v-if="winery" :description="winery.description" :email="winery.email" :phone="winery.phone"/>
          <photos-grid-section/>
        </div>
      </div>
      <div class="right-column mx-2">
        <div class="" v-if="wines">
          <div v-for="(wine, i) in wines" class=" my-3 shadow-sm">
            <wine-card :wine="wine"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router/dist/vue-router";
import AboutWinerySection from "../Components/LandingPageWinery/AboutWinerySection.vue";
import PhotosGridSection from "../Components/LandingPageWinery/PhotosGridSection.vue";
import WineCard from "../Components/WineCard.vue";
import {onMounted, ref} from "vue";
import axios from "axios";
import {BACKEND_API} from "../../constant";

const route = useRoute()
const winery = ref(null)
const wines = ref(null)
const loading = ref(true)

onMounted(() => {
  axios.get(BACKEND_API + 'wineries/' + route.params.id)
      .then((response) => {
        winery.value = response.data.data;
        loading.value = false;
      })
  axios.get(BACKEND_API + 'wineries/' + route.params.id + '/wines')
      .then((response) => {
        wines.value = response.data.data;
        loading.value = false;
      })
})
</script>

<script>
export default {
  name: "Winery",
};

</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column-reverse;
}

.left-column {
  flex: 1;
  order: 2;
}

.sticky-cards {
  position: sticky;
  top: 130px;
}

.right-column {
  flex: 2;
  overflow-y: auto;
}

.scroll-cards {
  /* Styling for scrollable cards */
}

.cover-image-container {
  max-height: 500px;
  overflow: hidden;
  text-align: center;
}

.cover-image {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.profile-image {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
}

.top-row {
  width: 100%;
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
}

@media (min-width: 768px) {
  .page {
    flex-direction: row; /* On larger screens, revert to the original layout */
  }

  .left-column.above {
    order: 1; /* On larger screens, restore the original order */
  }

  .right-column {
    order: 2;
  }
}

</style>