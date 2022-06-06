import React from "react";
import styled from 'styled-components'
import {colorPurple, colorWhite, colorSilver, colorBone, colorBlack} from '../assets/styles/abstracts/variables'
import vivelacumbre from "../assets/img/vivelacumbre.png"
import animewiki from "../assets/img/animewiki.png"
import techEvent from "../assets/img/techevent.png"


function Projects() {
    return (
        <ProjectsContainer id="projects">
            <h2>Projects</h2>
            <div className="box">
                <div className="miniBox">
                    <img src={vivelacumbre} alt="vivelacumbre" />
                    <a href="https://vivelacumbre.org/" target="_blank" rel="noreferrer" className="primaryButton">
                        Vive la cumbre
                    </a>

                </div>
                <div className="miniBox">
                    <img src={animewiki} alt="animewiki" />
                    <a href="https://erickvergara97.github.io/tech-event/" target="_blank" rel="noreferrer" className="primaryButton">
                        Animewiki
                    </a>

                </div>
                <div className="miniBox">
                    <img src={techEvent} alt="techevent" />
                    <a href="https://erickvergara97.github.io/tech-event/" target="_blank" rel="noreferrer" className="primaryButton">
                        TechEvent
                    </a>

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
            margin: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            a{
                text-align: center;
            }
            img{
                width: 20rem;
                height: auto;
            }
        }
    }
    @media(min-width: 768px){
        margin-top: 18rem;
    }

`