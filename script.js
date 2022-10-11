const search = document.querySelector(".search");
const send = document.querySelector(".send");
const about = document.querySelector(".about");

const buton1 = document.querySelector(".buton1");
const buton2 = document.querySelector(".buton2");

const riskInfo = document.querySelector(".riskInfo");
const unitInfo = document.querySelector(".unit");
const languagesInfo = document.querySelector(".languages");
const regionInfo = document.querySelector(".region");
const mapInfo = document.querySelector(".map");
const populationInfo = document.querySelector(".population");
const flagInfo = document.querySelector(".flag");
const imageInfo = document.querySelector(".image");

send.addEventListener("click", function(){

});


about.style.opacity = 0;
buton2.style.display = "none";

buton1.addEventListener("click", function() {
     buton1.style.display = "none";
     buton2.style.display = "block";
     about.style.transition = "all 1.5s";
     about.style.opacity = 1;
});

buton2.addEventListener("click", function() {
     buton1.style.display = "block";
     buton2.style.display = "none";
     about.style.opacity = 0;
});


async function getInformation() {
    const response = await fetch("./risk.json");

    const responseJson = await response.json();
    //114 cities
     send.addEventListener("click", function(){
          
          responseJson.forEach(element => {
               if (search.value == element.city.name) {
                    imageInfo.style.backgroundImage = "url('https://source.unsplash.com/1280x720/?"+ element.city.name +"')";
                    riskInfo.innerText = `Risk Level: ${element.city.message}`;
                    unitInfo.innerText = `Currency Unit: ${element.city.unit} ${element.city.symbol}`;
                    if(element.city.languages[1] == undefined) {
                         languagesInfo.innerText = `Languages: ${element.city.languages[0]}`;
                    } else {
                         languagesInfo.innerText = `Languages: ${element.city.languages[0]} , ${element.city.languages[1]}`;
                    }
                    regionInfo.innerText = `Region: ${element.city.region}`;
                    mapInfo.href = `${element.city.googleMaps}`;
                    populationInfo.innerText = `Population: ${element.city.population.toLocaleString("en-US")}`;
                    flagInfo.innerText = `Flag: ${element.city.flag.png}`;
                    const flagUrl = element.city.flag.png;
                    flagInfo.src = flagUrl;
               }
          });
     });


     search.addEventListener("keyup", function(event){
          if(event.key == "Enter") {
               responseJson.forEach(element => {
                    if (search.value == element.city.name) {
                         imageInfo.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?"+ element.city.name +"')";
                         riskInfo.innerText = `Risk Level: ${element.city.message}`;
                         unitInfo.innerText = `Currency Unit: ${element.city.unit} ${element.city.symbol}`;
                         if(element.city.languages[1] == undefined) {
                              languagesInfo.innerText = `Languages: ${element.city.languages[0]}`;
                         } else {
                              languagesInfo.innerText = `Languages: ${element.city.languages[0]} , ${element.city.languages[1]}`;
                         }
                         regionInfo.innerText = `Region: ${element.city.region}`;
                         mapInfo.href = `${element.city.googleMaps}`;
                         populationInfo.innerText = `Population: ${element.city.population.toLocaleString("en-US")}`;
                         flagInfo.innerText = `Flag: ${element.city.flag.png}`;
                         const flagUrl = element.city.flag.png;
                         flagInfo.src = flagUrl;

                    }
               });
          }
     });
};

getInformation();













/*
const image = document.querySelector(".image");


*/

