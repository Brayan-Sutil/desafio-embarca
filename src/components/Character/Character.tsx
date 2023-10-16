import { Typography } from "@mui/material";
import { ICharacterData } from "../../types/character";
import { StyledPaper } from "./styles";

interface IProps {
  character: ICharacterData
}

const Character = ({ character }: IProps) => {
  return (
    <StyledPaper elevation={3} >
      <Typography>{character.name}</Typography>
    </StyledPaper>
  );
};

export default Character;
