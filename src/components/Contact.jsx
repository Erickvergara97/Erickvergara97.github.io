import React from "react";
import styled from 'styled-components'
import {SiLinkedin, SiGmail, SiGithub } from "react-icons/si"
import GlowingIconButton from "../commons/GlowingIconButton";


function Contact({ isDarkMode }) {
    return (
        <ContactContainer id="contact" isDarkMode={isDarkMode}>
            <div className="box">
                <GlowingIconButton iconColor='red'>
                    <a href="mailto:erick.vergara.ruiz@gmail.com" target="_blank" rel="noreferrer">
                        <SiGmail className="icon gmail"/>
                    </a>
                </GlowingIconButton>
                <GlowingIconButton iconColor='#006192'>
                    <a href="https://www.linkedin.com/in/erick-vergara-a782691a5/" target="_blank" rel="noreferrer">
                        <SiLinkedin className="icon linkedin"/>
                    </a>
                </GlowingIconButton>
                <GlowingIconButton iconColor='#6cc644'>
                    <a href="https://github.com/Erickvergara97" target="_blank" rel="noreferrer">
                        <SiGithub className="icon github"/>
                    </a>
                </GlowingIconButton>
            </div>
        </ContactContainer>
    )
}


export default Contact

const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    .box{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;

        .icon{
            width: 2rem;
            height: auto;
        }

        .gmail{             
            color: ${({ isDarkMode }) => isDarkMode ? 'white' : 'red'}
        }
        .linkedin{ color: ${({ isDarkMode }) => isDarkMode ? 'white' : '#006192'}}
        .github{ color: ${({ isDarkMode }) => isDarkMode ? 'white' : '#211F1F'}}
    }
`