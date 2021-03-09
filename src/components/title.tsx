import { css, cx } from "@emotion/css";
import React from "react";

interface TitleProps {
  title: string;
  subTitle?: string;
  className?: string;
}

const styles = css`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0.3rem;
      left: 0;
      background-color: var(--primary);
      width: 95%;
      height: 0.4rem;
      transform: rotate(-2deg);
    }
  }
`;

const Title: React.FC<TitleProps> = ({ title, subTitle, className }) => {
  return (
    <section className={cx(styles, className)}>
      <h1>{title}</h1>
      {subTitle && <h3>{subTitle}</h3>}
    </section>
  );
};
export default Title;
