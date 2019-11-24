import sum from './js/sum'
import './styles/style.scss'
import cities from './js/cities'
import getDateToday from './js/date'

// console.log(sum(1, 2))
// console.log('Proof that it works')
// console.log(cities)
getDateToday()
const ptest = document.querySelector('.one')
const ptest2 = document.querySelector('.test2')
const locationSelect = document.querySelector('.location__select')
locationSelect.addEventListener('change', getEvenet)

localStorageTest()
function localStorageTest (city) {
  if (localStorage.getItem) {
    const cityImage = document.querySelector('#location-image')
    city = localStorage.getItem('name')
    cityImage.src = cities[city].url
    locationSelect.value = localStorage.getItem('name')
    test(city)
  }
}

function getEvenet () {
  const city = event.target.value
  const defaultCity = 'img/skyline.jpg'
  const cityImage = document.querySelector('#location-image')
  if (!cities[city]) {
    cityImage.src = defaultCity
    return null
  }
  cityImage.src = cities[city].url

  console.log('i am fucnion test2')
  localStorage.setItem('name', city)
  console.log('localstorage is setup')

  test(city)
}

function test (city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7429042c97e6a05117b067c14694f822`)
    .then(response => {
      return response.json()
    })
    .then(result => {
      console.log(result)
      const {
        name,
        main
      } = result
      ptest.innerText = name
      ptest2.innerText = main
    })
}
