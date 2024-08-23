<template>
    <div class="card container border-0">
        <div class="card-body">
            <div class="card-title weather-title me-2 text-center">{{ item.name }} <span class="text-secondary weather-country">{{ item.sys.country }}</span></div>
            <div class="d-flex align-items-center justify-content-around text-center mb-4">
                <div>
                    <img :src="`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`" class="icono">
                    <small class="d-block">
                        {{ capitalize(item.weather[0].description) }}
                    </small>
                </div>
                <div>
                    <h2 class="temperatura">{{ item.main.temp }} ºC </h2>
                    <small>
                        <strong>
                        <span class="text-danger">{{ item.main.temp_max }} ºC</span> / <span class="text-primary">{{ item.main.temp_min }} ºC </span>
                    </strong>
                    </small>
                </div>
            </div>
            <ul class="list-group list-group-flush weather-list">
                <li class="list-group-item d-flex align-items-center"><strong class="weather-list-title">Presión atmosférica:</strong> <div class="text-center w-100">{{ item.main.pressure }} hPa</div></li>
                <li class="list-group-item d-flex align-items-center"><strong class="weather-list-title">Humedad:</strong> <div class="text-center w-100">{{ item.main.humidity }} %</div></li>
                <li class="list-group-item d-flex align-items-center"><strong class="weather-list-title">Visibilidad:</strong> <div class="text-center w-100">{{ item.visibility }} m</div></li>
                <li class="list-group-item d-flex align-items-center"><strong class="weather-list-title">Viento:</strong> <div class="text-center w-100">{{ `${item.wind.speed} m/s  ${item.wind.deg}º` }}</div></li>
              </ul>
        </div>
    </div>
</template>
<script>
import { capitalize } from 'vue';

export default {
    name: 'WeatherCardComponent',
    props: {
        weather: { type: Object, required: true}
    },
    data() {
        return {
            capitalize
        }
    },
    computed: {
        item: {
            get: function() {
                return this.weather;
            },
            set: function (nuewValue) {
                this.$emit("update:weather", nuewValue);
            }
        }
    },
}
</script>
<style lang="scss">
    
</style>