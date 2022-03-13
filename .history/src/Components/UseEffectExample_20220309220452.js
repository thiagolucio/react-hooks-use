import React, { useEffect, useState } from "react";
import {FcLike, FcLikePlaceholder } from "react-icons/fc";
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
      return repo.id ===  id ? {...repo, favorite: true} : repo;
      // verifica se o id do repositório é igual ao id passado por parâmetro e se for vai retornar 
      // todos os dados do repositório e adicionar uma opção favorite como true
      // no final, se nao for ele retornará o repositorio como estava antes da mudança
    });
    // ele vai agora atualizar o estado dos repositórios com ou sem o true de favoritos adicionado
    setRepositories(newRepositories);
  }

  return (
    <>
      <h2>
        Repositório <span className="badge-title">Thiago Lúcio</span>
      </h2>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            {repo.name}
            <button 
                onClick={setRepositories(repo.id)}
                className={repo.favorite? "btn-round btn-like" : "btn-round btn-unlike"} >
                {repo.favorite? <FcLike/> : <FcLikePlaceholder/>}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UseEffectExample;
