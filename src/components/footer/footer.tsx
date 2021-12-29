import {
  faImdb,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { StyledFooter } from "./footer.styled"

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <a
          href="https://www.imdb.com/name/nm11332858/"
          target="_blank"
          rel="noopener"
        >
          <FontAwesomeIcon icon={faImdb} />
        </a>
        <a href="" target="_blank" rel="noopener">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a
          href="https://www.instagram.com/hilary__armstrong/"
          target="_blank"
          rel="noopener"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </StyledFooter>
  )
}

export default Footer
