<template>
  <div>
    <h3 v-if="cityName" class="weather weather__header">{{cityName}}</h3>
    <div class="weather weather__container">
      <weather-item
        v-for="item in weatherOneByDay"
        :key="item.name"
        :title="days[(new Date(item.dt_txt)).getDay()]"
        :temp="Math.round(item.main.temp)"
        :icon="item.weather[0].icon"
        :wind="item.wind.speed"
        :to-details="false"
        :city-i-d="cid"
      ></weather-item>
    </div>
  </div>
</template>

<script>

  import WeatherItem from '../components/WeatherItem'
  import Provider from '../services/index'

  export default {
    name: 'details',
    components: {
      WeatherItem,
    },
    props: {
      cid: String,
    },
    data () {
      return {
        cityName: null,
        weatherData: {},
        weatherOneByDay: [],
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      }
    },
    methods: {
      getData (cityID) {
        Provider.getFiveDaysByCity(cityID).then(response => {
          this.weatherData = response.data.list
          this.cityName = response.data.city.name

          /********************************/
          let date
          let cleaned = []
          this.weatherData.map((x, i, t) => {
            if (i > 0) {
              let currentDate = new Date(x.dt_txt)
              let prevDate = new Date(t[i - 1].dt_txt)
              currentDate.getDate() !== prevDate.getDate() ? cleaned.push(x) : 0
            } else {
              cleaned.push(x)
            }
          })
          this.weatherOneByDay = cleaned
          /********************************/
        }).catch(error => {
          console.log('There was an error:', error.response)
        })
      },
    },
    created () {
      this.getData(this.cid)
    },
  }
</script>

<style lang="scss">

</style>
