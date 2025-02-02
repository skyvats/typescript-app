import React from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { MainComponent } from './main/components/MainComponent';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import './App.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <PrimeReactProvider value={{ ripple: true }}>
      <MainComponent />
    </PrimeReactProvider>
  );
}

export default App;
