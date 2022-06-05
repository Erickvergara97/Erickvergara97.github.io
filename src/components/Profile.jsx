import React from "react";
import styled from 'styled-components'
import {colorPurple, colorWhite, colorSilver, colorBone, colorBlack} from '../assets/styles/abstracts/variables'


function Profile() {
    return (
        <AboutMe>
            <div className="aboutContainer">
                <h3>My name is Erick Vergara</h3>
                <p>I'm a Frontend developer with knowledge in many languages such as React or JavaScript.
                    I have many soft skills such as ........
                </p>
                <button> Download CV</button>
            </div>
        </AboutMe>
    )
}


export default Profile

const AboutMe = styled.section `
    background-color: ${colorPurple};
    color: ${colorBone};
    padding-top: 2rem;
    padding-bottom: 14rem;

        display: flex;
        flex-direction: column;
        align-items: center;

    .aboutContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 60%;

        p{
            text-align: center;
        }
    }


    button{
        background-color: ${colorSilver};
        color: ${colorBone};
        width: 8rem;
        align-self: center;
        margin: 1rem;
    }

    @media(min-width: 768px){
        align-items: center;
    }
`