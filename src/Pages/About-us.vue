<template>
  <main class="container py-5">
    <h1 class="text-center text-primary">ABOUT US</h1>
    <title-text-section :title="TitleText[0].title" :text="TitleText[0].text"/>
    <div class="col-8 ratio ratio-2x1">
      <img src="src/assets/images/carousel/vineyard2.jpg">
    </div>
    <title-text-section :title="TitleText[1].title" :text="TitleText[1].text"/>
    <what-we-offer-section/>
    <title-text-section :title="TitleText[2].title" :text="TitleText[2].text"/>
    <h3 class="text-center text-primary">Thank you for being a part of our community.</h3>
    <div class="text-primary py-5 text-center">
      <h3>Cheers,</h3>
      <h3>WINERIES.MK team.</h3>
    </div>
  </main>
</template>

<script>
export default {
  name: "About-us",
}
</script>
<script setup>
import TitleTextSection from "@/Components/About Us/TitleTextSection.vue";
import WhatWeOfferSection from "@/Components/About Us/WhatWeOfferSection.vue";

const TitleText = [
  {
    title: 'Our Story',
    text: 'At WINERIES.MK, we\'re on a mission to bring the captivating world of Macedonian wines closer to you. Our journey began with a deep passion for both wine and the rich cultural heritage of Macedonia. We realized that this hidden gem of a wine region deserved a platform where its stories, flavors, and history could be shared with the world. Thus, WINERIES.MK was born, a labor of love that showcases the beauty and excellence of Macedonian winemaking.'
  },
  {
    title: 'Our Vision',
    text: 'Our vision is to be the premier online resource for all things related to Macedonian wineries. We aspire to create a bridge between the local winemakers and a global audience of wine enthusiasts. Through our platform, we aim to shine a spotlight on the dedication, innovation, and traditions that define the Macedonian wine industry.'
  },
  {
    title: 'Join Us',
    text: 'Whether you\'re a seasoned oenophile or someone taking their first steps into the world of wine, WINERIES.MK welcomes you to join us on this exciting journey. Let\'s raise a glass to the wines, the people, and the moments that make Macedonian winemaking truly exceptional.'
  }
]
</script>
<style scoped>

</style>