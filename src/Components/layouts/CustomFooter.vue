<template>
  <div class="bg-primary pt-5 text-white">
    <div class="container">
      <div class="row mb-4">
        <div class="col-md-4 d-flex flex-column mx-auto align-items-md-start mb-4 mb-md-0">
          <h4 class="fw-lighter mb-3 text-center text-md-start">CONTACT US</h4>
          <div class="d-flex gap-3 mb-2 ms-5 ms-md-0 align-items-start " v-for="(contact, i) in contactInfo" :key="i">
            <i :class=contact.icon aria-hidden="true"></i>
            <span>{{ contact.text }}</span>
          </div>
        </div>
        <div class="col-md-4 d-flex flex-column align-items-center mb-4 mb-md-0">
          <h4 class="mb-3 mb-md-5 fw-lighter">FOLLOW US</h4>
          <div class="d-flex gap-5 mb-4 ">
            <a v-for="(media, i) in socialMedia" :key="i" :href="media.link">
              <i class="fa text-white fa-2x" :class="media.fa" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="col-md-4 d-flex flex-column align-items-center align-items-md-end mb-3 mb-md-0">
          <h4 class="fw-lighter mb-3">SUBSCRIBE</h4>
          <p class="fw-lighter">Always stay in touch and receive news first.</p>
          <div class="form-floating w-75  text-white mb-2">
            <input type="email" class="form-control" id="Email" placeholder="Enter your email..." style="height: 10px;">
            <label for="Email">Email address</label>
          </div>
          <button class="btn btn-outline-light w-75">SUBSCRIBE</button>
        </div>
      </div>
      <div class="container">
        <hr/>
        <div class="row pb-3">
          <div class="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 gap-md-5 fs-6">
            <a v-for="(link, i) in menuItems" :key="i" :href="link.link" class="link-item text-decoration-none text-white">
              {{link.item}}
            </a>
          </div>
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
    item: 'HOME',
    link: '/'
  },
  {
    item: 'WINERIES',
    link: '/wineries'
  },
  {
    item: 'ABOUT US',
    link: '/about-us'
  },
  {
    item: 'CONTACT',
    link: '/contact-us'
  },
]
const contactInfo = [
  {
    icon: 'fa fa-map-marker',
    text: 'ul. Kocho Racin br. 70, Skopje'
  },
  {
    icon: 'fa fa-envelope',
    text: 'name@example.com'
  },
  {
    icon: 'fa fa-phone',
    text: '+38978999000'
  }
]
</script>
<style scoped>
.form-floating .form-control {
  height: 10px;
}
</style>