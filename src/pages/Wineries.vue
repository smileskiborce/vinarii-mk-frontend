<template>
<main class="bg-primary d-flex flex-column justify-content-center">
  <custom-header/>
  <div>
    <h2 class="text-center text-white-50 font-monospace">WINERIES</h2>
    <div class="justify-content-center d-flex pb-5">
      <hr class="text-white" style="width: 200px;margin-top: -1px"/>
    </div>
  </div>
  <wineries-section/>
  <custom-footer/>
</main>
</template>

<script>
import WineriesSection from "@/Components/WineriesSection.vue";
import CustomHeader from "@/Components/layouts/CustomHeader.vue";
import CustomFooter from "@/Components/layouts/CustomFooter.vue";
export default {
  name: "Wineries",
  components: {CustomFooter, CustomHeader, WineriesSection}
}
</script>

<style scoped>

</style>