import React from 'react'
import { IoChevronDown, IoLanguage } from "react-icons/io5";
import styled from 'styled-components';

export default function LanguageDropdown() {
  return (
    <DropdownButton>
        <IoLanguage/>
        <IoChevronDown/>
    </DropdownButton>
  )
}



const DropdownButton = styled.button`
    background-color: unset;
    color: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
`