
let weatherArry = [];
let weeklyArry = [];

//const url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=aa47c4ee5bfd152d895d28621b2b1c2f"

//fetch(url).then((response) => response.json()).then((data) => console.log(data))

function cityName() {
    const name = document.querySelector('#city-input').value;
    document.querySelector("#city-name").innerHTML = name;
    getWeather(name);
    getWeatherWeekly(name);
}



const getWeather = async (name) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=aa47c4ee5bfd152d895d28621b2b1c2f`
    fetch(url).then((response) => response.json()).then((data) => weatherArry = data)
    renderWeather()

}



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


const getWeatherWeekly = async (name) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${name}&units=metric&cnt=7&appid=55219e014878a0eda0e90952b079527d`
    fetch(url).then((response) => response.json()).then((data) => {
        data.list.forEach((item) => {
            const weeklyContainer = document.createElement("div");
            document.querySelector("#one-week-forecast").appendChild(weeklyContainer)

            //week description header
            const headerDescription = document.createElement("h5");
            headerDescription.textContent = "Description";
            //week description
            const weather1 = document.createElement("p");
            weather1.textContent = item.weather[0].description;

            //header for temp
            const headerTemp = document.createElement("h5");
            headerTemp.textContent = "Day Temperature";

            //week temp
            const weather2 = document.createElement("p")
            weather2.textContent = item.temp.day

            //header for wind Speed
            const headerWindSpeed = document.createElement("h5");
            headerWindSpeed.textContent = "Wind Speed";

            //week wind speed
            const weather3 = document.createElement("p");
            weather3.textContent = item.speed;

            weeklyContainer.append(headerDescription, weather1, headerTemp, weather2, headerWindSpeed, weather3);
        })
    })
}


