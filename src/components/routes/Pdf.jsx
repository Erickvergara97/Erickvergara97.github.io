import React from 'react'
import styled from "styled-components"

function Pdf() {
  return (
    <PdfContainer>
        <object data={require("../../assets/docs/erick-vergara-resume.pdf")} type="application/pdf"> 
        </object>
    </PdfContainer>
  )
}

export default Pdf


const PdfContainer = styled.div`

object{
    width: 100vw;
    height: 100vh;
  }
`