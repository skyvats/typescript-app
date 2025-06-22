import React from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { MainComponent } from './main/components/MainComponent';
import { Provider } from 'react-redux';
import { store } from './store/store'; // make sure the path matches your structure

import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <PrimeReactProvider value={{ ripple: true }}>
                <MainComponent />
            </PrimeReactProvider>
        </Provider>
    );
}

export default App;
