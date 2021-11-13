import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../Layout/Layout";
import MainTitle from "../utils/MainTitle";
import SellerCard from "../utils/SellerCard";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import GradientSections from "./GradientSections";

const BodyContent = ({ title }) => {
  return (
    <BodyContentStyled>
      <InnerLayout>
        <div className="titleContainer">
          <MainTitle
            title={"Top Sellers of this Month"}
            subtitle={"All Entrepreneurs"}
          />
        </div>
        <div className="sellercards">
          <SellerCard />
          <SellerCard />
          <SellerCard />
        </div>
        <BlogSection />
        <GradientSections />
        <ContactSection />
      </InnerLayout>
      <footer>
        <p>Copyright &copy; Digital Currencies . All rights reserved</p>
      </footer>
    </BodyContentStyled>
  );
};

const BodyContentStyled = styled.main`
  .sellercards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
    margin: 2rem 0;
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border-top: 1px dashed rgba(255, 255, 255, 0.08);
    background-color: #020a27;

    p {
      color: rgba(255, 255, 255, 0.3);
      font-size: 0.9rem;
    }
  }
`;
export default BodyContent;
