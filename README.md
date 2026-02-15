# Weather App

A simple browser-based weather app that fetches current weather data by city using the OpenWeather API.

## Features

- Search weather by city name
- Displays:
- Weather condition
- Temperature in Celsius
- Weather icon
- Basic error handling for empty input, missing API key, and failed API requests

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- OpenWeather API

## Project Structure

- `index.html` - App layout and script includes
- `style.css` - UI styles
- `script.js` - Weather fetch logic and rendering
- `config.example.js` - Example API key config
- `config.js` - Local API key config (should stay out of public repos if it contains secrets)

## Setup

1. Clone the repository:

```bash
git clone https://github.com/zahram456/Weather-App.git
cd Weather-App
```

2. Create or edit `config.js` in the project root:

```js
window.WEATHER_API_KEY = "YOUR_OPENWEATHER_API_KEY";
```

3. Open `index.html` in your browser.

## Usage

1. Enter a city name.
2. Click **Get Weather**.
3. View current weather details.

## API

- Endpoint used:
- `https://api.openweathermap.org/data/2.5/weather`
- Provider: OpenWeather
- Docs: https://openweathermap.org/current

## Notes

- The app requests data in metric units (`units=metric`).
- If the API key is missing, the app shows an on-screen error.

## License

This project is for learning and personal use.
