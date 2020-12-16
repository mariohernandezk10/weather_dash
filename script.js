let newCity = "austin"

const apiKey = "11ae01be28641011b4eebb3bef71dd40"


const cities = JSON.parse(localStorage.getItem("Cities")) || ["Austin", "Houston", "San Antonio"];

$(document).ready(() => {
    createButtons();
})


// Event listeners

document.getElementById("search").addEventListener("click", function () {
    let newCity = document.getElementById("search-city").value;
    if (cities.includes(newCity)) {
        alert('This city button is already exist.')
    } else {
        cities.push(newCity);
    }
    // console.log(cities);
    // console.log(newCity);
    // weatherCall();
    setlocalStorage();
    // getLocalStorage();
    weatherCall(newCity);
    createButtons();

});

$(document).on('click', '.cityClick', function () {
    let city = $(this).val();
    console.log(city)
    weatherCall(city)
})


function createButtons() {
    $('.list-cities').empty();
    let cities = JSON.parse(localStorage.getItem("Cities")) || ["Austin", "Houston", "San Antonio"];
    for (var i = 0; i < cities.length; i++) {
        // let a = $('<div>').html(
        //     `
        //     <div class="city-container" id="city-container">
        //         <div class="city-text">${cities[i]}</div>
        //     </div>
        //     `
        // )
        let a = $('<button>').text(cities[i]).addClass('city-text cityClick').val(cities[i]);
        $('.list-cities').append(a)
    }

}


function weatherCall(newCity) {

    // weather API
    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${newCity}&APPID=${apiKey}`,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        const lon = response.coord.lon;
        console.log(lon);
        const lat = response.coord.lon;

            // UVI API => pass coordinates from weather API to UVI API
            $.ajax({
                url: `http://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${lat}&lon=-${lon}`,
                method: "GET"
            }).then(function (response) {

            });

        // 5 day forcast 
        $.ajax({}).then(function (response) {

        });
    });
};


function setlocalStorage() {

    localStorage.setItem("Cities", JSON.stringify(cities));
    // console.log(cities);

}

function getLocalStorage() {
    console.log(localStorage.getItem("Cities"));
}







// create divs for the past search
// function listPastSearch() {
//     for (let i = 0; i < 10; i++) {}
//     div = document.createElement("div");
//     div.appendChild();
// }