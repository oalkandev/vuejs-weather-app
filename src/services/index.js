import axios from 'axios'

const http = axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5`,
  params: {
    'appid': '7140a33784df741da896e3829521941b',
    'units': 'metric',
  },
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getDailyByCities (cityIDs) {
    return http.get('/group', {
      params: {
        'id': cityIDs.join(),
      },
    })
  },
  getFiveDaysByCity (cityID) {
    return http.get('/forecast', {
      params: {
        'id': cityID,
      },
    })
  },
}
