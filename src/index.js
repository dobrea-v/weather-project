import './styles/style.scss'
import cities from './js/cities'
import getDateToday from './js/date'
import getDateCity from './js/fetch'
import setLocalStorage from './js/localstorage'

getDateToday()

const locationSelect = document.querySelector('.location__select')
locationSelect.addEventListener('change', getEvenet)

setLocalStorage()

function getEvenet () {
  const city = event.target.value
  const defaultCity = 'img/skyline.jpg'
  const cityImage = document.querySelector('#location-image')

  if (!cities[city]) {
    cityImage.src = defaultCity
  } else {
    cityImage.src = cities[city].url
  }
  localStorage.setItem('name', city)

  getDateCity(city)
}
