import React from "react";
import styled from 'styled-components'
import {colorPurple, colorWhite, colorSilver, colorBone, colorBlack} from '../assets/styles/abstracts/variables'
import {Link} from 'react-router-dom'

function Profile() {
    return (
        <AboutMe id="about">
            <div className="aboutContainer">
                <h2>My name is Erick Vergara</h2>
                <p>I'm a Frontend developer with knowledge in many languages such as React or JavaScript.
                    I have many soft skills such as ........
                </p>
                <p>
                    Industrial engineer graduated at Universidad del Norte. Analytical, committed and fast learner. High knowledge in web development and technical skills. Experienced and result oriented, great team worker and focus on results.
                </p>

                <span>"Faith it till you make it"</span>

                <Link to="/Pdf" target="_blank">
                    <button className="button primaryBtn">
                        Download CV
                    </button>
                </Link>
            </div>
        </AboutMe>
    )
}


export default Profile

const AboutMe = styled.section `
    background-color: ${colorPurple};
    color: ${colorWhite};
    padding-bottom: 14rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .aboutContainer{
        line-height: 1.5;
        margin: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 60%;
        h2{
            @media(min-width: 768px){
                font-size: 32px;
            }

        }
    }

    @media(min-width: 768px){
        align-items: center;
    }
`