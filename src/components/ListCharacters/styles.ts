import { Container, Paper, Box, Typography } from "@mui/material";
import styled from "styled-components";

export const StyleContainer = styled(Container)`
    display: flex;
    justify-content: center;
    padding: 32px !important;
    flex-direction: column;
`

export const StylePaper = styled(Paper)`
    min-height: 600px;
    height: 100%;
`

export const StyleBox = styled(Box)`
  width: 39.2%;
`;

export const StyleTypography = styled(Typography)`
    text-align: center;
`