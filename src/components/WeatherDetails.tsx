import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

interface WeatherDetailsProps {
    city: string;
}

export const WeatherDetails: React.FC<WeatherDetailsProps> = ({ city }) => {
    const weatherData = useSelector((state: RootState) => state.weather.weatherData[city]);

    if (!weatherData) {
        return <div>Loading detailed information...</div>;
    }

    const { current, forecast } = weatherData;
    const { temp, feels_like, humidity } = current.main;
    const { speed: windSpeed } = current.wind;
    const { sunrise, sunset } = current.sys;

    return (
        <div className="weather-details">
            <h2>Weather Details for {city}</h2>
            <p>Current Temperature: {temp}°C</p>
            <p>Feels Like: {feels_like}°C</p>
            <p>Humidity: {humidity}%</p>
            <p>Wind Speed: {windSpeed} m/s</p>
            <p>Sunrise: {new Date(sunrise * 1000).toLocaleTimeString()}</p>
            <p>Sunset: {new Date(sunset * 1000).toLocaleTimeString()}</p>

            <h3>5-Day Forecast:</h3>
            <ul>
                {forecast.map((day: any, index: number) => (
                    <li key={index}>
                        <p>Date: {new Date(day.dt * 1000).toLocaleDateString()}</p>
                        <p>Temperature: {day.main.temp}°C</p>
                        <p>Condition: {day.weather[0].description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};