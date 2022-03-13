import React, { useState } from "react";
import "./UseStateExample.css";

function UseEffectExample() {

  const [repositories, setRepositories] = useState([]);


  return (
    <div className="container">
      <h2>Hook <span className="badge-title">useEffect</span></h2>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul> 
    </div>
  );
}

export default UseEffectExample;