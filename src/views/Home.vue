<template>
  <div class="weather weather__container" v-if="weatherData">
    <weather-item
      v-for="item in weatherData"
      :key="item.name"
      :title="item.name"
      :temp="Math.round(item.main.temp)"
      :icon="item.weather[0].icon"
      :wind="item.wind.speed"
      :to-details="true"
      :city-i-d="item.id"
    ></weather-item>
  </div>
</template>

<script>

  import WeatherItem from '../components/WeatherItem'
  import Provider from '../services/index'

  export default {
    name: 'home',
    components: {
      WeatherItem,
    },
    data () {
      return {
        cityIDs: [2935022, 6455259, 456172, 3196359, 2692969],
        weatherData: {},
      }
    },
    methods: {
      getData (cityIDs) {
        Provider.getDailyByCities(cityIDs).then(response => {
          this.weatherData = response.data.list
        }).catch(error => {
          console.log('There was an error:', error.response)
        })
      },
    },
    created () {
      this.getData(this.cityIDs)
    },
  }
</script>
<style lang="scss">

</style>
