import styled from "styled-components";

interface FlexProps {
  direction?: "row" | "column";
  align?: "flex-start" | " flex-end" | "center" | "baseline";
  justify?:
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end "
    | "left"
    | "right";
  margin?: string;
  children?: React.ReactNode;
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  margin: ${({ margin }) => margin || "0"};
`;

export default function Flex(props: FlexProps) {
  return <StyledFlex {...props} />;
}
