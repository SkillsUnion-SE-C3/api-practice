const url = "https://api.openweathermap.org/data/2.5/forecast/daily?q=tartu&units=metric&cnt=7&appid=55219e014878a0eda0e90952b079527d"

fetch(url).then((x) => x.json()).then((x) => console.log(x))