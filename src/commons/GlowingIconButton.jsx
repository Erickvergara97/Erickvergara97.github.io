import React from 'react'
import styled from 'styled-components'

export default function GlowingIconButton({ children, iconColor, ...props }) {
  return (
    <GlowingIconContainer iconColor={iconColor} {...props}>{children}</GlowingIconContainer>
  )
}

const GlowingIconContainer = styled.div`
    padding: 10px;
    background-color: ${({ theme }) => theme.cards};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    margin-left: 1em;
    margin-right: 1em;  
    cursor: pointer;
    transition: all 0.3s;

    -webkit-box-shadow: 0px 20px 20px -17px ${({ iconColor }) => iconColor};
    -moz-box-shadow: 0px 20px 20px -17px ${({ iconColor }) => iconColor};
    box-shadow: 0px 20px 20px -17px ${({ iconColor }) => iconColor};

    &:hover {
      -webkit-box-shadow: 0px 15px 35px 0px ${({ iconColor }) => iconColor};
      -moz-box-shadow: 0px 15px 35px 0px ${({ iconColor }) => iconColor};
      box-shadow: 0px 15px 35px 0px ${({ iconColor }) => iconColor};
    }

    .content {
      font-size: 4em;
      font-family: "Roboto", sans-serif;
      background: linear-gradient(to right, #006fff, #00acff 70%);
      /* -webkit-background-clip: text; */
      -webkit-text-fill-color: transparent;
      text-shadow: 0px 10px 37px rgba(0, 111, 255, 0.8);
    }

    &:hover {
    background-color: darken(#fafafa, 2%);    
    transform: translateY(-5px);
    transition: all 0.3s;
  }
`