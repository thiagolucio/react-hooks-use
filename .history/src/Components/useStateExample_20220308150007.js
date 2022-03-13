import React, {useState} from "react";

export default function useStateExample() {

    const[repositories, setRepositories] = useState([
        {id: 1, name: 'repositorio 1' },
        {id: 2, name: 'repositorio 2' },
        {id: 3, name: 'repositorio 3' },
        {id: 4, name: 'repositorio 4' },
    ]);


  return <></>
}
