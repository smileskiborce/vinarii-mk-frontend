<template>
  <div class="container">
    <div class="cover-image-container">
      <img class="cover-image responsive-image" src="../assets/images/carousel/vineyard1.jpg"/>
    </div>
    <div class="d-flex mt-4 top-row">
      <img src="../assets/images/carousel/vineyard1.jpg" class="profile-image mx-3">
      <h1 class="text-center mt-4">{{ $t('winery.name') }}</h1>
    </div>
    <div class="page my-3">
      <div class="left-column mx-2 mb-3">
        <div class="sticky-cards">
          <about-winery-section/>
          <photos-grid-section/>
        </div>
      </div>
      <div class="right-column mx-2">
        <div class="scroll-cards">
          <div v-for="i in 10" class="card my-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="../assets/images/winery/winery.jpg" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Wine 1</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AboutWinerySection from "@/Components/LandingPageWinery/AboutWinerySection.vue";
import PhotosGridSection from "@/Components/LandingPageWinery/PhotosGridSection.vue";

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
  max-height: 400px;
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