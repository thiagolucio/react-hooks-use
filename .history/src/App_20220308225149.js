import React from "react";
import "./App.css";

import UseStateExample from "./Components/UseStateExample";
import UseEffectExample from "./Components/UseEffectExample";

function App() {
  return (
    <div className="container">
      <div className="flex-column">
        <UseStateExample />
      </div>
      <UseEffectExample />
    </div>
  );
}

export default App;
