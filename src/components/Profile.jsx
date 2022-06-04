import React from "react";
import styled from 'styled-components'
import {colorPurple, colorWhite, colorSilver, colorBone, colorBlack} from '../assets/styles/abstracts/variables'


function Profile() {
    return (
        <AboutMe>
            <h2> About me </h2>
            <p>My name is Erick Vergara, I'm a Frontend developer with knowledge in many languages such as React or JavaScript.
                I have many soft skills such as ........
            </p>
            <button> Download CV</button>
        </AboutMe>
    )
}


export default Profile

const AboutMe = styled.section `
    background-color: ${colorBone};
    display: flex;
    flex-direction: column;

    @media(min-width: 768px){
        align-items: center;
    }
`