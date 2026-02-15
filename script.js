// Keep API keys out of source control. Set this from a local, untracked script if needed.
const API_KEY = window.WEATHER_API_KEY || "";

async function getWeather() {
    const cityInput = document.getElementById("city");
    const weatherDiv = document.getElementById("weather");
    const city = cityInput.value.trim();

    if (!city) {
        weatherDiv.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    if (!API_KEY) {
        weatherDiv.innerHTML = "<p style=\"color:red;\">Missing API key. Set <code>window.WEATHER_API_KEY</code>.</p>";
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();

        if (!response.ok) {
            const message = data?.message ? `Error: ${data.message}` : `Request failed (${response.status})`;
            throw new Error(message);
        }

        weatherDiv.innerHTML = `
            <h3>${data.name}</h3>
            <img
                src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
                alt="${data.weather[0].description} icon"
            >
            <p><b>${data.weather[0].main}</b></p>
            <p>🌡️ ${data.main.temp} °C</p>
        `;
    } catch (error) {
        weatherDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}
