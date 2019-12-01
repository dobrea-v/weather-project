import Cities from './cities';

const API_KEY = '0ffd416aff3105ed18298e35a8ffaf0c';

// eslint-disable-next-line import/prefer-default-export
export function getTodayWeatherByCity(city) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${Cities[city].name}&appid=${API_KEY}`)
    .then((response) => response.json());
}
