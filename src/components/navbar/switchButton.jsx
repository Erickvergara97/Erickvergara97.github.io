import React, { useState } from 'react'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
import styled from 'styled-components'

export default function SwitchButton() {
    const [isToggled, setIsToggled] = useState(false);

    const toggleSwitch = () => {
      setIsToggled(!isToggled);
    };
  return (
    <Switch onClick={toggleSwitch} isToggled={isToggled}>
        <span className={`innerCircle ${isToggled ? 'active' : ''}`}>
            <span className='icon'>
                <IoSunnyOutline className={`icon sun ${isToggled ? 'active' : ''}`}/>
                <IoMoonOutline className={`icon moon ${isToggled ? 'active' : ''}`}/>
            </span>
        </span>
    </Switch>
  )
}

const Switch = styled.button`
    position: relative;
    border-radius: 11px;
    display: block;
    width: 40px;
    height: 22px;
    flex-shrink: 0;
    border: 1px solid #3c3f44;
    background-color: rgba(142, 150, 170, .14);
    transition: 0.3s ease;
    cursor: pointer;

    &:hover{
        ${({ isToggled }) => (`border-color: ${isToggled ? '#bcc0ff' : '#747bff'}`)}
    }
    .innerCircle{
        position: absolute;
        top: 1px;
        ${({ isToggled }) => (isToggled ? 'left: 19px;' : 'left: 1px;')}
        width: 18px;
        height: 18px;
        background-color: white;
        border-radius: 50%;
        transition: left 0.7s ease;
        &.active {
            background-color: black;
        }
    }
    .icon{
        position: absolute;
        color: white;
        top: 1px;
        left: 1px;
        &.sun{
            color: #3c3f44;
            ${({ isToggled }) => (isToggled ? 'opacity: 0;' : 'opacity: 1;')}
        };
        &.moon{
            color: white;
            ${({ isToggled }) => (isToggled ? 'opacity: 1;' : 'opacity: 0;')}
        };
    }
`