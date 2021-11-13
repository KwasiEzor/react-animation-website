import React from "react";
import styled from "styled-components";
import SmallHeading from "./SmallHeading";

const MainTitle = ({ title, subtitle, paragraph }) => {
  return (
    <MainTitleStyled>
      <SmallHeading title={subtitle} identifier={"Before"} />
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </MainTitleStyled>
  );
};
const MainTitleStyled = styled.div`
  h2 {
    padding-top: 1rem;
    font-weight: 500;
  }
  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.4);
  }
`;
export default MainTitle;
