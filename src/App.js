import React from "react";
import "./App.css";

// import UseStateExample from "./Components/UseStateExample";
import UseEffectExample from "./Components/UseEffectExample";
import Toggle from "./Components/Toggle";

function App() {
  return (
    <div className="container flex-row">
      <div>
        <Toggle />
        <UseEffectExample />
      </div>
    </div>
  );
}

export default App;
