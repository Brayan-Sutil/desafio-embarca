import {
  Container,
  Paper,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
    display: flex;
    justify-content: center;
    padding: 32px !important;
    flex-direction: column;
`

export const StyledPaper = styled(Paper)`
    min-height: 600px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`

export const StyledBox = styled(Box)`
  width: 39.2%;
`;

export const StyledTypography = styled(Typography)`
    text-align: center;
    margin-bottom: 32px !important;
    font-size: 24px !important;
`

export const StyledStack = styled(Stack)`
    margin-bottom: 32px;
    width: 100%;
    padding: 0 32px;
`