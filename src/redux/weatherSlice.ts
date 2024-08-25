import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface WeatherState {
    cities: string[];
    weatherData: { [key: string]: any };
    error: string | null;
}

const initialState: WeatherState = {
    cities: [],
    weatherData: {},
    error: null,
};

// Define the fetchWeatherData action using createAsyncThunk
export const fetchWeatherData = createAsyncThunk(
    'weather/fetchWeatherData',
    async (city: string, { rejectWithValue }) => {
        try {
            const API_KEY = 'b71eb0270832a5baed16f0258eafbce2';
            const currentWeatherResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            const forecastResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
            );

            return {
                city,
                current: currentWeatherResponse.data,
                forecast: forecastResponse.data.list.slice(0, 5), // Get first 5 items
            };
        } catch (error) {
            return rejectWithValue('Failed to fetch weather data');
        }
    }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        addCity: (state, action) => {
            state.cities.push(action.payload);
        },
        removeCity: (state, action) => {
            state.cities = state.cities.filter(city => city !== action.payload);
            delete state.weatherData[action.payload]; // Also remove weather data
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
            state.weatherData[action.payload.city] = {
                current: action.payload.current,
                forecast: action.payload.forecast,
            };
            state.error = null;
        });
        builder.addCase(fetchWeatherData.rejected, (state, action) => {
            state.error = action.payload as string;
        });
    },
});

export const { addCity, removeCity } = weatherSlice.actions;
export default weatherSlice.reducer;