import React from "react";
import styled from 'styled-components'
import {colorPurple, colorWhite, colorSilver, colorBone, colorBlack} from '../assets/styles/abstracts/variables'


function Footer() {
    return (
        <FooterContainer>
            <p>© 2022 Erick Vergara</p> 
        </FooterContainer>
    )
}


export default Footer

const FooterContainer = styled.footer`
    padding: 2rem;
    background-color: ${colorBone};
    color: ${colorSilver};
    display: flex;
    justify-content: center;
`