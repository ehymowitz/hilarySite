import React from "react"
import { StyledContainer } from "./container.styled"

interface ContainerProps {
  children: JSX.Element
}

const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
