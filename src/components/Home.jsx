import React from "react";
import { TypeAnimation } from "react-type-animation";
import styled from 'styled-components'

function Home() {
    return (
        <Me id="home">
            <div className="introContainer">
                <h2>Hey, I'm Erick</h2>
                <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed once, initially
                    'Web devlepoer',
                    1000,
                    '...',
                    1000,
                    'Web developer.',
                    1000,
                ]}
                speed={50}
                style={{ fontSize: '5rem' }}
                wrapper="p"
                />
            </div>
        </Me>
    )
}


export default Home

const Me = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        padding: 2rem;
        right: 0;
        height: auto;
        width: 20rem;
        border-radius: 700px;
    }

    h2{
        font-size: 6rem;
        margin: 1rem;
        color: ${({ theme }) => theme.accent };
        padding: .4rem;
        font-family: "Archivo Black", sans-serif;
    }
    p{
        font-size: 6rem;
        margin: 1rem;
        color: ${({ theme }) => theme.primary};
        span{
            color: ${({ theme }) => theme.accent };
        }
    }

    @media(min-width: 768px){
        flex-direction: row;
        justify-content: center;

        img{
            width: 30rem;
        }
    }
`