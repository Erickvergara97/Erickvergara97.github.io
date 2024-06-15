import React from "react";
import styled from 'styled-components'
import IconButton from "./skills/IconButton";
import stackItem from "./skills/StackContent";
import { useState } from "react";

function Skills() {
    const [offset, setOffset] = useState(0)

    return (
        <SkillsContainer id="skills" offset={offset}>
            <div className="box" >
                <h3>Stack</h3>
                <div className="carrousel gap-5 pb-10">
                    {/* <div className=" flex items-center justify-center h-screen"> */}
                    {stackItem.map((item, index) => (
                    <div key={index} className="iconContainer">
                        <IconButton text={item.name} color={item.color} setOffset={setOffset}>
                            {item.icon}
                        </IconButton>
                    </div>
                        )
                    )}
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
        padding: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: ${({ theme }) => theme.cards };
        color: ${({ theme }) => theme.accent };
        width: 90%;
        height: 50%;
        box-shadow: 0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8;

        margin-top: 5rem;
        
        .carrousel{
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            align-items: center;
            height: auto;
            width: 100%;

            .iconContainer{
                display: flex;
                justify-content: center;
                flex-basis: 170px;
            }
        }
    }

    @media(min-width: 768px){
        .box{
            width: 60%;
            
            .carrousel{
                flex-flow: row wrap;
                width: 100%;
            }
        }
    }
`