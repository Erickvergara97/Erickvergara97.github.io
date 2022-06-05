import React, {useState} from "react";
import styled from 'styled-components';
import {colorPurple, colorWhite, colorSilver, colorBone, colorBlack} from '../assets/styles/abstracts/variables'
import BurgerMenu from "./BurgerMenu";
import logo from "../assets/img/ev-logo.png"


function Navbar() {

    const [clicked, setClicked] = useState(false);
    function handleClick () {
        setClicked(!clicked)
    }
    return (
        <>
            <NavContainer>
                <img src={logo} alt="logo" className="logo"/>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <a href="/">Home</a>
                    <a href="/">About me</a>
                    <a href="/">Skills</a>
                    <a href="/">Projects</a>
                    <a href="/">Contact</a>
                </div>
                <div className="burger">
                    <BurgerMenu clicked={clicked} handleClick={handleClick}/>
                </div>
                <Bgdiv className = {`initial ${clicked ?  'active' : ''}`}></Bgdiv>
            </NavContainer>
        </>
    )
}


export default Navbar

const NavContainer = styled.header`
    .logo{
        width: 2rem;
        height: auto;
        border-radius: 10px;
    }

    h2{
        color: ${colorWhite};
    }
    a{
        color: ${colorWhite};
        text-decoration: none;
        margin-right: 1rem;
    }

    padding: 0.4rem;
    background-color: ${colorSilver};
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .links{
        position: absolute;
        top: -700px;
        left: -1000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        z-index: 2;
        a{
            color: ${colorWhite};
            font-size: 2rem;
            display: block;
        }

        @media(min-width: 768px){
            position: initial;
            margin: 0;
            a{
                font-size: .7rem;
                color: ${colorWhite};
                display: inline;
                padding-right: 3rem;
            }
        }
    }
    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-right: auto;
        margin-left: auto;
        top: 30%;
        left: 0;
        right: 0;

        a{
            font-size: 2rem;
            margin-top: 1rem;
            color: ${colorWhite};
        }
    }


    .burger{
        z-index: 2;
        @media(min-width: 768px){
            display: none;
        }
    }
`

const Bgdiv = styled.div `
    position: absolute;
    background-color: ${colorBlack};
    opacity: 0.5;
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: 1;

    transition: all .6s ease;
    &.active{
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    @media(min-width: 768px){
        display: none;
    }
`