const apiKey = "11ae01be28641011b4eebb3bef71dd40"

const cities = [];






function setlocalStorage () {

    localStorage.setItem("Cities", JSON.stringify(cities));
    console.log(cities);

}

function getLocalStorage () {
    localStorage.getItem("Cities");
}

function weatherCall() {
    const queryUrl = `http://api.openweathermap.org/data/2.5/weather?q=austin&APPID=${apiKey}`
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
weatherCall();









// create divs for the past search
function listPastSearch() {
    for (let i = 0; i < 10; i++) {}
    div = document.createElement("div");
    div.appendChild();
}










// Event listeners

document.getElementById("search").addEventListener("click", function() {
    let newCity = document.getElementById("search-city").value;
    cities.push(newCity);
    // console.log(city);
    setlocalStorage();
});

getLocalStorage();
console.log(localStorage.getItem("City"));
