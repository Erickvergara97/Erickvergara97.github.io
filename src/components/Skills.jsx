import React from "react";
import styled from 'styled-components'
import {colorPurple, colorWhite, colorSilver, colorBone, colorBlack} from '../assets/styles/abstracts/variables'


function Skills() {
    return (
        <SkillsContainer>
            <div className="box">
                <h2>Skills</h2>
                <div className="carrousel">
                    <p>React</p>
                    <p>JavasCript</p>
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
        position: absolute;
        background-color: ${colorBone};
        top: 1300px;
        width: 90%;
        height: 50%;

        box-shadow: 0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8;
    }
`