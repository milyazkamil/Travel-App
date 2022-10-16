const search = document.querySelector(".search");
const send = document.querySelector(".send");
const blur = document.querySelector(".blur");
const mobileBlur = document.querySelector(".mobileBlur");
const popup = document.querySelector(".popup");
const popupButton = document.querySelector(".popupButton");
const loading = document.querySelector(".loading");

const buton1 = document.querySelector(".buton1");
const buton2 = document.querySelector(".buton2");

const mobileButon1 = document.querySelector(".mobileButon1");
const mobileButon2 = document.querySelector(".mobileButon2");

const riskInfo = document.querySelector(".riskInfo");
const unitInfo = document.querySelector(".unit");
const languagesInfo = document.querySelector(".languages");
const regionInfo = document.querySelector(".region");
const mapInfo = document.querySelector(".map");
const populationInfo = document.querySelector(".population");
const flagInfo = document.querySelector(".flag");
const imageInfo = document.querySelector(".image");


blur.style.opacity = 0;
mobileBlur.style.opacity = 0;
popup.style.display = "none";
buton2.style.display = "none";
mobileButon2.style.display = "none";

buton1.addEventListener("click", function() {
     buton1.style.display = "none";
     buton2.style.display = "block";
     blur.style.transition = "all 1.5s";
     blur.style.opacity = 1;
});

buton2.addEventListener("click", function() {
     buton1.style.display = "block";
     buton2.style.display = "none";
     blur.style.opacity = 0;
});

mobileButon1.addEventListener("click", function() {
     mobileButon1.style.display = "none";
     mobileButon2.style.display = "block";
     mobileBlur.style.transition = "all 1.5s";
     mobileBlur.style.opacity = 1;
});

mobileButon2.addEventListener("click", function() {
     mobileButon1.style.display = "block";
     mobileButon2.style.display = "none";
     mobileBlur.style.opacity = 0;
});

popupButton.addEventListener("click", function() {
     popup.style.display = "none";
     imageInfo.style.opacity = 1;
     loading.style.opacity = 1;
});
async function getInformation() {
    const response = await fetch("./risk.json");
    const responseJson = await response.json();
    

    function showInformation() {

          if(search.value == "") {
               popup.style.display = "block";
               imageInfo.style.opacity = 0;
               loading.style.opacity = 0;
          } else {
               responseJson.forEach(element => {
                    
                    if ( search.value == element.city.nameUpperCase ||
                         search.value == element.city.nameLowerCase ||
                         search.value == element.city.nameUpperCaseTr ||
                         search.value == element.city.nameLowerCaseTr ) {

                         popup.style.display = "none";
                         loading.style.opacity = 1;
                         imageInfo.style.opacity = 1;
                         imageInfo.style.backgroundImage = "url('https://source.unsplash.com/1280x720/?"+ element.city.nameUpperCase +"')";
                         riskInfo.innerText = `Risk Level: ${element.city.message}`;
                         unitInfo.innerText = `Currency Unit: ${element.city.unit} ${element.city.symbol}`;
                         if(element.city.languages[1] == undefined) {
                              languagesInfo.innerText = `Language: ${element.city.languages[0]}`;
                         } else {
                              languagesInfo.innerText = `Languages: ${element.city.languages[0]} , ${element.city.languages[1]}`;
                         }
                         regionInfo.innerText = `Region: ${element.city.region}`;
                         mapInfo.href = `${element.city.googleMaps}`;
                         populationInfo.innerText = `Population: ${element.city.population.toLocaleString("en-US")}`;
                         const flagUrl = element.city.flag.png;
                         flagInfo.src = flagUrl;
                    }
               });
          }
     }

     send.addEventListener("click", function(){
          showInformation();
     });

     search.addEventListener("keyup", function(event){
          if(event.key == "Enter") {
               showInformation();
          }
     });
};

getInformation();