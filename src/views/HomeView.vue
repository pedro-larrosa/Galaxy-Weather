<template>
  <NuevaCiudadModal 
    @cambiar="cambiarCiudad"
    ref="nuevoModal"
    />


  <main>
    <div class="header d-flex align-items-center justify-content-between space-between text-white bg-primary">
      <div class="dropdown">
        <button v-if="ubicaciones.length" class="btn btn-primary text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <Icon icon="fa-bars" size="xl" class="clickable p-3" />
        </button>
        <ul class="dropdown-menu">
          <li v-for="ubicacion in ubicaciones" @click="seleccinarUbicacion(ubicacion)"><a class="dropdown-item" href="#">{{ ubicacion.name }}</a></li>
        </ul>
      </div>
      <h3 class="m-2">My Weather App</h3>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#nuevaCiudad">
        <Icon icon="fa-plus" size="xl" class="clickable p-3" />
      </button>
    </div>
    <div class="">
      <div v-if="!weather" class="texto p-3">
        <h1 class="text-center">No hay ningúna ubicación seleccionada</h1>
      </div>
        <WeatherCardComponent
          v-else
          v-bind:weather="weather"
          />
    </div>
  </main>
</template>

<script>
import NuevaCiudadModal from '@/components/Modals/NuevaCiudadModal.vue';
import { getWeather } from '../shared/global/services/api-service'
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

      ubicaciones: [],
    }
  },
  mounted() {
    //comprobmos las ubicaciones en el localStorage para obtenerlos si los hubiera
    if(localStorage.getItem('ubicaciones')) {
      console.log(localStorage.ubicaciones)
      this.ubicaciones = JSON.parse(localStorage.getItem('ubicaciones'));
      this.weather = this.ubicaciones[this.ubicaciones.length - 1]
    }
  },
  methods: {
    async cambiarCiudad(ciudad) {
      try {
        const res = await getWeather(ciudad);

        this.weather = res.data;
        this.icon = res.data.weather[0].icon;

        //Se comprueba si la ubicación ya esta guardad en el localStorage para no guardarla si ya lo está
        this.guardarUbicaciones();
        

        toast.success('Ubicación añadida con éxito', {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      } catch(e) {
        toast.error(`No se ha encontrado ninguna ubicación llamada ${ciudad}`, {
          position: toast.POSITION.BOTTOM_RIGHT
        })
      }
    },
    guardarUbicaciones() {
      if(this.ubicaciones.find(item => {return item.id == this.weather.id;})) return;

      this.ubicaciones.push(this.weather);
      const parsed = JSON.stringify(this.ubicaciones);
      localStorage.setItem('ubicaciones', parsed);
    },

    //Seleccionamos la ubicacion almcenada en el storage para no tener que hacer de nuevo la llamada a la api
    seleccinarUbicacion(ubicacion) {
      this.weather = ubicacion;
    }
  }
}
</script>
