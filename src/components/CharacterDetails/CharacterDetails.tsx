import { Typography } from "@mui/material";
import { StyledBox, StyledContainer, StyledPaper } from "./styles";
import { ICharacterData } from "../../types/character";

interface IProps {
  character: ICharacterData;
}

const CharacterDetails = ({ character }: IProps) => {
  return (
    <StyledBox>
      <StyledPaper elevation={3}>
        <StyledContainer>
          <Typography variant="h3" fontSize={24}>{character.name}</Typography>
          <ul>
            {Object.entries(character).map(([dataKey, dataValue]) => {
              return (
                <li key={dataKey}>
                  <Typography>{`${dataKey}: ${dataValue}`}</Typography>
                </li>
              );
            })}
          </ul>
        </StyledContainer>
      </StyledPaper>
    </StyledBox>
  );
};
export default CharacterDetails;
