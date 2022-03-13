import React, { useEffect, useState } from "react";
import "./UseStateExample.css";

function UseEffectExample() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/thiagolucio/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  })


  return (
    <>
    <hr/>
      <h2>Hook <span className="badge-title">useEffect</span></h2>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul> 
    </>
  );
}

export default UseEffectExample;