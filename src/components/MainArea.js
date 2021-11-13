import React from "react";
import styled from "styled-components";
import backgroundVideo from "../assets/videos/marketing.mp4";
import circles from "../assets/images/circles.svg";
import { InnerLayout } from "../Layout/Layout";
import MainContent from "./MainContent";
const MainArea = () => {
  return (
    <MainAreaStyled>
      <video src={backgroundVideo} muted playsInline autoPlay loop></video>
      <img src={circles} alt="circles" className="overlay" />
      <InnerLayout>
        <MainContent />
      </InnerLayout>
    </MainAreaStyled>
  );
};

const MainAreaStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    right: -400px;
    top: -300px;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
`;
export default MainArea;
