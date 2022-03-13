import React, { useEffect, useState } from "react";
import {FaGithub } from "react-icons/fa";
import "./UseEffectAnotherExample.css";

function UseEffectAnotherExample() {
  const [userData, setUserData] = useState([]);


  useEffect(() => {
    async function fetchRepoUser() {
      const response = await fetch("https://api.github.com/users/thiagolucio");
      const data = await response.json();
      setUserData(data);
    }
    fetchRepoUser();
  }, []);  

  return (
        <>
          <div className="avatar">
            <img src={userData.avatar_url} className="avatar" title="Avatar" alt="Avatar" />
            <div className="badge-avatar" title="Number of repositories"><span>{userData.public_repos}</span></div>
            <div className="title_avatar">{userData.login}</div>
          </div>
          <div className="menu">
            <ul>
              <li><a href={userData.html_url} title="Respository URL"><FaGithub/></a></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>        
        </>        
  );
}

export default UseEffectAnotherExample;