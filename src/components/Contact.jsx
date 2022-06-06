import React from "react";
import styled from 'styled-components'
import {colorPurple, colorWhite, colorSilver, colorBone, colorBlack} from '../assets/styles/abstracts/variables'
import {SiLinkedin, SiGmail, SiGithub } from "react-icons/si"


function Contact() {
    return (
        <ContactContainer>
            <h2>Contact </h2>
            <div className="box">
                <div className="miniBox">
                    <SiGmail className="icon gmail"/>
                    <p>Gmail</p>
                </div>
                <div className="miniBox">
                    <SiLinkedin className="icon linkedin"/>
                    <p>Linkedn</p>
                </div>
                <div className="miniBox">
                    <SiGithub className="icon github"/>
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
        width: 60%;
        justify-content: space-between;
        .miniBox{
            margin: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            .icon{
                width: 3rem;
                height: auto;
            }

            .gmail{ color: red}
            .linkedin{ color: #006192}
            .github{ color: #211F1F}
        }
    }
`