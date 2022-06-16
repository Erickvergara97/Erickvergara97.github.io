import React from "react";
import styled from 'styled-components'
import {colorWhite, colorBlack} from '../assets/styles/abstracts/variables'
import {DiReact} from "react-icons/di";
import {SiJavascript, SiGithub, SiCss3} from "react-icons/si";
import vivelacumbre from "../assets/img/vivelacumbre.png"
import animewiki from "../assets/img/animewiki.png"
import techEvent from "../assets/img/techevent.png"


function Projects() {
    return (
        <ProjectsContainer id="projects">
            
            <h2>Projects</h2>
            <div className="box">
                <div className="miniBox">
                    <ul className="ul">
                        <li>
                            <SiJavascript/>
                        </li>
                        <a href="https://github.com/Erickvergara97/vivelacumbre.github.io" target="_blank" rel="noreferrer">
                            <li>
                                <SiGithub/>
                            </li>
                        </a>
                    </ul>
                    <img src={vivelacumbre} alt="vivelacumbre" />
                    <div className="con-text">
                        <h3>Vive la cumbre</h3>
                        <p>
                            This was my first webpage with an "oficial" domain, it was made for a foundation named Vivelacumbre and I worked collaboratively with another web developer and some members of the foundation in order to discuss the design and interactions of the page. 
                            <a href="https://vivelacumbre.org/" target="_blank" rel="noreferrer">
                                See webpage
                            </a>
                        </p>
                    </div>
                </div>

                <div className="miniBox">
                    <ul className="ul">
                        <li>
                            <DiReact/>
                        </li>
                        <a href="https://github.com/Erickvergara97/proyecto-anime" target="_blank" rel="noreferrer">
                            <li>
                                <SiGithub/>
                            </li>
                        </a>
                    </ul>
                    <img src={animewiki} alt="animewiki" />
                    <div className="con-text">
                        <h3>Animewiki</h3>
                        <p>
                            Animewiki is a webpage made with react in where the main goal was to use an API and some others react tools like Route or Hooks.
                            <a href="https://erickvergara97.github.io/proyecto-anime/" target="_blank" rel="noreferrer">
                                See webpage
                            </a>
                        </p>
                    </div>
                </div>

                <div className="miniBox">
                    <ul className="ul">
                        <li>
                            <SiCss3/>
                        </li>
                        <a href="https://github.com/Erickvergara97/tech-event" target="_blank" rel="noreferrer">
                            <li>
                                <SiGithub/>
                            </li>
                        </a>
                    </ul>
                    <img src={techEvent} alt="vivelacumbre" />
                    <div className="con-text">
                        <h3>TechEvent</h3>
                        <p>
                            TechEvent is one of my first projects in where I used HTML and CSS focusing in the design and some HTML routes called with Id's, I made it responsive and also did one of my first BurgerMenu.
                            <a href="https://erickvergara97.github.io/tech-event/" target="_blank" rel="noreferrer">
                                See webpage
                            </a>
                        </p>
                    </div>
                </div>
            </div>


        </ProjectsContainer>
    )
}


export default Projects


const ProjectsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    .box{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        
        .miniBox{
            position: relative;
            margin: 1rem;
            width: 340px;
            height: 300px;

            @media(min-width: 768px){
                width: 400px;
                height: 300px;
            }
            background: ${colorBlack};
            border-radius: 30px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.25s ease;
            backface-visibility: hidden;
            &::after{
                width: 100%;
                content: '';
                left: 0px;
                bottom: 0px;
                position: absolute;
                height: 150px;
                background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
                transition: all .25s ease;
                border-radius: 30px;
            }

            img{
                height: 100%;
                transition: all .25s ease;
            }

            .con-text{
                z-index: 1;
                position: absolute;
                bottom: 0px;
                color: ${colorWhite};
                padding: 20px;
                padding-bottom: 4rem;
                border-radius: 30px;
                p{
                    font-size: .8rem;
                    opacity: 0;
                    margin-bottom: -170px;
                    transition: all .25s ease;
                    display: flex;
                    justify-content: flex-end;
                    flex-direction: column;
                    a{
                        padding: 7px 17px;
                        border-radius: 12px;
                        background: transparent;
                        border: 2px solid ${colorWhite};
                        color: ${colorWhite};
                        margin-top: 10px;
                        margin-left: auto;
                        cursor: pointer;
                        transition: all .25s ease;
                        font-size: .75rem;
                        outline: none;
                        &:hover{
                            background: ${colorWhite};
                            color: ${colorWhite};
                        }
                    }
                }
            }

            &:hover{
                transform: scale(.9);
                img{
                    transform: scale(1.25);
                }
                ul{
                    transform: translate(0);
                    opacity: 1;
                }
                .con-text{
                    p{
                    margin-bottom: 0px;
                    opacity: 1;
                    }
                }
                &::after{
                    height: 280px;
                }
            }

            .ul{
                position: absolute;
                right: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                z-index: 40;
                border-radius: 14px;
                padding-left: 0px;
                padding-top: 8px;
                padding-bottom: 8px;
                top: 0px;
                opacity: 0;
                transform: translate(100%);
                transition: all .25s ease;

                li{
                    background: ${colorWhite};
                    list-style: none;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: .7;
                    transition: all .25s ease;
                    backface-visibility: hidden;
                    &:first-child{
                        border-radius: 12px 12px 0 0;
                    }
                    &:last-child{
                        border-radius: 0 0 12px 12px;
                    }
                    &:hover{
                        opacity: 1;
                        transform: translate(-7px, -4px);
                        border-radius: 6px;
                    }
                }
            }
        }
    }
`