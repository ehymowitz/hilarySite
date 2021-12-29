import React from "react"
import Helmet from "react-helmet"
import Container from "../container/container"
import Footer from "../footer/footer"
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
        <meta name="description" content="Hilary Armstrong's Web Portfolio!" />
        <meta property="og:title" content="Hilary Armstrong" />
        <meta
          property="og:description"
          content="Hilary Armstrong's Web Portfolio!"
        />
        <meta property="og:image" content="/webImage.png" />
        <meta property="og:url" content="https://hilarya.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Nav />
      <Container>{children}</Container>
      <Footer />
    </StyledLayout>
  )
}
