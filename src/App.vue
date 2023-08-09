<template>
  <custom-header/>
  <RouterView/>
  <custom-footer/>
</template>

<script setup>
import {RouterView} from 'vue-router'
import CustomHeader from "./Components/layouts/CustomHeader.vue";
import CustomFooter from "./Components/layouts/CustomFooter.vue";
</script>

<style scoped>
</style>
