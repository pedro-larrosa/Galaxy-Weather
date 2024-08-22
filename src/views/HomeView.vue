<template>
  <main class="header">
    <div class="header d-flex align-items-center justify-content-between space-between text-white bg-primary">
      <Icon @click="" icon="fa-bars" size="2xl" class="clickable p-3" />
      <h3 class="m-2">My Weather App</h3>
      <Icon icon="fa-plus" size="2xl" class="clickable p-3" />
    </div>
    <div class="">
      <h1 v-if="weather && weather.length > 0" class="text-center">No hay ningún lugar seleccionado</h1>
      <p>
        {{ weather }}
      </p>
    </div>
  </main>
</template>

<script>
import { getWeather, getPosition } from '../shared/global/services/api-service'

export default {
  name: "Home",
  data() {
    return {
      weather: [],
    }
  },
  mounted() {
    //const location = navigator.geolocation.getCurrentPosition();
    //console.log(location);

    getPosition('Orihuela').then(res => {
      let r = res.data[0];

      this.weather.push(r)
      getWeather(r.lat, r.lon).then(res => {
        this.weather.push(res.data);
        console.log()
      })
      console.log(res);
    })
  }
}
</script>
