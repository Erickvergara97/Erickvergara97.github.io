import React from "react";
import styled from 'styled-components'
import myPicture from '../assets/img/itachi.jpg'
import {colorPurple, colorWhite, colorSilver, colorBone, colorBlack} from '../assets/styles/abstracts/variables'


function Home() {
    return (
        <Me>
            <h2>Erick Vergara</h2>
            <img src={myPicture} alt="itachi" />
        </Me>
    )
}


export default Home

const Me = styled.section `
    background-color: #7300ff;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 4rem;
    }

    h2{
        color: white;
        padding: .4rem;
    }

    @media(min-width: 768px){
        display: flex ;
    }
`