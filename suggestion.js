// function fetchCities(){
//      fetch("city.list.json")
//      .then((response)=>response.json())
//      .then((data)=>{
//         data.forEach(City => {
//             cities_list.push(City.name);
//             });
//      });
//      console.log(cities_list)
// }
// fetchCities();
const cities_list=[];
const citiesList=document.querySelector(".auto");
const inputElement=document.querySelector(".input-city");

async function getCities() {
const cities=await fetch("current.city.list.json")
const data=await cities.json();
// const c=data.name;
data.forEach(City => {
    cities_list.push(City.name);
});

return cities_list;
}

// async function main() {
//     const city_list=await getCities();
// }
// main();
async function save() {
    final_cities=await getCities();
    final_cities.sort();
    final_cities.splice(0,1);
    loadData(final_cities,citiesList);
    console.log(final_cities);
}
save();

function loadData(final_cities,element){
    if(final_cities){
        element.innerHTML="";
        let innerElement="";
        final_cities.forEach((item)=>
        {
            innerElement+=`<li>${item}</li>`;
        });
        element.innerHTML=innerElement;
    }
}

function filterData(data,searchText){
    return data.filter((x)=>
       x.toLowerCase().includes(searchText.toLowerCase())
    );
}

inputElement.addEventListener("input", function(){
   const filteredData= filterData(final_cities,inputElement.value);
   loadData(filteredData,citiesList);
});