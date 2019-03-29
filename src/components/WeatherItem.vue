<template>
  <router-link :to="detailURL()" class="weather weather__wrapper">
    <div class="weather weather__item">
      <div class="weather weather__title">{{title}}</div>
      <div class="weather weather__temp">{{temp}} &deg;C</div>
      <div class="weather weather__icon">
        <img :src="iconURL()" alt="">
      </div>
      <div class="weather__wind">{{wind}} km/h</div>
    </div>
  </router-link>
</template>

<script>
  export default {
    props: {
      title: String,
      temp: Number,
      icon: String,
      wind: Number,
      toDetails: {
        type: Boolean,
        default: false,
      },
      cityID: {},
    },
    name: 'WeatherItem.vue',
    methods: {
      iconURL () {
        return 'http://openweathermap.org/img/w/' + this.icon + '.png'
      },
      detailURL () {
        return '/details/' + this.cityID
      },
    },
  }
</script>

<style>
  .weather-item {
    width: 100px;
    min-height: 150px;
    background-color: rgba(255, 255, 255, .75);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
  }
</style>
