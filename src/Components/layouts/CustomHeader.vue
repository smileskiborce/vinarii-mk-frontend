<template>
<section class="bg-transparent">
  <nav class="navbar navbar-expand-lg py-3 " >
    <div class="container">
      <a class="navbar-brand" href="/"><img src="/images/logo.svg"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-white-50" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto fs-5">
          <a class="nav-link text-white-50" aria-current="page" href="#wineries-section">WINERIES</a>
          <a class="nav-link text-white-50" aria-current="page" href="#about-us">ABOUT US</a>
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
.bg-img{
  background-image: url("../../assets/Images/hero-section/hero-background.svg");
  background-repeat: no-repeat;
  background-size: cover;
}

</style>