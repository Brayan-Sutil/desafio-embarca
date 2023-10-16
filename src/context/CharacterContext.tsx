import { createContext, useContext } from "react";
import { ICharacterData } from "../types/character";

export interface IContextProps {
  character?: ICharacterData;
  selectCharacter: (url: string) => void;
  pages?: number;
  setPages: (pages: number) => void;
  characters: ICharacterData[];
  setCharacters: (characters: ICharacterData[]) => void;
}

const CharacterContext = createContext<IContextProps | undefined>(undefined);

export function useCharacter() {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error("useCharacter deve ser usado dentro de um CharacterProvider");
  }
  return context;
}

export default CharacterContext;
