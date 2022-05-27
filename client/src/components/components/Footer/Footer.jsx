import React from "react"
import FontAwesome from "react-fontawesome"
import {StyledFooter} from "./StyledFooter"

const Footer = () => (
    <StyledFooter>
        <div className="footer-content">
            <a href = "https://github.com/anu106">
                Copyright @movienext
            </a>
            <a href="https://github.com/anu106">
                <FontAwesome  className="fa fa-github" name="clock-o" />
            </a>
        </div>
    </StyledFooter>
)

export default Footer