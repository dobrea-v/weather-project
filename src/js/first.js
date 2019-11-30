import cities from "./cities";
import { getApi } from './api';


export function testing() {
  for (let city in cities) {
    let arrky = [city]
      const block = document.querySelector(".container-main");
      const block2 = document.querySelector(".wrapper");
      const newItem = document.createElement("div");
      const newP = document.createElement("span")
block.appendChild(block2)
      block2.appendChild(newItem);
      block2.appendChild(newP)
      newItem.classList.add("yo-ho-ho");
    //   newItem.innerText = city;
      

        // let exemple = getApi(city)


       let x = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7429042c97e6a05117b067c14694f822` 
       

       fetch(x)
       .then(response => {
         return response.json()
       })
       .then(result => {
        console.log(result)
        const {       
          main,
          name      
        } = result
        newP.innerText = `${Math.round(main.temp-273.15)}°C`
        newItem.innerText = name
     
    })
  } 
}
testing();
