import { ICharacterData } from "../types/character";
import CharacterContext from "./CharacterContext";
import { useState, ReactNode } from "react";

interface ICharacterProviderProps {
  children: ReactNode;
}

export const CharacterProvider = ({ children }: ICharacterProviderProps) => {
  const [character, setCharacter] = useState<ICharacterData>();
  const [characters, setCharacters] = useState<ICharacterData[]>([]);
  const [pages, setPages] = useState<number>();

  const selectCharacter = (url: string) => {
    const currentCharacter = characters.find((item) => item.url === url);
    setCharacter(currentCharacter);
  };

  return (
    <CharacterContext.Provider
      value={{
        character,
        selectCharacter,
        characters,
        setCharacters,
        pages,
        setPages,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
