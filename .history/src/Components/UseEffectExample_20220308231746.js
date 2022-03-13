import React, { useEffect, useState } from "react";
import "./UseStateExample.css";

function UseEffectExample() {

  const [repositories, setRepositories] = useState([]);

  // no lugar do componentDidMount quando o component for montado
  useEffect(async () => {
    const response = await fetch("https://api.github.com/users/thiagolucio/repos");
    const data = await response.json();
    
  }, [repositories, setRepositories])


  return (
    <>
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