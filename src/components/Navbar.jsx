import React, {useState} from "react";
import styled from 'styled-components'
import BurgerMenu from "./BurgerMenu";


function Navbar() {

    const [clicked, setClicked] = useState(false);
    function handleClick () {
        setClicked(!clicked)
    }
    return (
        <>
            <NavContainer>
                <h2>LOGO</h2>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <a href="/">Inicio</a>
                    <a href="/">Perfil</a>
                    <a href="/">Habilidades</a>
                    <a href="/">Proyectos</a>
                    <a href="/">Contacto</a>
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

const NavContainer = styled.nav`
    h2{
        color: white;
    }
    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }

    padding: 0.4rem;
    background-color: #333;
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
        a{
            color: white;
            font-size: 2rem;
            display: block;
        }

        @media(min-width: 768px){
            position: initial;
            margin: 0;
            a{
                font-size: 2rem;
                color: white;
                display: inline;
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
            color: white;
        }
    }

    .burger{
        @media(min-width: 768px){
            display: none;
        }
    }
`

const Bgdiv = styled.div `
    position: absolute;
    background-color: #222;
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;

    transition: all .6s ease;
    &.active{
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`