
// // function fetchCities(){
// //      fetch("city.list.json")
// //      .then((response)=>response.json())
// //      .then((data)=>{
// //         data.forEach(City => {
// //             cities_list.push(City.name);
// //             });
// //      });
// //      console.log(cities_list)
// // }
// // fetchCities();
// const cities_list=[];
// const citiesList=document.querySelector(".auto");
// const inputElement=document.querySelector(".input-city");

// async function getCities() {
// const cities=await fetch("current.city.list.json")
// const data=await cities.json();

// // const c=data.name;
// data.forEach(City => {
//     cities_list.push(City.name);
// });

// return cities_list;
// }

// // async function main() {
// //     const city_list=await getCities();
// // }
// // main();
// async function save() {
//     final_cities=await getCities();
//     final_cities.sort();
//     final_cities.splice(0,2);
//     loadData(final_cities,citiesList);
//     return final_cities;
// }

// //save();

// function loadData(final_cities,element){
//     if(final_cities){
//         element.innerHTML="";
//         let innerElement="";
//         final_cities.forEach((item)=>
//         {
//             innerElement+=`<li class="LI">${item}</li>`;
//         });
//         element.innerHTML=innerElement;
//     }
//    Selected_city=document.querySelector(".LI");
//     Selected_city.addEventListener("click",()=>{
//         let input_e=inputElement.value;
//         input_e=Selected_city.innerText;
//     //save();

// }
// )
// return inputElement.value;
// }
// function filterData(data,searchText){
//     return data.filter((x)=>
//        x.toLowerCase().includes(searchText.toLowerCase())
//     );
// }

// inputElement.addEventListener("input", function(){
//    const filteredData= filterData(final_cities,inputElement.value);
//    loadData(filteredData,citiesList);
// });

// inputElement.addEventListener("click",save());

// // async function selected() {
// //     await loadData();
// //     Selected_city=document.querySelector(".LI");
// //     console.log(Selected_city)
// //     Selected_city.addEventListener("click",()=>{
// //         console.log(Selected_city.value)
// //         inputElement.value=Selected_city.innerText;
// //     }
// //     )
// // }
// // selected();