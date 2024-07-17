const container = document.querySelector(".weather-container")
const clock = document.querySelector(".clock-content");
const inputSearch = document.querySelector(".input-search");
const button = document.querySelector("#button");
const alert = document.querySelector("#alert");
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const detail1 = document.getElementById('detail1');
const detail2 = document.getElementById('detail2');
const detail3 = document.getElementById('detail3');
const line = document.getElementById('line');
const locationIcon = document.querySelector('.weather-icon');
const iconurl = document.querySelector('.iconurl')
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'b34b13dabec2a6c9fe2e9e63d69d55f7'
const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

//! by enter
inputSearch.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        // console.log(searchInputBox.value);
        const location = inputSearch.value;
        if (location) {
            fetchWeather(location);
            alert.style.display = "none";
            container.style.height = "65%"
        } else {
            alert.style.display = "block";
    
        }
        
    }
})


//! by click
button.addEventListener("click", () => {
    const location = inputSearch.value;
    if (location) {
        fetchWeather(location);
        alert.style.display = "none";
        container.style.height = "65%"
    } else {
        alert.style.display = "block";

    }
});




function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            const { icon } = data.weather[0];
            locationIcon.innerHTML = `<img src="icons/${icon}.png">`
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].main;
            detail1.textContent = `Feels like ${data.main.feels_like}°C`
            detail2.textContent = `Humidity ${data.main.humidity}%`
            detail3.textContent = `Humidity ${data.main.humidity}%`
            changeBg(data.weather[0].main);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function changeBg(status) {
    document.body.style.backgroundImage.transition = "0.4s";
    if (status === 'Clouds') {
        document.body.style.backgroundImage = 'url(img/clouds.jpg)';
        }
        else if (status === 'Rain') {
            document.body.style.backgroundImage = 'url(img/rainy.jpg)';
        }
        else if (status === 'Clear') {
            document.body.style.backgroundImage = 'url(img/clear.jpg)';
        }
        else if (status === 'Snow') {
            document.body.style.backgroundImage = 'url(img/snow.jpg)';
        }
        else if (status === 'Sunny') {
            document.body.style.backgroundImage = 'url(img/sunny.jpg)';
        } else if (status === 'Thunderstorm') {
            document.body.style.backgroundImage = 'url(img/thunderstorm.jpg)';
        } else if (status === 'Drizzle') {
            document.body.style.backgroundImage = 'url(img/rainy.jpg)';
        } else if (status === 'Mist' || status === 'Haze' || status === 'Fog') {
            document.body.style.backgroundImage = 'url(img/mist.jpg)';
        }
    
        else {
            document.body.style.backgroundImage = 'url(img/sky.jpg)';
        }

}

