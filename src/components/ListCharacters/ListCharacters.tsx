import { Pagination } from "@mui/material";
import Characters from "../Characters/Characters";
import {
  StyleBox,
  StyleContainer,
  StylePaper,
  StyleTypography,
  StyleStack
} from "./styles";
import { useState } from "react";

const ListCharacters = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
    return (
      <StyleBox>
        <StylePaper elevation={3}>
          <StyleContainer>
            <StyleTypography variant="h1">Star Wars Characters</StyleTypography>
            <Characters />
          </StyleContainer>
          <StyleStack spacing={2}>
            <Pagination count={15} page={page} onChange={handleChange} />
          </StyleStack>
        </StylePaper>
      </StyleBox>
    );
}

export default ListCharacters