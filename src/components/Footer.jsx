import React from "react";
import styled from 'styled-components'
import {colorSilver, colorBone} from '../assets/styles/abstracts/variables'


function Footer() {
    const d = new Date();
    const year = d.getFullYear();

    return (
        <FooterContainer>
            <p>© {year} Erick Vergara</p> 
        </FooterContainer>
    )
}


export default Footer

const FooterContainer = styled.footer`
    padding: 2rem;
    color: ${colorSilver};
    display: flex;
    justify-content: center;
`