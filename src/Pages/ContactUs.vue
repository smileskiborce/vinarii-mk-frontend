<template>
  <div class="background py-5">
  <div class="container">
      <div class="form p-5 shadow rounded-5">
        <h1 class="text-center pb-4 text-primary">Contact us form</h1>
        <div class="mb-3">
          <label for="name" class="form-label text-primary">Name</label>
          <input type="text" class="form-control" id="name" placeholder="">
        </div>
        <div class="mb-3">
          <label for="surname" class="form-label text-primary">Surname</label>
          <input type="text" class="form-control" id="surname">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label text-primary">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="name@example.com">
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label text-primary">Phone</label>
          <input type="number" class="form-control" id="phone" placeholder="07XXXXXXX">
        </div>
        <div class="mb-3">
          <label for="description" class="form-label text-primary">Description</label>
          <textarea class="form-control" id="description" rows="3" placeholder="Describe your opinion"></textarea>
        </div>
        <div class="text-end">
          <button class="btn btn-primary w-25 mt-3">SEND</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

.form {
  width: 95%;
  margin: auto;
  background-color: white;
  box-shadow: black;
}

.background {
  background: linear-gradient(to bottom, #800020, lightgoldenrodyellow);
}

.form-control {
  border-color: #800020;
}

@media (min-width: 1000px) {
  .form {
    width: 50%;
  }
}

</style>