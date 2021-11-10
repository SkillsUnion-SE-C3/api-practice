

//const cityID = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=a3945f9c880ee830db59d75f1fe60c4c"

// const cityInput = document.querySelector("#city-input");
// const cityBtn = document.querySelector("#get-forecast");
// const cityNameh2 = document.querySelector("#city-name");


//renderCity;

// const getWeather = async (cityName) => {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ddd05fbfeb104db67a866fd58d16c961
//     `)

//     const data = await response.json()
//     const description = data.weather[0].description
//     const temperature = data.main.temp
//     const windSpeed = data.wind.speed
//     //console.log(data)
// const rows = document.querySelector('#rows')

// const descriptionElement = document.querySelector("#description");
// descriptionElement.textContent = description;  

// const temperatureElement = document.querySelector("#temperature");
// temperatureElement.textContent = temperature; 

// const windSpeedElement = document.querySelector('#wind-speed')
// windSpeedElement.textContent = windSpeed

// rows.append(descriptionElement, temperatureElement, windSpeedElement)

// }
// getWeather("London")

// const button = document.querySelector("#get-forecast")
// button.addEventListener("click", () => {
//     getWeather(document.querySelector("#city-input").value )
// })


//weekly forecast 

const url = "https://api.openweathermap.org/data/2.5/forecast/daily?q=tartu&units=metric&cnt=7&appid=55219e014878a0eda0e90952b079527d"

const weatherForecast = async () => {
    const response2 = await fetch(url)
    const data2 = await response2.json()
    // console.log(data2)
    const weeklyDiv = document.querySelector("#one-week-forecast");
    data2.list.forEach((day) => {
        const dailyPtag = document.createElement("p");
        const dailyWeatherPtag = document.createElement("p");
        console.log(day.weather[0].main);
        dailyPtag.textContent = day.dt;
        dailyWeatherPtag.textContent = day.weather[0].main;
        weeklyDiv.append(dailyPtag, dailyWeatherPtag);
    
    })

    // console.log(data2.list);
}

weatherForecast();

// function renderWeek(weeklyDiv, dailyPtag, dailyWeatherPtag) {
//     weeklyDiv.append(dailyPtag, dailyWeatherPtag);
// }

//my notes 
//step one link button to my dom and event listener 
//step 2.a link the function with fetch to the event listener 
//step 2.b console log check on fetch key
//step 3 inside fetch connect url look at how to make city an inputfield from dom cityInput
//step 4 response converted to json 
//step 5 console.log Data (x)
//step 5 put in try and catch 