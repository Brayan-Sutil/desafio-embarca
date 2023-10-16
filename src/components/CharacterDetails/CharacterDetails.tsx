import { Typography, Skeleton } from "@mui/material";
import { StyledBox, StyledContainer, StyledPaper } from "./styles";
import { useCharacter } from "../../context/CharacterContext";
import { useCharacterData } from "../../hook/useCharacterData";
import { useState, useMemo, useEffect } from "react";
import CharacterData from "../CharacterData/CharacterData";

const CharacterDetails = () => {
  const { character } = useCharacter();
  const { getCharacterData } = useCharacterData();
  const [homeWorld, setHomeWorld] = useState();

  const renderHomeWorld = useMemo(() => {
    if (homeWorld) {
      return (
        <li>
          <Typography>{`homeworld: ${homeWorld}`}</Typography>
        </li>
      );
    }
    return <Skeleton />;
  }, [homeWorld]);

  useEffect(() => {
    if (!character) {
      return;
    }
    setHomeWorld(undefined);
    if (character?.homeworld.length > 0) {
      getCharacterData(character.homeworld).then((res) => {
        setHomeWorld(res.name);
      });
    }
  }, [character]);

  if (!character) {
    return <></>;
  }

  const clearCharacter = Object.entries({
    ...character,
    homeworld: "",
  }).slice(0, -3);

  return (
    <StyledBox>
      <StyledPaper elevation={3}>
        <StyledContainer>
          <Typography variant="h3" fontSize={24}>
            {character.name}
          </Typography>
          <ul>
            {clearCharacter.map(([dataKey, dataValue]) => {
              return dataValue.length > 0 ? (
                <CharacterData key={dataKey} label={dataKey} value={dataValue}/>
              ) : (
                <></>
              );
            })}
            {renderHomeWorld}
          </ul>
        </StyledContainer>
      </StyledPaper>
    </StyledBox>
  );
};
export default CharacterDetails;
