import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import "./UseStateExample.css";
import Locate from "./HookGeoLocate";

function UseEffectExample() {
  const [repositories, setRepositories] = useState([]);

  // no lugar do componentDidMount quando o component for montado
  useEffect(() => {
    async function fetchRepo() {
      const response = await fetch("https://api.github.com/users/thiagolucio/repos");
      const data = await response.json();
      setRepositories(data);
    }
    fetchRepo();
  }, []); // os colchetes vazios indicam que nao existem parametros/ estados para que seja necessario executar novamente


  useEffect(() => {
    async function filteredFavoritos() {
      const showNumberFavorites = document.getElementById('filtro_favorite');
      const filtered = repositories.filter(repo => repo.favorite);
      showNumberFavorites.innerHTML = `${filtered.length} favoritos`;
    }
    filteredFavoritos();
  }, [repositories]);


  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
      // verifica se o id do repositório é igual ao id passado por parâmetro e se for vai retornar 
      // todos os dados do repositório e adicionar uma opção favorite como true
      // no final, se nao for ele retornará o repositorio como estava antes da mudança
    });
    // ele vai agora atualizar o estado dos repositórios com ou sem o true de favoritos adicionado
    setRepositories(newRepositories);
  }

  return (
    <div className="container flex-column">
      <div className="top_page_info">
        <ul className="top_page_content">
          <li className="">
            <Locate />
          </li>
          <li className="button_top_page">
            <FcLike /> <span id="filtro_favorite"></span>
          </li>
          <li className="button_top_page">
            <FaGithub /> <span>Github</span>
          </li>
        </ul>
      </div>
      <div>
        <ul className="list_of_repos">
          {repositories.map((repo) => (
            <li key={repo.id} className="items_list_repos">
              {repo.name}
              <button
                onClick={() => handleFavorite(repo.id)}
                className='btn-round {repo.favorite? "jello-horizontal btn-like" : "btn-unlike"}' >
                {repo.favorite ? <FcLike /> : <FcLikePlaceholder />}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="row">
        <button className="button_pagination">Next</button>
      </div>
    </div>
  );
}

export default UseEffectExample;



// useEffect(() => {

  // async function fetchDataWithChildren() {
  //   try {
  //     const response = await fetch("https://api.github.com/users/thiagolucio/repos");
  //     const data = await response.json();
  //     setRepositories(data.children.map(it => it.data));
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }
  // fetchDataWithChildren();
// }, []);