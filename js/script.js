const input = document.createElement("input");
const addButton = document.createElement("button");
const mainBlock = document.querySelector("#app");
const cityBlock = document.querySelector("#city");
cityBlock.style.display = "none";
mainBlock.append(input, addButton);
addButton.innerHTML = "ADD";
const cityWeatherArr = [];
let cityKey, data2;




async function getWeatherObj() {

   const valueName = input.value;
   if (valueName === '' || valueName === ' ') {
      alert("You must write something!");
    } else {
   const cityObjResp = `http://api.openweathermap.org/data/2.5/weather?q=${valueName}&appid=5c35e660d1d2d40cba388db4b03c0326`;
   const data = await fetch(cityObjResp);
   data2 = await data.json();
   console.log(data2);
   cityKey = `"Key"${valueName}`;

   if (localStorage.getItem(cityKey) === null) {

      localStorage.setItem(cityKey, JSON.stringify(data2.main));

      let arr = JSON.parse(localStorage.getItem(cityKey));
   }else{
      let arr = JSON.parse(localStorage.getItem(cityKey));
   };

   };

   renderCity();

};

function renderCity () {

   cityBlock.style.display = "block";
   let renderArr = JSON.parse(localStorage.getItem(cityKey));
   let tempCity = (renderArr.temp - 273.15).toFixed(1);
   let tempCityMin = (renderArr.temp_min - 273.15).toFixed(1);
   let tempCityMax = (renderArr.temp_max - 273.15).toFixed(1);
   let tempCityfeels = (renderArr.feels_like - 273.15).toFixed(1);
   let nameCity = data2.name;
   let text = nameCity + "\n" + tempCity + "\n" + tempCityMin + "\n" + tempCityMax + "\n" + tempCityfeels;
   cityBlock.innerText = text;

   listenCity();

}

function listenCity () {
addButton.addEventListener("click", getWeatherObj);
}

listenCity();
