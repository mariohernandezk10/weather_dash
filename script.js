// const url = `http://api.openweathermap.org/data/2.5/weather?q=austin&appid=${apiKey}&units=imperial`
// const apiKey = "2884ab08c87940d88552c26af1acf021"
const city = document.getElementById("search-city").val();


console.log(city);


function setlocalStorage () {

    localStorage.setItem("City", city)
}

function removeLocalStorage () {

    localStorage.removeItem("city")
}
// create divs for the past search

// Event listeners

document.getElementById("search-city").addEventListener("click", function() {
    setlocalStorage();
});