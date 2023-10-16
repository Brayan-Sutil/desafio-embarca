import { useCharacter } from "../context/CharacterContext";

const baseUrl = "https://swapi.dev/api/";

export const useApi = () => {
  const { setCharacters, setPages, pages } = useCharacter();

  const listCharacter = async (page: number = 1) => {
    try {
      const url = `${baseUrl}people/?page=${page}`;
      setCharacters([]);
      const response = await fetch(url);
      const data = await response.json();
      if (data.count && !pages) {
        const pagesNumber = Math.ceil(data.count / data.results.length);
        setPages(pagesNumber);
      }
      if (data.results) {
        setCharacters(data.results);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return { listCharacter, pages };
};
