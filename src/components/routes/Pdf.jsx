import React from 'react'
import styled from "styled-components"
import resume from "../../assets/docs/resume-ev.pdf"

function Pdf() {
  return (
    <PdfContainer>
        <object data={resume} type="application/pdf"> 
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