import { Pagination } from "@mui/material";
import Character from "../Character/Character";
import {
  StyleBox,
  StyleContainer,
  StylePaper,
  StyleTypography,
  StyleStack
} from "./styles";
import { useState, useEffect } from "react";
import { useApi } from "../../hook/useApi";

const ListCharacters = () => {
  const { characters, pages, listCharacter } = useApi();
  const [ page, setPage ] = useState(1);

  useEffect(() => {
    listCharacter()
  },[]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
    return (
      <StyleBox>
        <StylePaper elevation={3}>
          <StyleContainer>
            <StyleTypography variant="h1">Star Wars Characters</StyleTypography>
            {characters.map((character) => (
              <Character character={character} />
            ))}
          </StyleContainer>
          <StyleStack spacing={2}>
            <Pagination count={pages} page={page} onChange={handleChange} />
          </StyleStack>
        </StylePaper>
      </StyleBox>
    );
}

export default ListCharacters