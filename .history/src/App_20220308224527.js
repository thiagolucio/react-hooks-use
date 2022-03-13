import React from "react";
import './App.css';

import UseStateExample from "./Components/UseStateExample";
import UseEffectExample from "./Components/UseEffectExample";



function App() {
  return (
    <div className="container">
    <div className="cinquenta">
      <UseStateExample />    
    </div>
    <div className="cinquenta">
      <UseEffectExample/>     
    </div>
    </div>
  );
}

export default App;
