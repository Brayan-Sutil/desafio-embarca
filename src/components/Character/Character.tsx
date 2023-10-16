import { ICharacterData } from "../../types/character";
import { StyledPaper } from "./styles";
import { useCharacter } from "../../context/CharacterContext";

interface IProps {
  character: ICharacterData;
}

const Character = ({ character }: IProps) => {
  const { selectCharacter } = useCharacter();
  return (
    <StyledPaper
      variant="outlined"
      onClick={() => selectCharacter(character.url)}
    >
      {character.name}
    </StyledPaper>
  );
};

export default Character;
