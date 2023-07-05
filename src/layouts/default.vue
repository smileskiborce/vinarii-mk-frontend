<template>
  <div>
    <custom-header/>
    <slot></slot>
    <custom-footer/>
  </div>
</template>

<script>
import CustomHeader from "../Components/layout/CustomHeader.vue";
import CustomFooter from "../Components/layout/CustomFooter.vue";

export default {
  name: "Default",
  components: {CustomFooter, CustomHeader}
}
</script>

<style scoped>

</style>