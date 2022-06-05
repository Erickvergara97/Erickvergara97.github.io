import React from "react";
import styled from 'styled-components'
import {colorPurple, colorWhite, colorSilver, colorBone, colorBlack} from '../assets/styles/abstracts/variables'


function Skills() {
    return (
        <SkillsContainer>
            <div className="box">
                <h2>Skills</h2>
                <div className="carrousel">
                    <div className="miniBox">
                        <img src="" alt="React-logo" />
                        <p>React</p>

                    </div>
                    <div className="miniBox">
                        <img src="" alt="JavaScript-logo" />
                        <p>JavasCript</p>

                    </div>
                    <div className="miniBox">
                        <img src="" alt="HTML-logo" />
                        <p>HMTL</p>

                    </div>
                    <div className="miniBox">
                        <img src="" alt="CSS-logo" />
                        <p>CSS</p>

                    </div>
                    <div className="miniBox">
                        <img src="" alt="SASS-logo" />
                        <p>SASS</p>

                    </div>
                    <div className="miniBox">
                        <img src="" alt="Git-logo" />
                        <p>Git</p>

                    </div>
                    <div className="miniBox">
                        <img src="" alt="Github-logo" />
                        <p>GitHub</p>

                    </div>
                    <div className="miniBox">
                        <img src="" alt="Tailwind-logo" />
                        <p>Tailwind</p>

                    </div>
                    <div className="miniBox">
                        <img src="" alt="Bootstrap-logo" />
                        <p>Bootstrap</p>

                    </div>

                </div>

            </div>
        </SkillsContainer>
    )
}


export default Skills


const SkillsContainer = styled.section`
    background-color: ${colorWhite};
    display: flex;
    justify-content: center;
    .box{
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${colorBone};
        width: 90%;
        height: 50%;
        box-shadow: 0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8;

        margin-top: 5rem;
        
        .carrousel{
            display: flex;
            flex-flow: row wrap;
            justify-content: center;

            .miniBox{
                margin: 1rem;
            }
    
        }
    }

`