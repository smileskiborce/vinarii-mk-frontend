<template>
  <section>
    <div class="py-5 text-center text-md-start">
      <h2 class="mb-4 text-primary">
        {{ title }}
      </h2>
      <hr/>
      <p class="fs-5">{{ text }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "TitleTextSection"
}
</script>
<script setup>
defineProps({
  title: {
    type: String,
    default: null
  },
  text: {
    type: String,
    default: null
  }
})
</script>
<style scoped>

</style>