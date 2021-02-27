import { css } from "@emotion/css";
import React from "react";

const appStyles = css`
  & {
    background-color: red;
  }
`;

export const App = () => {
  return (
    <div className={appStyles}>
      <h1>App</h1>
    </div>
  );
};
