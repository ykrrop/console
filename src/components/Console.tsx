import styled from "styled-components";
import Flex from "./Flex";
import React, { useState } from "react";
import Line from "./Line";

interface ConsoleProps {
  children?: React.ReactNode;
  color?: string;
}

const StyledConsole = styled.textarea<ConsoleProps>`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  color: ${({ color }) => color || "white"};
  resize: none;
  &:focus {
    outline: none;
  }
`;

export default function Console(props: ConsoleProps) {
  const [lines, setLines] = useState(["C:\\Users>"]);

  const onKeyPress = (e) => {
    if (e.charCode == 13) {
      setLines([...lines, "C:\\Users>"]);
    }
  };
  return (
    <Flex>
      <Flex direction="column" margin="0 10px">
        {lines.map((line) => (
          <Line>{line}</Line>
        ))}
      </Flex>
      <StyledConsole onKeyPress={onKeyPress} {...props} />
    </Flex>
  );
}
