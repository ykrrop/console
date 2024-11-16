import React from "react";
import styled from "styled-components";

interface LineProps {
  children?: React.ReactNode;
  color?: string;
}

const StyledLine = styled.div<LineProps>`
  font-size: 24px;
  color: ${({ color }) => color || "white"};
`;

export default function Line(props: LineProps) {
  return <StyledLine {...props} />;
}
