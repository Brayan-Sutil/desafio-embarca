
export const useCharacterData = () => {
  const getCharacterData = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  return { getCharacterData };
};
