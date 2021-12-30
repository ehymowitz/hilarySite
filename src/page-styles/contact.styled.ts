import styled from "styled-components"
import "@fontsource/fraunces/500.css" // Defaults to weight 400.

export const ContactLayout = styled.div`
  text-align: center;

  form {
    margin: 0 16em;
    margin-top: 2em;
    text-align: left;
    display: flex;
    flex-direction: column;

    input,
    textarea {
      font-family: Commissioner;
      margin-bottom: 2em;
      border: none;
      background-color: white;
      padding: 1em;
    }

    input,
    textarea::placeholder {
      font-family: Commissioner;
    }

    button {
      border: 2px solid black;
      padding: 1em 3em;
      margin: 0 auto;
      font-family: Commissioner;
      cursor: pointer;
      font-weight: bold;
    }
  }
`
