import React from "react";
import styled from "styled-components";
import data from "../data";
const SellerCard = () => {
  return (
    <SellerCardStyled>
      {data &&
        data.map((item) => (
          <div className="sellerCard" key={item.id}>
            <div className="number">
              <p>0 {item.id}</p>
            </div>
            <div className="profile">
              <img src={item.image} alt="profile image" />
              <div className="text">
                <h4>{item.name}</h4>
                <p>{item.currency}</p>
              </div>
            </div>
          </div>
        ))}
    </SellerCardStyled>
  );
};

const SellerCardStyled = styled.div`
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    transition: all 0.4s ease-in-out;
  }
  .sellerCard {
    display: flex;
    align-items: center;
    padding: 1.5rem 1rem;
    margin: 1rem 0;
    .number {
      padding-right: 1rem;
      font-size: 1.6rem;
      opacity: 0.5;
      p {
        font-weight: 700;
      }
    }
    .profile {
      display: flex;
      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-right: 1rem;
        object-fit: cover;
        border: 2px solid rgba(255, 255, 255, 0.5);
      }
    }
  }
`;

export default SellerCard;
