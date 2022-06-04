import React from "react";
import styled from 'styled-components'

function Home() {
    return (
        <Me>
            <h2>Erick Vergara</h2>
        </Me>
    )
}


export default Home

const Me = styled.section `
    background-color: #7300ff;
    h2{
        color: white;
        padding: .4rem;
    }
`