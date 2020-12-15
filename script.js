// const url = `http://api.openweathermap.org/data/2.5/weather?q=austin&appid=${apiKey}&units=imperial`
// const apiKey = "2884ab08c87940d88552c26af1acf021"
let city;



function setlocalStorage () {

    localStorage.setItem("City", city);
}

function getLocalStorage () {
    localStorage.getItem("City");
}
















// create divs for the past search
function listPastSearch() {
    if (localStorage.getItem("City") !== "string" || localStorage.getItem("City") === "") {
        console.log("Need to put something");
    } else {
        console.log("so far so good");
    }
}









// Event listeners

document.getElementById("search").addEventListener("click", function() {
    city = document.getElementById("search-city").value;
    // console.log(city);
    setlocalStorage();
});

getLocalStorage();
console.log(localStorage.getItem("City"));
