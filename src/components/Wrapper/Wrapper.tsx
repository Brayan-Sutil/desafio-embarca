import ListCharacters from "../ListCharacters/ListCharacters";
import CharacterDetails from "../CharacterDetails/CharacterDetails";
import { StyledBox } from "./styles";

const Wrapper = () => {
  return (
    <StyledBox>
      <ListCharacters />
      <CharacterDetails/>
    </StyledBox>
  );
};

export default Wrapper;
