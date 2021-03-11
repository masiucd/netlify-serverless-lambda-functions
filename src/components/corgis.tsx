import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";
import { corgis } from "../data/corgis";
import { Corgi } from "../utils/types";
import { CorgiItem } from "./corgi-item";

const grid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 2em;
  justify-content: center;
  justify-items: center;
`;

export const Corgis = () => {
  const [corgisData, setCorgisData] = useState<Corgi[]>([]);

  useEffect(() => {
    const loadCorgis = async () => {
      const corgis = await fetch("/.netlify/functions/load-corgis");
      const response = await corgis.json();
      setCorgisData(response);
    };
    loadCorgis();
  }, []);

  return (
    <section className={grid}>
      {corgisData.map((corgi) => (
        <CorgiItem key={corgi.id} corgi={corgi} />
      ))}
    </section>
  );
};
