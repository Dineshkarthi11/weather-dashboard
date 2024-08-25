import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { CityList } from './components/CityList';
import { WeatherDetails } from './components/WeatherDetails';
import { store } from './redux/store';
import { GlobalStyles } from './styles/GlobalStyles';

const App: React.FC = () => {
    const [selectedCity, setSelectedCity] = useState<string | null>(null);

    return (
        <Provider store={store}>
            <GlobalStyles />
            <div>
                <CityList onSelectCity={setSelectedCity} />
                <div>
                    {selectedCity ? (
                        <WeatherDetails city={selectedCity} />
                    ) : (
                        <p>Select a city to view details</p>
                    )}
                </div>
            </div>
        </Provider>
    );
};

export default App;