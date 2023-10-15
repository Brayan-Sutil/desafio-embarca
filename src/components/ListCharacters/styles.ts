import { Container, Paper, Box, Typography } from "@mui/material";
import styled from "styled-components";

export const StyleContainer = styled(Container)`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const StylePaper = styled(Paper)`
    min-height: 600px;
`

export const StyleBox = styled(Box)`
  width: 31.2%;
`;

export const StyleTypography = styled(Typography)`
    text-align: center;
    padding: 32px;
`