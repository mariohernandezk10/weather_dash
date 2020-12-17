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


function setlocalStorage() {

    localStorage.setItem("Cities", JSON.stringify(cities));
    // console.log(cities);

}

$(document).on('click', '.cityClick', function () {
    let city = $(this).val();
    // console.log(city)
    weatherCall(city);
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
        // console.log(response);

        let lon = response.coord.lon;
        // console.log(lon);
        let lat = response.coord.lat;
        // console.log(lat);

        // UVI API => pass coordinates from weather API to UVI API
        $.ajax({

            url: `http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`,
            method: "GET"
        }).then(function (response) {
            // console.log(response);
            let index = response.value;

            addsToIndex(index);

        });

        // 5 day forcast 
        $.ajax({
            url: `http://api.openweathermap.org/data/2.5/forecast?q=${newCity}&appid=${apiKey}&units=imperial`,
            method: "GET"
        }).then(function (response) {
            // console.log(response);
            // console.log(response.list[0]);
            // console.log(response.list[0].main.temp);
            // console.log(response.list[0].wind.speed);
            // console.log(response.list[0].main.humidity)

            let temp = response.list[0].main.temp;
            let windSpeed = response.list[0].wind.speed;
            let humidity = response.list[0].main.humidity;

            addsToMain(temp, windSpeed, humidity);
// -------------------------------------------------------------------------------
            let temp1 = response.list[4].main.temp;
            let humidity1 = response.list[4].main.humidity;
// -------------------------------------------------------------------------------
            let temp2 = response.list[13].main.temp;
            let humidity2 = response.list[13].main.humidity;
// --------------------------------------------------------------------------------
            let temp3 = response.list[21].main.temp;
            let humidity3 = response.list[21].main.humidity;
// --------------------------------------------------------------------------------
            let temp4 = response.list[28].main.temp;
            let humidity4 = response.list[28].main.humidity;
//  -------------------------------------------------------------------------------
            let temp5 = response.list[35].main.temp;
            let humidity5 = response.list[35].main.humidity;



            addsToDay1(temp1, humidity1);
            addsToDay2(temp2, humidity2);
            addsToDay3(temp3, humidity3);
            addsToDay4(temp4, humidity4);
            addsToDay5(temp5, humidity5);

// --------------------------------------------------------------------
            
            let day1Unix = response.list[4].dt;
            convertAndAddUnixtoDay1(day1Unix);

            let day2Unix = response.list[13].dt;
            let day3Unix = response.list[21].dt;
            let day4Unix = response.list[28].dt;
            let day5Unix = response.list[35].dt;

        });
    });
};

function convertAndAddUnixtoDay1(day1Unix) {
    let one = moment(day1Unix)._d;
    console.log(one);
}

function addsToDay1(temp1, humidity1) {
    $("#t-1").text(temp1);
    $("#h-1").text(humidity1);
}

function addsToDay2(temp2, humidity2) {
    $("#t-2").text(temp2);
    $("#h-2").text(humidity2);
}

function addsToDay3(temp3, humidity3) {
    $("#t-3").text(temp3);
    $("#h-3").text(humidity3);
}

function addsToDay4(temp4, humidity4) {
    $("#t-4").text(temp4);
    $("#h-4").text(humidity4);
}

function addsToDay5(temp5, humidity5) {
    $("#t-5").text(temp5);
    $("#h-5").text(humidity5);
}

function addsToIndex(index) {
    $("#index span").text(index);
}

function addsToMain(temp, windSpeed, humidity, index) {
    $("#temp span").text(temp);
    $("#current-humidity").text(humidity);
    $("#wind span").text(windSpeed);
    $("#index span").text(index);

    // console.log(temp);
}



function getLocalStorage() {
    console.log(localStorage.getItem("Cities"));
}