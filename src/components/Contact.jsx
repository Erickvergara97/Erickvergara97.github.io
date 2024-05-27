import React from "react";
import styled from 'styled-components'
import {SiLinkedin, SiGmail, SiGithub } from "react-icons/si"


function Contact({isDarkMode}) {
    return (
        <ContactContainer id="contact" isDarkMode={isDarkMode}>
            <div className="box">
                <div className="miniBox">
                    <a href="mailto:erick.vergara.ruiz@gmail.com" target="_blank" rel="noreferrer">
                        <SiGmail className="icon gmail"/>
                    </a>
                </div>
                <div className="miniBox">
                    <a href="https://www.linkedin.com/in/erick-vergara-a782691a5/" target="_blank" rel="noreferrer">
                        <SiLinkedin className="icon linkedin"/>
                    </a>
                </div>
                <div className="miniBox">
                <a href="https://github.com/Erickvergara97" target="_blank" rel="noreferrer">
                    <SiGithub className="icon github"/>
                </a>
                </div>
            </div>

        </ContactContainer>
    )
}


export default Contact

const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        color: ${({theme}) => theme.accent};
    }

    .box{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;

        @media(min-width: 768px){
            width: 60%;
        }
        .miniBox{
            margin: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            p{
                color: ${({ theme }) => theme.accent };
                font-weight: bold;
            }

            .icon{
                width: 3rem;
                height: auto;
            }

            .gmail{
                ${({ isDarkMode, theme }) => (`color: ${isDarkMode ? theme.icons : 'red'}`)}
            }
            .linkedin{ 
                ${({ isDarkMode, theme }) => (`color: ${isDarkMode ? theme.icons : '#006192'}`)}
            }
            .github{ 
                ${({ isDarkMode, theme }) => (`color: ${isDarkMode ? theme.icons : '#211F1F'}`)}
            }

            .gmail, .linkedin, .github {
                transition: color 1s, background-color 1s;

                &:hover{
                    color: ${({ theme }) => theme.accent };
                    background-color: transparent;
                }
            }
        }
    }
`