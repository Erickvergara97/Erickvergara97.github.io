import React from 'react'
import styled, { css, keyframes } from 'styled-components'

export default function GlowingCard({children, ...props}) {
  return (
    <GlowingCardContainer {...props}>{children}</GlowingCardContainer>
  )
}

const animateGlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const backlight = (x, y, spread, size, colorA, colorB, duration) => css`
  &:after {
    position: absolute;
    content: "";
    top: ${y};
    left: ${x};
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(${size});
    filter: blur(${spread});
    background: linear-gradient(270deg, ${colorA}, ${colorB});
    background-size: 200% 200%;
    animation: ${animateGlow} ${duration} ease infinite;
  }
`;

const textColor = keyframes`
  0% {
    color: #7e0fff;
  }
  50% {
    color: #0fffc1;
  }
  100% {
    color: #7e0fff;
  }
`;
const GlowingCardContainer = styled.div`
  position: relative;
  border-radius: 10px;
  /* text-align: center; */
  /* color: #332537; */
  background-color: ${({ theme }) => theme.cards};
  /* animation: ${textColor} 1s ease infinite; */
  ${({ theme }) => backlight('2vw', '2vw', '5vw', '0.95', theme.primary, theme.secondary, '5s')}
`;