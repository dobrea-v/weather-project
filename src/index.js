import sum from './js/sum'
import './styles/style.scss'
console.log(sum(1, 2))

console.log('Proof that it works')
fetch('https://api.openweathermap.org/data/2.5/weather?q=CHISINAU,MD&APPID=7429042c97e6a05117b067c14694f822')
  .then(response => {
    return response.json()
  })
  .then(result => {
    console.log(result)
  })
