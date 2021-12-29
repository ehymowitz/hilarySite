import { Link } from "gatsby"
import React from "react"
import { StyledNav } from "./nav.styled"

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">
        <h2>Hilary Armstrong</h2>
      </Link>
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
