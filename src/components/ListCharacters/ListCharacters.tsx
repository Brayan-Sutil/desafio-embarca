import { Pagination, Skeleton } from "@mui/material";
import Character from "../Character/Character";
import {
  StyledBox,
  StyledContainer,
  StyledPaper,
  StyledTypography,
} from "./styles";
import { useState, useEffect } from "react";
import { useApi } from "../../hook/useApi";

const ListCharacters = () => {
  const { characters, pages, listCharacter } = useApi();
  const [ page, setPage ] = useState(1);

  useEffect(() => {
    listCharacter(page);
  }, [page]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
    return (
      <StyledBox>
        <StyledPaper elevation={3}>
          <StyledContainer>
            <StyledTypography variant="h1">
              Star Wars Characters
            </StyledTypography>
            {characters.length === 0 ? (
              <Skeleton variant="rectangular" height={600} />
            ) : (
              characters.map((character) => <Character character={character} />)
            )}
          </StyledContainer>
          <StyledContainer>
            {pages ? (
              <Pagination count={pages} page={page} onChange={handleChange} />
            ) : (
              <Skeleton variant="rectangular" height={44}/>
            )}
          </StyledContainer>
        </StyledPaper>
      </StyledBox>
    );
}

export default ListCharacters