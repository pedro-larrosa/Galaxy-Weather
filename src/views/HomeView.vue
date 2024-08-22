<template>
  <main class="header">
    <div class="header d-flex align-items-center justify-content-between space-between text-white bg-primary">
      <Icon @click="" icon="fa-bars" size="2xl" class="clickable p-3" />
      <h3 class="m-2">My Weather App</h3>
      <Icon icon="fa-plus" size="2xl" class="clickable p-3" />
    </div>
    <div class="">
      <h1 class="text-center">No hay ningún lugar seleccionado</h1>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      weather: [],
    }
  },
}
</script>
