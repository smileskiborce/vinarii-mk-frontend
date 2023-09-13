<template>
  <main class="container py-5">
    <div class="text-center text-primary mb-5">
      <h1>WINERIES</h1>
    </div>

    <div class="row d-flex flex-column justify-content-center">
      <div v-if="wineries" class="row mx-auto">
        <div v-for="winery in wineries.data"
             class="col-md-6 col-lg-4 col-xxl-4 mb-5 d-flex flex-column align-items-center">
          <winery-card :winery="winery"/>
        </div>
      </div>
      <div>
        <div v-if="loading">
          <div class="row">
            <div class=" col-3" v-for="i in 12">
              <div class="lds-ripple" style="height: 300px;">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
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

const wineries = ref(null);
const loading = ref(true);

onMounted(() => {
  axios.get(BACKEND_API + 'wineries')
      .then((response) => {
        wineries.value = response.data;
        loading.value = false;
      })
})

</script>

<style scoped>
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
</style>