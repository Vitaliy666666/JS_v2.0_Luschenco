//my api key 0d42c1dc8f0ce0cbe075b6b14c24c7c0

function getWeather() {
    const cityId = document.querySelector('#city').value;
    console.log(cityId);
    let param = {
        "url" : "https://api.openweathermap.org/data/2.5/",
        "appid" : "0d42c1dc8f0ce0cbe075b6b14c24c7c0"
    }

	//fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
    fetch(`${param.url}weather?q=${cityId}&units=metric&APPID=${param.appid}`)

	.then(weather => {
			return weather.json();
		}).then(showWeather);
   
    function showWeather(data) {
        console.log(data);
        document.querySelector('.сity').innerHTML = data.name;
        document.querySelector('.temperature').innerHTML = `${Math.round(data.main.temp)}&degC`;
        document.querySelector('.wind_speed span').innerHTML = data.wind.speed;
        document.querySelector('.weather span').innerHTML = data.clouds.all;
        document.querySelector('.img').innerHTML = '<img src ="https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png">';
    }
}
getWeather();
document.querySelector('#city').onchange = getWeather;
