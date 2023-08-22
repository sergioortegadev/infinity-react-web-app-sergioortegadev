import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <a href="https://sergioortega.com.ar" target="_blank">
          <img
            src="https://sergioortega.com.ar/assets/perfil.jpg"
            className="logo"
            alt="foto perfil"
          />
        </a> */}
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Sergio Ortega Dev</h1>
      <h3>Web en mantenimiento</h3>
    </>
  );
}

export default App;
