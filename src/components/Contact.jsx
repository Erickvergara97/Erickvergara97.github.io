import React from "react";
import styled from 'styled-components'
import {colorPurple, colorWhite, colorSilver, colorBone, colorBlack} from '../assets/styles/abstracts/variables'


function Contact() {
    return (
        <ContactContainer>
            <h2>Contact </h2>
        </ContactContainer>
    )
}


export default Contact

const ContactContainer = styled.section`
    background-color: ${colorWhite};
`