
let weatherArry = [];

//const url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=aa47c4ee5bfd152d895d28621b2b1c2f"

//fetch(url).then((response) => response.json()).then((data) => console.log(data))

function cityName() {
    const name = document.querySelector('#city-input').value;
    document.querySelector("#city-name").innerHTML = name;
    getWeather(name);
}



const getWeather = async (name) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=aa47c4ee5bfd152d895d28621b2b1c2f`
    //const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=aa47c4ee5bfd152d895d28621b2b1c2f`)
    fetch(url).then((response) => response.json()).then((data) => weatherArry = data)

    renderWeather()
    renderWeekly()
}

//console.log(getWeather("Berlin"))

const renderWeather = () => {

    //description
    const description = weatherArry.weather[0].description;
    document.querySelector("#description").innerHTML = description;

    //temp
    const temperature = weatherArry.main.temp;
    document.querySelector("#temperature").innerHTML = temperature;

    //wind-speed
    const windSpeed = weatherArry.wind.speed;
    document.querySelector("#wind-speed").innerHTML = windSpeed;
}

const renderWeekly = () => {

    const weeklyContainer = document.querySelector('#one-week-forecast')
    // weeklyContainer.innerHTML = ""
    weatherArry.forEach((weatherItem) => {
        const weather1 = document.createElement('p')
        weather1.textContent = weatherItem.weather[0].description
        weeklyContainer.append(weather1)





    })
}

