<template>
  <NuevaCiudadModal 
    @cambiar="cambiarCiudad"
    ref="nuevoModal"
    />


  <main>
    <div class="header d-flex align-items-center justify-content-between space-between text-white bg-primary">
      <Icon @click="" icon="fa-bars" size="xl" class="clickable p-3" />
      <h3 class="m-2">My Weather App</h3>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#nuevaCiudad">
        <Icon icon="fa-plus" size="xl" class="clickable p-3" />
      </button>
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
import NuevaCiudadModal from '@/components/Modals/NuevaCiudadModal.vue';
import { getWeather, getPosition } from '../shared/global/services/api-service'
import WeatherCardComponent from '@/components/WeatherCardComponent.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


export default {
  name: "Home",
  components: {
    WeatherCardComponent,
    NuevaCiudadModal
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
  },
  methods: {
    async cambiarCiudad(ciudad) {
      try {
        let posicion = await getPosition(ciudad);
        posicion = posicion.data[0];

        const res = await getWeather(posicion.lat, posicion.lon);

        this.weather = res.data;
        this.icon = res.data.weather[0].icon;
        toast.success('Ubicación añadida con éxito', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      } catch(e) {
        console.log(e);
        toast.error('Ha ocurrido un error añadiendo la ubicación', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      }
    }
  }
}
</script>
