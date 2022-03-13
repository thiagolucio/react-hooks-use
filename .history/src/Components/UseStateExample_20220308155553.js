import React, { useState } from "react";
import "./UseStateExample.css";

function UseStateExample() {

  const [repositories, setRepositories] = useState([
    { id: 1, name: "repositorio 1" },
    { id: 2, name: "repositorio 2" },
    { id: 3, name: "repositorio 3" },
    { id: 4, name: "repositorio 4" },
  ]);

    function handleAddRepo() {
        let numName  = repositories.id++;
        console.log('reposi >> ', repositories.id)

        setRepositories([...repositories, { id: Math.random(), name: "repositorio" + numName}]);
    }

  return (
    <div className="container">
      <h1>Hello, world!</h1>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button className="buttonApp" onClick={handleAddRepo}>+ Add Repo</button>
    </div>
  );
}

export default UseStateExample;
