import styled, { createGlobalStyle } from "styled-components"
import "@fontsource/commissioner" // Defaults to weight 400.
import "@fontsource/fraunces" // Defaults to weight 400.

export const GlobalStyle = createGlobalStyle`

  body {
    font-family: "Commissioner";
    background-color: lightgrey;
    margin: 0;
  }

  h1, h2, h3 {
    font-family: "Fraunces";
  }

  a {
    color: black;
    text-decoration: none;
  }
  `

export const StyledLayout = styled.div``
