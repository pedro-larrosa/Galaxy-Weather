<template>
  <main class="header">
    <div class="header d-flex align-items-center justify-content-between space-between text-white bg-primary">
      <Icon @click="" icon="fa-bars" size="2xl" class="clickable p-3" />
      <h3 class="m-2">My Weather App</h3>
      <Icon icon="fa-plus" size="2xl" class="clickable p-3" />
    </div>
    <div class="">
      <h1 v-if="!weather" class="text-center">No hay ningún lugar seleccionado</h1>
        <WeatherCardComponent
          v-else
          v-bind:weather="weather"
          />
    </div>
  </main>
</template>

<script>
import { getWeather, getPosition } from '../shared/global/services/api-service'
import WeatherCardComponent from '@/components/WeatherCardComponent.vue';

export default {
  name: "Home",
  components: {
    WeatherCardComponent
  },
  data() {
    return {
      weather: null,
      icon: null,
    }
  },
  mounted() {
    getPosition('Orihuela').then(res => {
      let r = res.data[0];

      getWeather(r.lat, r.lon).then(res => {
        this.weather = res.data;
        console.log(res.data)
        this.icon = res.data.weather[0].icon;

      })
      console.log(res);
    })
  }
}
</script>
