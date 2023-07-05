<template>
<section>
  <nav class="navbar navbar-expand-lg nav-bg navbar-dark">
    <div class="container">
      <a class="navbar-brand" href="#"><img src="images/logo.svg"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto fs-5">
          <a class="nav-link" aria-current="page" href="#">WINERIES</a>
          <a class="nav-link" aria-current="page" href="#">MAP</a>
          <a class="nav-link" aria-current="page" href="#">ABOUT US</a>
        </div>
      </div>
    </div>
  </nav>
</section>
</template>

<script>
export default {
  name: "CustomHeader"
}
</script>

<style scoped>
.nav-bg{
  background-color: #17212A;
}
</style>