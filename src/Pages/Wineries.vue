<template>
  <main class="container py-5">
    <div class="text-center text-primary mb-5">
      <h1>WINERIES</h1>
    </div>

    <div class="row d-flex flex-column justify-content-center">
      <div v-if="wineries" class="row mx-auto">
        <div v-for="winery in wineries" class="col-md-6 col-lg-4 col-xxl-4 mb-5 d-flex flex-column align-items-center">
          <winery-card :winery="winery"/>

        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  name: "Wineries",
}
</script>
<script setup>
import WineryCard from "../Components/WineryCard.vue";
import axios from "axios";
import {onMounted, ref} from "vue";
import {BACKEND_API} from "../../constant";

const wineries = [
  {
    id: '1',
    name: 'WINERY 1',
    description: 'FNFJ$BFJ$NFJNJRNGJNRGJNRJGNFJRGJE'
  },
  {
    id: '2',
    name: 'WINERY 2',
    description: 'FNFJ$BFJ$NFJNJRNGJNRGJNRJGNFJRGJE'
  },
  {
    id: '3',
    name: 'WINERY 3',
    description: 'FNFJ$BFJ$NFJNJRNGJNRGJNRJGNFJRGJE'
  }
]
// const wineries = ref(null);
// const loading = ref(true);
//
// onMounted(() => {
//   axios.get(BACKEND_API + 'wineries')
//       .then((response) => {
//         wineries.value = response.data;
//         loading.value = false;
//       })
// })

</script>

<style scoped>

</style>