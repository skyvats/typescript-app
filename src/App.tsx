import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import { MainComponent } from './main/components/MainComponent';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-cyan/theme.css";
//import "primereact/resources/themes/lara-dark-cyan/theme.css"
import 'primeflex/primeflex.css';

function App() {
  return (
    <PrimeReactProvider>
        <MainComponent/>
    </PrimeReactProvider>
);
}

export default App;
