import { useState } from "react"
import { ICharacterData } from "../types/character";

const baseUrl = "https://swapi.dev/api/";

export const useApi = () => {
    const [ pages, setPages ] = useState<number>();
    const [ characters, setCharacters ] = useState<ICharacterData[]>([]);
    
    const listCharacter = async (page: number = 1) => {
        const url = `${baseUrl}people/?page=${page}`;
        setCharacters([])
        const response = await fetch(url);
        const data = await response.json();
        if( data.count && !pages ){
            const pagesNumber = Math.ceil(data.count / data.results.length);
            setPages(pagesNumber)
        }
        if( data.results ){
            setCharacters(data.results);
        }
    }

    return { characters, listCharacter, pages };
}