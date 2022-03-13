import React, { useState } from "react";
import "./UseStateExample.css";

function UseEffectExample() {

  const [repositories, setRepositories] = useState([]);

    function handleAddRepo() {
      
        let numName  = repositories.length + 1;

        setRepositories([...repositories, { id: Math.random(), name: "repositorio " + numName}]);
    }

  return (
    <div className="container">
      <h2>Hook <span className="badge-title">useEffect</span></h2>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul> 
      <button className="buttonApp" onClick={handleAddRepo}>+ Add Repo</button>
    </div>
  );
}

export default UseEffectExample;