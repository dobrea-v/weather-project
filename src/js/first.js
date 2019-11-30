import cities from "./cities";
import { getApi } from './api';


export function testing() {
  for (let city in cities) {
    let arrky = [city]
      const block = document.querySelector(".container-main");
      const newItem = document.createElement("div");
      block.appendChild(newItem);
      newItem.classList.add("yo-ho-ho");
      newItem.innerText = city;
// console.log(getApi(city))
  
  }
  
}
testing();
