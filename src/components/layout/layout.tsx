import React from "react"
import Helmet from "react-helmet"
import Container from "../container/container"
import Nav from "../nav/nav"
import { GlobalStyle, StyledLayout } from "./layout.styled"

interface Props {
  children: JSX.Element
}

export default function Layout({ children }: Props) {
  return (
    <StyledLayout>
      <GlobalStyle />
      <Helmet defer={false}>
        <title>Hilary Armstrong</title>
        <meta name="description" content="Website Description" />
        <meta property="og:title" content="Website Title" />
        <meta property="og:description" content="Website Description" />
        <meta property="og:image" content="/webImage.png" />
        <meta property="og:url" content="Website Url" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Nav />
      <Container>{children}</Container>
    </StyledLayout>
  )
}
