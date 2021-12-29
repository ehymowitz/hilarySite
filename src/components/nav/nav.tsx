import { Link } from "gatsby"
import React from "react"
import { StyledNav } from "./nav.styled"

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </StyledNav>
  )
}

export default Nav
