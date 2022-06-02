import React from "react";
import styled from 'styled-components'


function Navbar() {
    return (
        <>
            <NavContainer>
                <a href="/">Inicio</a>
                <a href="/">Perfil</a>
                <a href="/">Habilidades</a>
                <a href="/">Proyectos</a>
                <a href="/">Contacto</a>
            </NavContainer>
        </>
    )
}


export default Navbar

const NavContainer = styled.nav`
    a{
        color: red,
    }
`