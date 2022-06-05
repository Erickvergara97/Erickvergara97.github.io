import React from "react";
import styled from 'styled-components'
import {colorPurple, colorWhite, colorSilver, colorBone, colorBlack} from '../assets/styles/abstracts/variables'
import vivelacumbre from "../assets/img/vivelacumbre.png"
import animewiki from "../assets/img/animewiki.png"
import techEvent from "../assets/img/techevent.png"


function Projects() {
    return (
        <ProjectsContainer>
            <h2>Projects</h2>
            <div className="box">
                <div className="miniBox">
                    <img src={vivelacumbre} alt="vivelacumbre" />
                    <p>Vive la cumbre</p>

                </div>
                <div className="miniBox">
                    <img src={animewiki} alt="animewiki" />
                    <p>Animewiki</p>

                </div>
                <div className="miniBox">
                    <img src={techEvent} alt="techevent" />
                    <p>TechEvent</p>

                </div>
            </div>


        </ProjectsContainer>
    )
}


export default Projects


const ProjectsContainer = styled.section`
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .box{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;

        .miniBox{
            margin: 1rem;
            p{
                text-align-last: center;
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