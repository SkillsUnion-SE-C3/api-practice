const button = document.querySelector("button")
const cityInput = document.querySelector("input")
const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toPrecision(3);
const forecastDiv = document.createElement("div");
document.querySelector("#one-week-forecast").appendChild(forecastDiv);

button.addEventListener("click", () =>{
    forecastDiv.innerHTML ="";
    const givenCity = cityInput.value;
    document.querySelector("#city-name").textContent = givenCity;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${givenCity}&appid=fc6f682e122aed07366e8816e32bdefd`).then((response) => response.json()).then((data) => {
        document.querySelector("#description").textContent = data.weather[0].description;
        document.querySelector("#temperature").textContent = `${kelvinToCelsius(data.main.temp)} degrees celsius`;
        document.querySelector("#wind-speed").textContent = data.wind.speed;
    })
    fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${givenCity}&units=metric&cnt=7&appid=55219e014878a0eda0e90952b079527d`).then((response) => response.json()).then((data)=>{
        data.list.forEach((day, index)=> {
            const dayNumber = document.createElement("h4")
            dayNumber.textContent = index + 1;
            const windSpeedTitle = document.createElement("h5");
            windSpeedTitle.textContent = "Wind Speed"
            const tempTitle = document.createElement("h5");
            tempTitle.textContent = "Temperature";
            const windSpeedPara = document.createElement("p");
            windSpeedPara.textContent = day.speed;
            const temperaturePara = document.createElement("p");
            temperaturePara.textContent = day.temp.day;
            forecastDiv.append(dayNumber,windSpeedTitle,windSpeedPara,tempTitle,temperaturePara);          
        })
    })

})

