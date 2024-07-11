import React from 'react'
import styled from "styled-components"

function Pdf() {
  return (
    <PdfContainer>
        <object data={require("https://drive.google.com/file/d/1Z5ETAEyQaZD-xC7us6ObaQY30utW8yLH/view")} type="application/pdf"> 
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