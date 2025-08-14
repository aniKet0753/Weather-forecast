export default function WeatherCard({ weather }) {
  return (
    <div
      style={{
        border: "1px solid #fe0000ff",
        padding: "15px",
        borderRadius: "10px",
        maxWidth: "300px",
        margin: "20px auto",
        backgroundColor: "#000000ff",
      }}
    >
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>
      <p>🌡 {weather.main.temp}°C</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>🌬 Wind Speed: {weather.wind.speed} m/s</p>
      <p>⛅ {weather.weather[0].description}</p>
    </div>
  );
}
