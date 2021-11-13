import React from "react";
import styled from "styled-components";
import SmallHeading from "../utils/SmallHeading";
import Navigation from "./Navigation";
import blockchain from "../assets/images/bchain.png";
import CustomButton from "../utils/CustomButton";

const MainContent = () => {
  return (
    <MainContentStyled>
      <Navigation />
      <div className="content">
        <div className="left">
          <SmallHeading
            title={"All Digital Currencies in One Place"}
            identifier={"Before"}
          />
          <h1>
            All NFTs You need in One Marketplace The best Place to collect, Buy
            and sell <span className="GradientText">Awesome NFTs</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            nisi rerum, labore harum quos officia error mollitia odit minima
            suscipit rem architecto, magni, nesciunt sit! Maiores consectetur
            mollitia suscipit cum?
          </p>
          <div className="btnContainer">
            <CustomButton name={"discover more"} />
            <CustomButton name={"get help"} />
          </div>
        </div>
        <div className="right">
          <img src={blockchain} alt="blockchain" />
        </div>
      </div>
    </MainContentStyled>
  );
};

const MainContentStyled = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 80%;
  height: 100%;
  transform: translateX(-50%);
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    width: 100%;
    .btnContainer {
      margin-top: 2rem;
      width: 100%;
      padding: 2rem 0.5rem;
    }
    .left {
      display: flex;
      align-items: center;
      flex-direction: column;
      align-items: center;
      h1 {
        padding: 1.8rem 0;
        text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
      }
    }
    .right {
      img {
        position: absolute;
        right: -11%;
        bottom: -1%;
      }
    }
  }
`;
export default MainContent;
