<template>
  <div class="my-5 py-3 container text-white rounded-4 shadow-lg"  style="background-color: #000000">
    <div>
      <div class="row">
        <div class="col-9 ps-lg-5">
          <div class="mt-3 ps-lg-3">
            <img src="../../assets/images/logo.svg" class="color-img" >
            <h1 class="fw-bold mt-4">A smarter way to drink<br/>
              wine</h1>
            <p class="fs-5">
              Get access to our highest-rated, most loved wines<br/>
              at up to 40% off retail.
            </p>
            <div class="d-flex pt-2">
              <input type="email" placeholder="Type your email" style="width: 400px;height: 45px" class="fs-6 ps-3 rounded-3">
            <button class="btn-outline-light btn px-3 rounded-3 ms-3 fs-5">Join now</button>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="ratio ratio-7x8">
            <img src="src/assets/images/homepage/wines.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.color-img{
  filter: invert(20%) sepia(73%) saturate(24457%) hue-rotate(342deg) brightness(95%) contrast(80%);
}
</style>