import React from "react";
import './App.css';

import UseStateExample from "./Components/UseStateExample";
import UseEffectExample from "./Components/UseEffectExample";



function App() {
  return (
    <>
    <div className="Cinquenta">
      <UseStateExample />    
    </div>
    <div className="Cinquenta">
      <UseEffectExample/>     
    </div>
    </>
  );
}

export default App;
