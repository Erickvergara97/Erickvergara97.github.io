import React from "react";
import styled from 'styled-components'
import {colorPurple, colorWhite, colorSilver, colorBone, colorBlack} from '../assets/styles/abstracts/variables'


function Footer() {
    return (
        <FooterContainer>
            Footer 
        </FooterContainer>
    )
}


export default Footer

const FooterContainer = styled.footer`
    background-color: ${colorSilver};
    color: ${colorBone};
    display: flex;
    justify-content: center;
`