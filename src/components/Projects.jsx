import React from "react";
import styled from 'styled-components'
import {colorPurple, colorWhite, colorSilver, colorBone, colorBlack} from '../assets/styles/abstracts/variables'


function Projects() {
    return (
        <ProjectsContainer>
             <h2> Projects</h2>
        </ProjectsContainer>
    )
}


export default Projects


const ProjectsContainer = styled.section`
    margin-top: 8rem;
    @media(min-width: 768px){
        margin-top: 18rem;
    }

`