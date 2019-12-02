import cities from './cities';

const API_KEY = '7429042c97e6a05117b067c14694f822';

export function getApi(city) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities[city].name}&appid=${API_KEY}`)
    .then((response) => response.json())

}
export function getApiDaily() {
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Chisinau&appid=7429042c97e6a05117b067c14694f822`)
    .then((response) => response.json())

}
