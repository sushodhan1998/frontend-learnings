document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById('city-input');
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const weatherInfo = document.getElementById('weather-info');
    const cityNameDisplay = document.getElementById('city-name');
    const temperatureDisplay = document.getElementById('temperature');
    const descriptionDisplay = document.getElementById('description');
    const errorMessage = document.getElementById('error-message');

    const API_KEY = '040111dfddb0c2fe0774c6cb2b45a63a';

    getWeatherBtn.addEventListener('click', async () => {
        const city = cityInput.value.trim();
        if(!city) return;

            try {
              const weatherData =  await fetchWeatherData(city);
              displayWeatherData(weatherData);
            } catch (error) {
                showError();
            }
    })

    async function fetchWeatherData(city) {
       const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

       const response = await fetch(url);
       console.log(typeof response);    
       console.log("Response ", response);

       if(!response){
        throw new Error("City not found!")
        showError()
       }
       const data = await response.json();
       return data;
       
}

    function displayWeatherData(data) {
        console.log(data);
        const {name,main, weather} = data;
        cityNameDisplay.textContent = name;
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');

        temperatureDisplay.textContent = `Temperature: ${main.temp}`;
        descriptionDisplay.textContent = `Weather: ${weather[0].description}`;
    }

    function showError() {
        weatherInfo.classList.add('hidden'); 
        errorMessage.classList.remove('hidden')
    }

});