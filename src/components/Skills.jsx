import React from "react";
import styled from 'styled-components'
import { colorBone } from '../assets/styles/abstracts/variables'
import { DiBootstrap, DiReact, DiSass } from "react-icons/di";
import {SiJavascript, SiHtml5, SiCss3, SiGit, SiGithub, SiTailwindcss} from "react-icons/si"

function Skills() {
    return (
        <SkillsContainer id="skills">
            <div className="box">
                <h2>Skills</h2>
                <div className="carrousel">
                    <div className="miniBox">
                        <DiReact className="icon react"/>
                        <p>React</p>

                    </div>
                    <div className="miniBox">
                        <SiJavascript className="icon javascript"/>
                        <p>JavasCript</p>

                    </div>
                    <div className="miniBox">
                        <SiHtml5 className="icon html "/>
                        <p>HMTL</p>

                    </div>
                    <div className="miniBox">
                        <SiCss3 className="icon css"/>
                        <p>CSS</p>

                    </div>
                    <div className="miniBox">
                        <DiSass className="icon sass"/>
                        <p>SASS</p>

                    </div>
                    <div className="miniBox">
                        <SiGit className="icon git"/>
                        <p>Git</p>

                    </div>
                    <div className="miniBox">
                        <SiGithub className="icon github"/>
                        <p>GitHub</p>

                    </div>
                    <div className="miniBox">
                        <SiTailwindcss className="icon tailwind"/>
                        <p>Tailwind</p>

                    </div>
                    <div className="miniBox">
                        <DiBootstrap className="icon bootstrap"/>
                        <p>Bootstrap</p>

                    </div>

                </div>

            </div>
        </SkillsContainer>
    )
}


export default Skills


const SkillsContainer = styled.section`
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
                display: flex;
                flex-direction: column;
                align-items: center;

                .icon{
                    width: 5rem;
                    height: auto;

                    //funcion para los colores
                }

                .react{color: #61DBFB;}
                .javascript{color: #F0DB4F; background-color: #323330;}
                .html{color: #E34C26;}
                .css{color: #3C99DC;}
                .sass{color: #CD6799;}
                .git{color: #f34f29;}
                .github{color: #211F1F;}
                .tailwind{color: #38bdf8;}
                .bootstrap{color: #080135;}

                .react, .javascript, .html, .css, .sass, .git, .github, .tailwind, .bootstrap {
                    transition: color 2s, background-color 2s;
                    &:hover{
                        color: ${({ theme }) => theme.accent };
                        background-color: transparent;
                    }
                }
            }
    
        }
    }

    @media(min-width: 768px){
        .box{
            width: 60%;
            .carrousel{
                .miniBox{
                    margin: 2.5rem;
                }
            }
        }
    }

`