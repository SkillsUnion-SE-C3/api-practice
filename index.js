//const url = "https://api.openweathermap.org/data/2.5/forecast/daily?q=tartu&units=metric&cnt=7&appid=55219e014878a0eda0e90952b079527d";

let currentData = (response) => {
    console.log(response)
    let desc = document.querySelector("#description").innerHTML =  response.data.weather[0].description ;
    let temp = document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp)+ `°`;
    let  wind = document.querySelector("#wind-speed").innerHTML = response.data.wind.speed + ` km/h`;
    let  cityNameDisplay = document.querySelector("#city-name").innerHTML = response.data.name;

    console.log(response.data.city.name);
}

function formatDt(timestamp){
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ['Sun', 'Mon', 'Tue', 'Wed', "Thu", 'Fri', "Sat"];
    return days[day]
}

let forecastData = (response) => {
   console.log(response);
   let oneWForecast = document.querySelector("#one-week-forecast");


    let dataResponse = response.list;
    let forecastHTML = `<div class="row">`; 
    dataResponse.forEach(function (forecastDay, index) {
        if(index < 5) {
        forecastHTML = forecastHTML + `    
        <div class="col-2">
            <span class="week-day">${formatDt(forecastDay.dt)}</p>
            <span class="temp">${Math.round(forecastDay.temp.max)}°| ${Math.round(forecastDay.temp.min)}°</span><br>
            <span id="description" class="forecast-desc">${forecastDay.weather[0].description}</span>
            </div>`
        } 
    });

    oneWForecast.innerHTML = forecastHTML;
}


//SET UP API

function search(city){
    const apiKey = "1c18b94f5da8d0385e2fadd0a1a97437";
    const days = 7;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const url7 = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${days}&appid=55219e014878a0eda0e90952b079527d&units=metric`;
    
    axios.get(url).then(currentData);
    axios.get(url7).then(forecastData);
    
    fetch(url7).then((x) => x.json()).then(forecastData)
    };

    //FORM VALUE
function searchSubmit(event){
    event.preventDefault();
    let cityInput = document.querySelector("#city-input");
    search(cityInput.value);
}



//SUBMIT BUTTON CLICK TO SEARCH FUNCTION
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchSubmit);



