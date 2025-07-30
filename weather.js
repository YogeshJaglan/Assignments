async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}"; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        const result = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Weather:</strong> ${data.weather[0].main}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;

        document.getElementById("weatherResult").innerHTML = result;
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = `<p>Error: ${error.message}</p>`;
    }
}