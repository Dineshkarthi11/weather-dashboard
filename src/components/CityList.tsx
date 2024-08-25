import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { addCity, removeCity, fetchWeatherData } from '../redux/weatherSlice';

export const CityList: React.FC<{ onSelectCity: (city: string) => void }> = ({ onSelectCity }) => {
    const [city, setCity] = useState('');
    const cities = useSelector((state: RootState) => state.weather.cities);
    const weatherData = useSelector((state: RootState) => state.weather.weatherData);
    const dispatch: AppDispatch = useDispatch();

    const handleAddCity = () => {
        if (city.trim()) {
            dispatch(addCity(city));
            dispatch(fetchWeatherData(city));
            setCity('');
        }
    };

    return (
        <div>
            <h2>City List</h2>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Add city..."
            />
            <button onClick={handleAddCity}>Add City</button>
            <ul>
                {cities.map((city) => (
                    <li key={city} onClick={() => onSelectCity(city)} style={{ cursor: 'pointer' }}>
                        <h3>{city}</h3>
                        {weatherData[city] ? (
                            <div>
                                <p>Temperature: {weatherData[city].current.main.temp}°C</p>
                                <p>Feels Like: {weatherData[city].current.main.feels_like}°C</p>
                                <p>Humidity: {weatherData[city].current.main.humidity}%</p>
                                <p>Wind Speed: {weatherData[city].current.wind.speed} m/s</p>
                                <p>Sunrise: {new Date(weatherData[city].current.sys.sunrise * 1000).toLocaleTimeString()}</p>
                                <p>Sunset: {new Date(weatherData[city].current.sys.sunset * 1000).toLocaleTimeString()}</p>
                            </div>
                        ) : (
                            <p>Loading...</p>
                        )}
                        <button onClick={() => dispatch(removeCity(city))}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};