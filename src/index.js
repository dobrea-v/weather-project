/* eslint-disable no-console */
import './styles/style.scss';
import Cities from './js/cities';
import { getTodayWeatherByCity } from './js/api';
import { kelvinToCelsius } from './js/utils';

const locationSelect = document.getElementById('location-select');
const locationSelectMini = document.getElementById('location__select--mini');
const locationSelectContainer = document.getElementById('location-select-container');
const cityImage = document.getElementById('location-image');

async function init() {
  const savedCity = localStorage.getItem('savedCity');

  if (savedCity && Cities[savedCity]) {
    cityImage.src = Cities[savedCity].url;
    locationSelect.value = savedCity;
    locationSelectContainer.classList.add('hide');
    locationSelectContainer.classList.add('selected');
    locationSelectMini.classList.add('appear');
    const data = await getTodayWeatherByCity(savedCity);
    // eslint-disable-next-line no-use-before-define
    renderWeatherDetails(data);
  }
}

init();


locationSelectMini.addEventListener('click', () => {
  if ((locationSelectContainer.classList.contains('selected') || locationSelectContainer.classList.contains('hide')) && !locationSelectContainer.classList.contains('show')) {
    locationSelectContainer.classList.add('show');
  } else if (locationSelectContainer.classList.contains('show')) {
    locationSelectContainer.classList.remove('show');
    locationSelectContainer.classList.remove('hide');
  }
});

locationSelect.addEventListener('change', async (event) => {
  const city = event.target.value;
  const defaultCity = 'img/skyline.jpg';

  if (!Cities[city]) {
    cityImage.src = defaultCity;
    return;
  }

  locationSelectContainer.classList.add('selected');
  locationSelectMini.classList.add('appear');
  localStorage.setItem('savedCity', city);
  locationSelect.setAttribute('disabled', true);
  cityImage.src = Cities[city].url;
  const data = await getTodayWeatherByCity(city);
  locationSelect.removeAttribute('disabled');

  console.log(data);
  // eslint-disable-next-line no-use-before-define
  renderWeatherDetails(data);
});

function renderWeatherDetails(data) {
  const { name, main, weather } = data;
  const cityName = document.getElementById('cityName');
  const cityTemp = document.getElementById('cityTemp');
  const weatherIcon = document.getElementById('weather-icon');
  const minTemp = document.getElementById('minTemp');
  const maxTemp = document.getElementById('maxTemp');
  const humidity = document.getElementById('humidity');

  cityName.innerText = name;
  cityTemp.innerText = `${kelvinToCelsius(main.temp)} ℃`;
  minTemp.innerText = `Min temp: ${kelvinToCelsius(main.temp_min)} ℃`;
  maxTemp.innerText = `Max temp: ${kelvinToCelsius(main.temp_max)} ℃`;
  humidity.innerText = `Humitidy: ${main.humidity}`;
  weatherIcon.src = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
}
