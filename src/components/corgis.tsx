import { css } from "@emotion/css";
import React from "react";
import { corgis } from "../data/corgis";
import { CorgiItem } from "./corgi-item";

const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 2em;
  justify-content: center;
  justify-items: center;
`;

const loadCorgis = async () => {
  const corgis = await fetch("/.netlify/functions/load-corgis");
  const response = await corgis.json();
  return response;
};

export const Corgis = () => {
  return (
    <section className={grid}>
      {corgis.map((corgi) => (
        <CorgiItem key={corgi.id} corgi={corgi} />
      ))}
    </section>
  );
};
