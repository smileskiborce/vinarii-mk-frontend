<template>
  <main>
    <custom-header/>
    <slot></slot>
    <custom-footer/>
  </main>
</template>

<script>
import CustomHeader from "../Components/layouts/CustomHeader.vue";
import CustomFooter from "../Components/layouts/CustomFooter.vue";

export default {
  name: "DefaultLayout",
  components: {CustomFooter, CustomHeader}
}
</script>

<style scoped>

</style>