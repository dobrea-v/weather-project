
const apiKey = '7429042c97e6a05117b067c14694f822';

export function getApi(city){
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`)
   .then(response => {
    return response.json()
  })
  

}
