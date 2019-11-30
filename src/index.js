/* eslint-disable no-console */
import './styles/style.scss';
import Cities from './js/cities';
import { getTodayWeatherByCity } from './js/api';

const locationSelect = document.getElementById('location-select');
const locationSelectMini = document.getElementById('location__select--mini');
const locationSelectContainer = document.getElementById('location-select-container');
const cityImage = document.getElementById('location-image');

async function init() {
  const savedCity = localStorage.getItem('savedCity');

  if (savedCity && Cities[savedCity]) {
    cityImage.src = Cities[savedCity].url;
    locationSelect.value = savedCity;
    locationSelectContainer.classList.add('selected');
    locationSelectMini.classList.add('appear');
    const data = await getTodayWeatherByCity(savedCity);
    console.log(data);
  }
}

init();


locationSelectMini.addEventListener('click', () => {
  if (locationSelectContainer.classList.contains('selected') && !locationSelectContainer.classList.contains('show')) {
    locationSelectContainer.classList.add('show');
  } else if (locationSelectContainer.classList.contains('show')) {
    locationSelectContainer.classList.remove('show');
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
  cityImage.src = Cities[city].url;
  const data = await getTodayWeatherByCity(city);

  console.log(data);
});


function renderCityWeather(data) {

}
