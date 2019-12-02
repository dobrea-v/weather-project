import cities from "./cities";
import { getApi } from "./api";

const promises = Object.keys(cities).map(city => getApi(city));

Promise.all(promises).then(result => result.map(randorListItem));


function randorListItem(data) {
  const createMainDiv = document.querySelector(".wrapper");
  const createDiv = document.createElement("div");
  const createParagraph = document.createElement("p");
  const createParagraphTemp = document.createElement("p");
  const createParagraphHumidity = document.createElement("p");
  const createParagraphWind = document.createElement("p");
  const { name, main, wind } = data;
  createParagraph.innerText = name;
  createParagraphTemp.innerText = `Temp : ${Math.round(main.temp - 273.15)}°C`;
  createParagraphHumidity.innerText = `Humidity : ${main.humidity}%`;
  createParagraphWind.innerText = `Wind : ${wind.speed}km/h`;
  createMainDiv.appendChild(createDiv);

  createDiv.classList.add("addItem");

  createDiv.appendChild(createParagraph);
  createDiv.appendChild(createParagraphTemp);
  createDiv.appendChild(createParagraphHumidity);
  createDiv.appendChild(createParagraphWind);
}

// function randorListItem(data) {
//   const createMainDiv = document.querySelector(".wrapper");
//   const createDiv = document.createElement("div");
//   const createParagraph = document.createElement("p");
//   const createParagraphTemp = document.createElement("p");
//   const createParagraphHumidity = document.createElement("p");
//   const createParagraphWind = document.createElement("p");

//   createMainDiv.appendChild(createDiv);

//   createDiv.classList.add("addItem");

//   createDiv.appendChild(createParagraph);
//   createDiv.appendChild(createParagraphTemp);
//   createDiv.appendChild(createParagraphHumidity);
//   createDiv.appendChild(createParagraphWind);

//   const { name, main, wind } = result;
//   createParagraph.innerText = name;
//   createParagraphTemp.innerText = `Temp : ${Math.round(main.temp - 273.15)}°C`;
//   createParagraphHumidity.innerText = `Humidity : ${main.humidity}%`;
//   createParagraphWind.innerText = `Wind : ${wind.speed}km/h`;
// }

// })
//  function testing() {
//   for (let city in cities) {

//     const createMainDiv = document.querySelector(".wrapper");
//     const createDiv = document.createElement("div");
//     const createParagraph = document.createElement("p");
//     const createParagraphTemp = document.createElement("p");
//     const createParagraphHumidity = document.createElement("p");
//     const createParagraphWind = document.createElement("p");
//     createMainDiv.appendChild(createDiv);
//     createDiv.classList.add("addItem");
//     createDiv.appendChild(createParagraph);
//     createDiv.appendChild(createParagraphTemp);
//     createDiv.appendChild(createParagraphHumidity);
//     createDiv.appendChild(createParagraphWind);

//     let x = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7429042c97e6a05117b067c14694f822`;

//     fetch(x)
//       .then(response => {
//         return response.json();
//       })
//       .then(result => {
//         // console.log(result);
//         const {  name,
//             main,
//             weather,
//             wind } = result;
//         createParagraph.innerText = name;
//         createParagraphTemp.innerText = `Temp : ${Math.round(main.temp - 273.15)}°C`;
//         createParagraphHumidity.innerText = `Humidity : ${main.humidity}%`;
//         createParagraphWind.innerText = `Wind : ${wind.speed}km/h`;
//       });
//   }
// }
// testing()
