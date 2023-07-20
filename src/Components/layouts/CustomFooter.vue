<template>
  <div class="py-5 text-white-50 footer-bg d-flex flex-column align-items-center">
    <div>
      <h4 class="fw-lighter text-center">CONNECT WITH US</h4>
      <hr class="mb-4">
      <div class="d-flex flex-row justify-content-between px-4 mb-5">
        <a v-for="(media, i) in socialMedia" :key="i" :href=media.link>
          <i class="fa text-white-50 fa-2x" :class="media.fa" aria-hidden="true"></i>
        </a>
      </div>
      <div class="container">
        <div class="fs-5 d-flex flex-row justify-content-between" v-for="(link, i) in menuItems" :key="i">
          <a class="text-decoration-none text-white-50" :href=link.link>{{link.item}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomFooter"
}
</script>
<script setup>
const socialMedia = [
  {
    fa: 'fa-facebook-official',
    link: '#'
  },
  {
    fa: 'fa-instagram',
    link: '#'
  },
  {
    fa: 'fa-twitter',
    link: '#'
  }
]
const menuItems = [
  {
    item: 'WINERIES',
    link: '#'
  },
  {
    item: 'MAP',
    link: '#'
  },
  {
    item: 'ABOUT US',
    link: '#'
  }
]
</script>
<style scoped>
.footer-bg {
  background-color: #5E5E5E;
}
</style>