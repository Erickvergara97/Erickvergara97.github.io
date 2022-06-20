import React from "react";
import styled from 'styled-components'
import {colorPurple, colorWhite} from '../assets/styles/abstracts/variables'

function Profile() {
    return (
        <AboutMe id="about">
            <div className="aboutContainer">
                <h2>My name is Erick Vergara</h2>
                <p>I am a Frontend developer with knowledge in many languages such as React and JavaScript. I have experience working with Javascript, React, CSS, SASS, and many others Frontend tools. One of the main things that characterizes me is my fast learning and being a good teammate, my journey started one year ago since I moved to another city and met a friend who is a Senior Frontend developer, so he started teaching me and then I kept studying by my own, I really love to code so I think that this helped me to learn this in a short time period, I love making webpages that helps other people to have a good experience in there. I am always seeking to keep improving my skills looking for new tools. It hasn't been an easy journey but what makes me continue trusting the process and myself is the next quote:
                </p>

                <span>"Fake it till you make it"</span>

                <a href="./Pdf" target="_blank">
                    <button className="button primaryBtn">
                        Download CV
                    </button>
                </a>
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
        line-height: 2.5;
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