import { Link } from "gatsby"
import React from "react"
import { StyledNav } from "./nav.styled"

const Nav = () => {
  return (
    <StyledNav>
      <h1>Hilary Armstrong</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </StyledNav>
  )
}

export default Nav
