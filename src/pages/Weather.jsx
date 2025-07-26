import { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "../styles/Weather.module.css";
import Header from "../components/Header";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSearch = async () => {
    if (!city) return;

    setLoading(true);
    setError(null);
    setWeatherData(null);

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
      const res = await axios.get(url);
      setWeatherData(res.data);
    } catch (err) {
      setError("City not found or error fetching weather.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.weatherContainer}>
        <h2 className={styles.title}>Check Current Weather 🌦️</h2>

        <div className={styles.searchContainer}>
          <input
            ref={inputRef}
            type="text"
            value={city}
            placeholder="Enter city name"
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className={styles.input}
          />
          <button onClick={handleSearch} className={styles.button}>
            Get Weather
          </button>
        </div>

        {loading && <p className={styles.loading}>Loading...</p>}

        {error && <p className={styles.error}>{error}</p>}

        {weatherData && (
          <div className={styles.result}>
            <h3>
              {weatherData.location.name}, {weatherData.location.country}
            </h3>
            <p>🌡️ Temperature: {weatherData.current.temp_c}°C</p>
            <p>Feels Like: {weatherData.current.feelslike_c}°C</p>
            <p>💧 Humidity: {weatherData.current.humidity}%</p>
            <p>🌬️ Wind: {weatherData.current.wind_kph} kph</p>
            <p>Condition: {weatherData.current.condition.text}</p>
            <img
              src={weatherData.current.condition.icon}
              alt="weather icon"
              className={styles.icon}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
