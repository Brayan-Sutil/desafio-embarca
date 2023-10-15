import Characters from "../Characters/Characters";
import {
  StyleBox,
  StyleContainer,
  StylePaper,
  StyleTypography,
} from "./styles";

const CharactersDetails = () => {
    return (
      <StyleBox>
        <StylePaper elevation={3}>
          <StyleContainer >
            <StyleTypography>
                Star Wars Characters
            </StyleTypography>
            <Characters />
          </StyleContainer>
        </StylePaper>
      </StyleBox>
    );
}

export default CharactersDetails