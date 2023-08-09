<template>
  <div class="container">
    <h3 class="text-center my-3">Name of Winery</h3>
    <div class="page my-3">
      <div class="left-column mx-2 mb-3">
        <div class="sticky-cards">
          <div class="card my-3">
            <div class="card-header">
              За винаријата
            </div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card my-3">
            <div class="card-header">
              Слики
            </div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
      <div class="right-column mx-2">
        <div class="scroll-cards">
          <div v-for="i in 5" class="card my-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="...">
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
          <div class="card my-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
<!--          <div v-for="card in cards" :key="card.id" class="card">-->
<!--            &lt;!&ndash; Card content &ndash;&gt;-->
<!--          </div>-->
<!--          <div v-if="isLoading" class="loading-indicator">-->
<!--            Loading...-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// export default {
//   data() {
//     return {
//       cards: [], // Array to store cards
//       isLoading: false
//     };
//   },
//   methods: {
//     loadMoreCards() {
//       // Simulate loading more cards
//       this.isLoading = true;
//       // setTimeout(() => {
//       //   const newCards = [...]; // Array of new cards
//       //   this.cards.push(...newCards);
//       //   this.isLoading = false;
//       // }, 1000); // Adjust the delay as needed
//     }
//   },
//   mounted() {
//     this.loadMoreCards();
//     window.addEventListener('scroll', this.handleScroll);
//   },
//   beforeUnmount() {
//     window.removeEventListener('scroll', this.handleScroll);
//   },
//   watch: {
//     cards() {
//       // You might need to handle some logic when cards change
//     }
//   },
//   handleScroll() {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
//       // Adjust the value (100) as needed to trigger the loadMoreCards function
//       this.loadMoreCards();
//     }
//   }
// };

</script>

<style scoped>
.page {
  display: flex;
}

.left-column {
  flex: 1;
}

.sticky-cards {
  position: sticky;
  top: 20px; /* Adjust as needed */
  /* Styling for sticky cards */
}

.right-column {
  flex: 2;
}

.scroll-cards {
  /* Styling for scrollable cards */
}

.card {
  /* Styling for individual card */
}

.loading-indicator {
  /* Styling for loading indicator */
}
</style>