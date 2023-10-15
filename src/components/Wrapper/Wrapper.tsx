import ListCharacters from "../ListCharacters/ListCharacters";
import CharacterDetails from "../CharacterDetails/CharacterDetails";
import { characterData } from "../../mock/characterData";
import { StyledBox } from "./styles";

const Wrapper = () => {
  return (
    <StyledBox>
      <ListCharacters />
      <CharacterDetails character={characterData} />
    </StyledBox>
  );
};

export default Wrapper;
