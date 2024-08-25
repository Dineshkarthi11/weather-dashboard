import axios from 'axios';

const API_KEY = 'b71eb0270832a5baed16f0258eafbce2'; // Replace with your actual OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const fetchWeatherData = async (city: string) => {
  const response = await axios.get(`${BASE_URL}weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response.data;
};

export const fetchWeatherForecast = async (city: string) => {
  const response = await axios.get(`${BASE_URL}forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });
  return response.data;
};