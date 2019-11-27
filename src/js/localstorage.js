import getDateCity from './fetch'
import cities from './cities'

function setLocalStorage () {
  if (localStorage.getItem('name')) {
    // console.log('start')
    const cityImage = document.querySelector('#location-image')
    const city = localStorage.getItem('name')
    // console.log(localStorage.getItem('name'))
    cityImage.src = cities[city].url
    getDateCity(city)
    // console.log(cityImage)
    // console.log(city)
  }
}
export default setLocalStorage
