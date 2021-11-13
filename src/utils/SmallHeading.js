import React from "react";
import styled from "styled-components";

const SmallHeading = ({ title, identifier }) => {
  return (
    <SmallHeadingStyled>
      <h3 className={identifier}>{title}</h3>
    </SmallHeadingStyled>
  );
};

const SmallHeadingStyled = styled.div`
  h3 {
    background: linear-gradient(
      120deg,
      rgba(74, 91, 237, 1) 0%,
      rgba(143, 10, 133, 1) 27%,
      rgba(255, 0, 155, 1) 100%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    cursor: pointer;
    text-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
    display: inline-block;
  }
  /* h3 {
    background: linear-gradient(
      120deg,
      rgba(74, 91, 237, 1) 0%,
      rgba(114, 9, 121, 1) 35%,
      rgba(255, 0, 121, 1) 100%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  } */
`;
export default SmallHeading;
