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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a efficitur augue. Nam dictum turpis ut venenatis pulvinar. 
                    Phasellus viverra eros fringilla orci feugiat tristique. Donec eu sem orci. Donec eget tristique purus, vel mollis lorem. 
                    Praesent non urna sit amet augue gravida bibendum sed consequat lectus. Integer nisl lacus, 
                    sodales in quam eget, maximus elementum dui. Donec condimentum malesuada sapien, 
                    in volutpat nunc suscipit nec. Proin sed iaculis orci,
                    vel sollicitudin neque. Aliquam ultricies accumsan orci non pretium.
                    Integer mi enim, malesuada hendrerit lacus ut, tempus auctor ligula.
                </p>

                <span>"Solo se que nada se"</span>
                <span>
                    - Erick Vergara
                </span>
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