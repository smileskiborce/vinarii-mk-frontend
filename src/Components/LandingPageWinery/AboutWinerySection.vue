<template>
  <div class="card my-3">
    <div class="card-header">
      About the winery
    </div>
    <div class="card-body">
      <div class="text-center">{{ description }}</div>
      <hr/>
      <div class="fa fa-globe mb-3 d-block">
        <a class="px-2" href="#">page-of-winery.com</a>
      </div>
      <div class="fa fa-envelope my-3 d-block">
        <span class="px-2">{{email}}</span>
      </div>
      <div class="fa fa-address-book my-3 d-block">
        <span class="px-2">+38977777777</span>
      </div>
      <div class="fa fa-clock-o mt-3 d-block">
        <span class="px-2">Mon-Fri: 08:00-16:00</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  description:{
    default:null,
    type:String
  },
  email:{
    default:null,
    type:String
  }
})
</script>

<style scoped>

</style>