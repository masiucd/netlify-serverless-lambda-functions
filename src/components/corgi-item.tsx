import { css, cx } from "@emotion/css";
import React, { useState } from "react";
import { Corgi } from "../utils/types";

interface CorgiItemProps {
  corgi: Corgi;
}

const corgiStyles = css`
  & {
    display: flex;
    flex-flow: column wrap;
    box-shadow: var(--shadowLg);
    border-radius: var(--border-radius);
    flex: 1;
  }
`;

const corgiHeaderStyles = css`
  & {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      border-radius: var(--border-radius);
    }
    small {
      display: block;
      padding: 0.45rem 1rem;
    }
  }
`;

const bodyStyles = css`
  & {
    display: flex;
    flex-flow: column wrap;
    flex: 1;
    padding: 1rem;
    box-shadow: var(--shadowInner);
    background-color: var(--primary);
    border-radius: var(--border-radius);
    p {
      margin-bottom: 1.5rem;
      &:nth-of-type(1) {
        font-size: 1.4rem;
        border-bottom: 1px solid var(--white);
      }
    }
    button {
      margin-top: auto;
      cursor: pointer;
      padding: 0.5rem;
      font-size: 1.1em;
      border-radius: var(--border-radius);
      border: 2px solid var(--textColor);
      background-color: var(--white);
      transition: var(--main-trans);
      &:hover {
        background-color: var(--danger);
      }
    }
  }
`;

export const CorgiItem: React.FC<CorgiItemProps> = ({ corgi }) => {
  const [boobCount, setBoobCount] = useState(0);
  const [isBooping, setIsBooping] = useState(false);

  const handleBoop = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setIsBooping(true);
    fetch("/.netlify/functions/add-boop", {
      method: "POST",
      body: JSON.stringify({ id: corgi.id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setBoobCount(data.updated.count);
      });
    setBoobCount((p) => p + 1);
    setIsBooping(false);
  };

  return (
    <li className={corgiStyles}>
      <div className={cx(corgiHeaderStyles, "header-img")}>
        <img src={corgi.url} alt={corgi.alt} />
        <small>Photo by {corgi.credit}</small>
      </div>
      <div className={bodyStyles}>
        <p>{corgi.name}</p>
        <p>favorite-song: {corgi.favoriteSong}</p>
        <button onClick={(e) => handleBoop(e)} data-id={corgi.id} disabled={isBooping}>
          {isBooping ? "hold on booping" : "boop " + boobCount + " times"}
        </button>
      </div>
    </li>
  );
};
