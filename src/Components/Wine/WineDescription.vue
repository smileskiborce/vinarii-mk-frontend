<template>
  <div class="container">
    <h2 class="text-center text-white font-monospace">WINARY I</h2>
    <div class="justify-content-center d-flex">
      <hr class="text-white" style="width: 200px;margin-top: -1px"/>
    </div>
    <div class="ratio-21x9 ratio text-center">
      <img src='/images/wine/wine.png' class="p-5"/>
    </div>
    <div class="text-white font-inter">
      <h3 class="font-inter pt-2 text-center">ABOUT US</h3>
      <div class="justify-content-center d-flex">
        <hr class="text-white" style="width: 200px; margin-top: -1px"/>
      </div>
      <div class="text-center px-5 my-2">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WineDescription"
}
</script>
<script setup>
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus ipsum, convallis et lectus ullamcorper, ' +
    'ultricies hendrerit risus. Proin iaculis velit at purus sodales varius. Nunc ut tincidunt purus. Morbi turpis ipsum,' +
    ' faucibus vel porttitor nec, lobortis quis magna. Nam dictum facilisis lacus, vel pellentesque odio varius a. Donec bibendum' +
    ' porta turpis nec eleifend. Donec vitae maximus neque. Sed egestas felis id leo venenatis dapibus. Donec sem est,' +
    ' congue non cursus vel, ornare sit amet elit. Duis ut nisi nisi. Sed scelerisque eros non elit imperdiet interdum. ' +
    'Pellentesque lacus nisl, gravida eu sapien sed, mollis ornare eros. Maecenas vitae purus tempor, sodales diam sed, ' +
    'consequat leo. Aenean iaculis quam eget accumsan vulputate. Nam eget turpis dignissim, auctor diam mattis, elementum felis.'

</script>

<style scoped>

</style>