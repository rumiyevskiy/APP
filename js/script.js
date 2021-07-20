const input = document.createElement("input");
const addButton = document.createElement("button");
mainBlock = document.querySelector("#app");
mainBlock.append(input, addButton);
addButton.innerHTML = "ADD";





async function getWeatherObj() {

   const valueName = input.value;;
   const cityObjResp = `http://api.openweathermap.org/data/2.5/weather?q=${valueName}&appid=5c35e660d1d2d40cba388db4b03c0326`;
   console.log(cityObjResp);
   const data = await fetch(cityObjResp);
   let data2 = await data.json();
   console.log(data2.main);

};

addButton.addEventListener("click", getWeatherObj);


//***************************************************************** */


// const selectCurr = document.querySelector('#courseOfcurrency');
// const outputCursName = document.querySelector('#ccy');
// const outputCursBuy = document.querySelector('#buy');
// const outputCursSell = document.querySelector('#sell');


// async function getCurr() {
   
//    let curr = selectCurr.options[selectCurr.selectedIndex].value;
//    const data = await fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5");

//    let buy, sale, obj, currName;
//    const corsObj = await data.json();
   
//    for(i in corsObj){

//       obj = corsObj[i].ccy;

//       if(obj == curr) {

//          currName = corsObj[i].ccy;
//          buy = corsObj[i].buy;
//          sale = corsObj[i].sale;

//       }

//    }

//    outputCursName.value = currName;
//    outputCursBuy.value = buy;
//    outputCursSell.value = sale;

// }

// selectCurr.addEventListener("change", getCurr);

