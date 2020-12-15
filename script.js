let newCity;

const apiKey = "11ae01be28641011b4eebb3bef71dd40"
const queryUrl = `http://api.openweathermap.org/data/2.5/weather?q=${newCity}&APPID=${apiKey}`
const cities = [];


// Event listeners

document.getElementById("search").addEventListener("click", function() {
    let newCity = document.getElementById("search-city").value;
    
    cities.push(newCity);
    console.log(cities);
    console.log(newCity);
    // weatherCall();
    setlocalStorage();
    getLocalStorage();

});



function weatherCall() {

// weather API
$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function(response) {
    console.log(response);

    // // UVI API => pass coordinates from weather API to UVI API
    // $.ajax({}).then(function(response){

    // });

    // // 5 day forcast 
    // $.ajax({}).then(function(response){

    // });
});
};


function setlocalStorage () {

    localStorage.setItem("Cities", JSON.stringify(cities));
    // console.log(cities);

}

function getLocalStorage () {
    console.log(localStorage.getItem("Cities"));
}







// create divs for the past search
// function listPastSearch() {
//     for (let i = 0; i < 10; i++) {}
//     div = document.createElement("div");
//     div.appendChild();
// }













