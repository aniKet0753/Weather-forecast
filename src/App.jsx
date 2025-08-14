import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import WeatherCard from "./weathercard";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<Default></Default>}></Route>
        <Route path="/about" element={<About></About>} />
      </Routes>
    </HashRouter>
  );
}

function Default() {
  return (
    <div>
      <p
        style={{
          color: "red",
          fontSize: 40,
          textAlign: "center",
          paddingTop: 140,
        }}
      >
        404<br></br> something wents wrong
      </p>
    </div>
  );
}
function Home() {
  return (
    <div>
      <Headers />
      <Content />
    </div>
  );
}
function Content() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "6701d1500e230c1a3ffdbb6312e7cf99";
  async function fetchWeather() {
    try {
      setError("");
      setWeather(null);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ color: "white" }}>🌦️Weather forecast</h1>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: 5, borderRadius: 10 }}
      />
      <button
        style={{ padding: 4, borderRadius: 6, marginLeft: 10 }}
        onClick={fetchWeather}
      >
        Search
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
function Headers() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: 10,
        background: "red",
        textAlign: "center",
        paddingTop: 20,
        position: "sticky",
        borderRadius: 20,
        top: 0,
        color:"black",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        padding: "0.8rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        transition: "all 0.3s ease",
      }}
    >
      <span style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/016/131/142/original/weather-icon-in-comic-style-sun-cloud-and-rain-cartoon-illustration-on-white-isolated-background-meteorology-splash-effect-sign-business-concept-vector.jpg"
          style={{
            height: 20,
            weidth: 20,
            marginRight: 6,
            borderRadius: 4,
            cursor: "pointer",
          }}
        />
        Home
      </span>
      <span
        style={{ paddingRight: 20, cursor: "pointer" }}
        onClick={() => navigate("/about")}
      >
        About
      </span>
    </div>
  );
}
function About() {
  return (
    <div style={{ textAlign: "center", paddingTop: 150 }}>
      ! Hey there this is me Aniket And i build this app from scratch every
      styling and detailing !<p style={{ color: "red" }}>About this app</p>
      <p style={{ color: "rgba(5, 255, 238, 1)" }}>
        weather webpage lets you displayt your current location weather
      </p>
      <p style={{ color: "red", fontSize: 11 }}>14/08/2025</p>
    </div>
  );
}

export default App;
