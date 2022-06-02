import React from "react";
import styled from 'styled-components'
import BurgerMenu from "./BurgerMenu";


function Navbar() {
    return (
        <>
            <NavContainer>
                <h2>LOGO</h2>
                <div className="links">
                    <a href="/">Inicio</a>
                    <a href="/">Perfil</a>
                    <a href="/">Habilidades</a>
                    <a href="/">Proyectos</a>
                    <a href="/">Contacto</a>
                </div>
                <div className="burger">
                    <BurgerMenu/>
                </div>
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
        @media(min-width: 768px){
          
        }
    }

    .burger{
        @media(min-width: 768px){
            display: none;
        }
    }

`