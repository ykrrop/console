import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: consolas;
}
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global />
    <App />
  </StrictMode>
);
