import sum from './js/sum'
import './styles/style.scss'
import cities from './js/cities'
import getDateToday from './js/date'

// console.log(sum(1, 2))
// console.log('Proof that it works')
// console.log(cities)
getDateToday()
const ptest = document.querySelector('.one')

const locationSelect = document.querySelector('.location__select')
locationSelect.addEventListener('change', getEvenet)

function getEvenet () {
  const city = event.target.value
  const defaultCity = 'img/skyline.jpg'
  const cityImage = document.querySelector('#location-image')

  if (!cities[city]) {
    cityImage.src = defaultCity
    return null
  }
  cityImage.src = cities[city].url

  function test () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7429042c97e6a05117b067c14694f822`)
      .then(response => {
        return response.json()
      })
      .then(result => {
        console.log(result)
      })
      .then(result => {
        const {
          id

        } = result
        ptest.innerText = id
      })
  }
  test()
}
