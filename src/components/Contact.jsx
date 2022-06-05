import React from "react";
import styled from 'styled-components'
import {colorPurple, colorWhite, colorSilver, colorBone, colorBlack} from '../assets/styles/abstracts/variables'


function Contact() {
    return (
        <ContactContainer>
            <h2>Contact </h2>
            <div className="box">
                <div className="miniBox">
                    <p>Gmail</p>
                </div>
                <div className="miniBox">
                    <p>Linkdn</p>
                </div>
                <div className="miniBox">
                    <p>Github</p>
                </div>
            </div>

        </ContactContainer>
    )
}


export default Contact

const ContactContainer = styled.section`
    background-color: ${colorWhite};
    display: flex;
    flex-direction: column;
    align-items: center;

    .box{
        display: flex;
        flex-flow: row wrap;
        .miniBox{
            margin: 1rem;
        }
    }
`