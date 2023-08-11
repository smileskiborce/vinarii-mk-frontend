<template>
  <div class="background py-5">
    <div class="container">
      <div class="form p-5 shadow rounded-5">
        <div class="row d-flex">
          <div class="col column1">
            <h1 class="text-primary ">Get in touch</h1>
            <div class="my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </div>
            <div class="m-3 fa fa-envelope fw-bold d-block"><span class="px-2">email@gmail.com</span></div>
            <div class="m-3 fa fa-phone fw-bold d-block"><span class="px-2">+38977777777</span></div>
          </div>
          <div class="col column2">
            <h1 class="text-center pb-4 text-primary show-title">Contact us form</h1>
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

.show-title {
  display: none;
}

@media (max-width: 768px) {
  .column1 {
    display: none;
  }

  .show-title {
    display: block;
  }
}

</style>