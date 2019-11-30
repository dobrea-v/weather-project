


export function getApi(city){
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7429042c97e6a05117b067c14694f822`)
   .then(response => {
    return response.json()
  })
  .then(result=>{
      console.log(result)
  })

}
