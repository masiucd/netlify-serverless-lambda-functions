import React from "react";
import { css } from "@emotion/css";
import { Corgis } from "./components/corgis";
import Title from "./components/title";

const appStyles = css`
  margin-bottom: 2rem;
`;

export const App = () => {
  return (
    <main className={appStyles}>
      <Title title="Corgis" subTitle="lovely corgis" />
      <Corgis />
    </main>
  );
};
