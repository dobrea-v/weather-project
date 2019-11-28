import weathers from './weathers'

function getDateCity(city) {
  const nameCity = document.querySelector('.namecity')
  const mainCity = document.querySelector('.weathermain')
  const tempCity = document.querySelector('.tempcity')
  const humidityCity = document.querySelector('.humidity')
  const speedWindCity = document.querySelector('.speedwind')
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7429042c97e6a05117b067c14694f822`)
    .then(response => {
      return response.json()
    })
    .then(result => {
      console.log(result)
      const {
        name,
        main,
        weather,
        wind
      } = result
      nameCity.innerHTML = name
      mainCity.innerHTML = `${weather[0].main}`
      tempCity.innerHTML = ` ${Math.floor(main.temp - 273.15)}°C`
      humidityCity.innerHTML = ` ${main.humidity}%`
      speedWindCity.innerHTML = `${wind.speed}Km/h`
      if (weather[0].main == weathers[weather[0].main].name) {
        // console.log(weather[0].main)
        // console.log(weathers[weather[0].main].name)
        mini()

        function mini() {
          const q = document.querySelector('.desciption-image')
          q.src = weathers[weather[0].main].url
        }
      }
    })
}
export default getDateCity