import React, { useEffect, useState } from "react";
import "./UseStateExample.css";

function UseEffectExample() {
  const [repositories, setRepositories] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // no lugar do componentDidMount quando o component for montado
  useEffect(() => {
    async function fetchRepo() {
      const response = await fetch("https://api.github.com/users/thiagolucio/repos");
      const data = await response.json();
      setRepositories(data);
    }

    // async function fetchDataWithChildren() {
    //   try {
    //     const response = await fetch("https://api.github.com/users/thiagolucio/repos");
    //     const data = await response.json();
    //     setRepositories(data.children.map(it => it.data));
    //   } catch (e) {
    //     console.error(e);
    //   }      
    // }

    fetchRepo();
    // fetchDataWithChildren();
  }, []);
  //os colchetes acima indica que ele deve ser executado somente uma vez, quando o componente for montado porque
  // ele não tem nenhum parâmetro pra se basear para ser executado novamente

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      // verifica se o id do repositório é igual ao id passado por parâmetro e se for vai retornar 
      // todos os dados do repositório e adicionar uma opção favorite como true
      // no final, se nao for ele retornará o repositorio como estava antes da mudança
      return repo.id ===  id ? {...repo, favorite: true} : repo;
    });
    setRepositories(newRepositories);
  }

  return (
    <>
      <h2>
        Hook <span className="badge-title">useEffect</span>
      </h2>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            {repo.name}
            <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UseEffectExample;
