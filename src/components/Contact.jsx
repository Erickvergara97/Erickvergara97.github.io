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
                    <a href="mailto:erick.vergara.ruiz@gmail.com" target="_blank" rel="noreferrer">
                        <SiGmail className="icon gmail"/>
                    </a>
                    <p>Gmail</p>
                </div>
                <div className="miniBox">
                    <a href="https://www.linkedin.com/in/erick-vergara-a782691a5/" target="_blank" rel="noreferrer">
                        <SiLinkedin className="icon linkedin"/>
                    </a>
                    <p>Linkedn</p>
                </div>
                <div className="miniBox">
                <a href="https://github.com/Erickvergara97" target="_blank" rel="noreferrer">
                    <SiGithub className="icon github"/>
                </a>
                    <p>Github</p>
                </div>
            </div>

        </ContactContainer>
    )
}


export default Contact

const ContactContainer = styled.section`
    padding-top: 6rem;
    padding-bottom: 6rem;
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
            p{
                color: ${colorPurple};
                font-weight: bold;
            }

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