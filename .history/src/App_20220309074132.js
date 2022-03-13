import React from "react";
import "./App.css";

import UseStateExample from "./Components/UseStateExample";
import UseEffectExample from "./Components/UseEffectExample";
import Toggle from "./Components/Toggle";

function App() {
  return (
    <>
      <Toggle/>
        <UseEffectExample />
        <hr/>
        <UseStateExample />
    </>
  );
}

export default App;
