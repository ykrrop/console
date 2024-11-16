import React from "react";
import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  align?: "flex-start" | "flex-end" | "center" | "stretch";
  primary?: boolean;
  color?: string;
  background?: string;
  outlined?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  padding: 10px 15px;
  font-size: 24px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    animation: ${rotateAnimation} 1s infinite linear;
  }
  align-self: ${(props) => props.align || "stretch"};

  ${(props) =>
    props.primary &&
    !props.outlined &&
    `
    color: ${props.color || "white"};
    background: ${props.background || "black"}; 
  `}

  ${(props) =>
    props.outlined &&
    `
    color: ${props.color || "white"};
    background: transparent; 
    border: 1px solid ${props.color || "white"};
  `}
`;

const LargeButton = styled(StyledButton)`
  font-size: 32px;
`;

export default function Button(props: ButtonProps) {
  return <StyledButton {...props} />;
}
