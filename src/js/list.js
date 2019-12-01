import Cities from './cities';
import { kelvinToCelsius } from './utils';
import { getTodayWeatherByCity } from './api';

console.log(Object.keys(Cities));

const promises = Object.keys(Cities).map((city) => getTodayWeatherByCity(city));
// Object.keys(Cities).map((city) => getTodayWeatherByCity(city)
//   .then((result) => {
//     renderListItem(result);
//   }));

// eslint-disable-next-line no-use-before-define
Promise.all(promises)
  .then((result) => result.map(renderListItem))
  .then(() => {
    const loading = document.getElementById('loading');
    loading.classList.add('hide');
  });

console.log('Code for List page');

function renderListItem(data) {
  const { name, main, weather } = data;

  const container = document.getElementById('list-container');
  const li = document.createElement('li');
  li.innerText = `${name}:  ${kelvinToCelsius(main.temp)}`;
  container.append(li);
}
