import React from 'react'
import styled from 'styled-components'
import { colorWhite } from '../../assets/styles/abstracts/variables'

export default function NavbarButton({link,children}) {
  return (
    <NavButton href={link}>{children}</NavButton>
  )
}

const NavButton = styled.a`
  color: ${colorWhite};
  text-decoration: none;
  margin-right: 1rem;
  font-size: 2rem;
  display: block;

  @media(min-width: 768px){
    padding: 10px 20px;
    text-decoration: none;
    margin: 0 10px;
    font-size: .7rem;
    display: inline;
    transition: color 0.5s;
    &::after,
    &::before {
      transition: all .5s;
    }

    &:hover {
      color: #c1bebe;
      transition: all .5s;
    }
    /* stroke */
    position: relative;
    ::after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 0%;
      content: '';
      background: #aaa;
      height: 1px;
    }
    :hover::after {
      width: 100%;
    }
  }
`