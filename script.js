// import "./suggestion.js"
//import { citiesList, l_f_c, loadData } from "./suggestion";
const apiKey="4f9aa978f035de553b64413fe3fe4a75";
//var url="https://api.openweathermap.org/data/2.5/weather?q=ghaziabad&appid=4f9aa978f035de553b64413fe3fe4a75&units=metric";
let btn=document.querySelector(".button-ele");
const WIcon=document.querySelector(".weather-icon");
let city=document.querySelector(".input-city");
const card=document.querySelector(".weather");
const details=document.querySelector(".details");
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var City="ghaziabad"
 async function checkweather(City) {
    
    const response = await fetch(url+City+`&appid=${apiKey}`);
    const data= await response.json();
    card.classList.remove("remove");
    //card.style.animationDuration="2s";
    if(data.message==="city not found"||city.value==""){
        details.classList.add("remove");
        document.querySelector(".city").innerHTML="Please Enter Correct City";
        document.querySelector(".temp").innerHTML=" ";
        document.querySelector(".humidity").innerHTML=" ";
        document.querySelector(".wind").innerHTML=" ";
        WIcon.src=`images/error.png`
    }
    else{
        details.classList.remove("remove");
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=data.main.temp;
        document.querySelector(".humidity").innerHTML=data.main.humidity;
        document.querySelector(".wind").innerHTML=data.wind.speed;
        W_main=data.weather[0].main;
        WIcon.src=`images/${W_main}.png`
 }
}

 btn.addEventListener("click",()=>{
    var City=city.value;
    checkweather(City);
})
city.addEventListener("keypress",(event)=>{
    if(event.key==="Enter"){
    var City=city.value;
    checkweather(City);

 }
})

//c=loadData(l_f_c,citiesList)
