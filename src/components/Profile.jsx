import React from "react";
import styled from 'styled-components'
import {colorPurple, colorWhite, colorSilver, colorBone, colorBlack} from '../assets/styles/abstracts/variables'


function Profile() {
    return (
        <AboutMe>
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
                <button> Download CV</button>
            </div>
        </AboutMe>
    )
}


export default Profile

const AboutMe = styled.section `
    background-color: ${colorPurple};
    color: ${colorWhite};
    padding-top: 6rem;
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

        p{
            text-align: center;

            @media(min-width: 768px){
                font-size: 20px;
            }
        }
    }


    button{
        background-color: ${colorPurple};
        color: ${colorBone};
        width: 8rem;
        align-self: center;
        margin: 1rem;

        border: 3px solid;
        border-radius: 5px;
        padding: 5px;
    }

    @media(min-width: 768px){
        align-items: center;
    }
`