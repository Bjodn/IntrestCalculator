import React from 'react';
import './App.css';
import './combineWithJs.ts';
import {CalculatorSwitch} from "./Components/CalculatorSwitch/CalculatorSwitch";
import {CalculatorContainer} from "./Components/CalculatorContainer/CalculatorContainer";




function App() {
  return (
    <div className="App">
      <header className="App-header">
          <CalculatorSwitch />
      </header>
        <div>
            <h1>Container</h1>
            <CalculatorContainer />
            </div>
        </div>
  );
}

export default App;
