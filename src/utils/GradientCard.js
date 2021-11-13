import React from "react";
import styled from "styled-components";
import time from "../assets/images/time.svg";
import heart from "../assets/images/heart.svg";
import CustomButton from "./CustomButton";

const GradientCard = ({ avatar, title, price, name, image, customButton }) => {
  return (
    <GradientCardStyled>
      <div className="gCard">
        <div className="inner-content">
          <div className="cardImg">
            <img src={image} alt="" />
            <div className="name">
              <img src={avatar} alt="" />
              <p>{name}</p>
            </div>
          </div>
          <div className="cardContent">
            <h6 className="cardTitle">{title}</h6>
            <p>
              Price : <span className="price">{price}</span> &nbsp; &nbsp;
              <span className="l-text"> 3 of 15</span>
            </p>
            <p>
              Highest BID : &nbsp; <span className="price">{price}</span>{" "}
            </p>
            <div className="duration">
              <p>
                <img src={time} alt="" />7 hours ago
              </p>
              <p>
                <img src={heart} alt="" />
                156 likes
              </p>
            </div>
          </div>
          <div className="titleContainer">
            <CustomButton name={"More"} />
          </div>
        </div>
      </div>
    </GradientCardStyled>
  );
};

const GradientCardStyled = styled.div`
  font-size: 1rem;
  transition: all 0.4s ease-in-out;
  border-radius: 20px;
  background: linear-gradient(90deg, #7f41db 0%, #022894 100%);
  &:hover {
    animation: gradient 1s infinite;
    cursor: pointer;
  }
  @keyframes gradient {
    0% {
      background: linear-gradient(90deg, #7f41db 0%, #022894 100%);
    }
    50% {
      background: linear-gradient(130deg, #eb3fa9, #395ff6 50%, #eb3fa9);
    }
    70% {
      background: linear-gradient(130deg, #eb3fa9, #395ff6 50%, #eb3fa9);
    }
    100% {
      background: linear-gradient(90deg, #7f41db 0%, #022894 100%);
    }
  }
  .gCard {
    margin: 0.2rem;
    .inner-content {
      background: #091026;
      border-radius: 20px;
      padding: 0.8rem;
      .cardImg {
        position: relative;
        width: 100%;
        img:first-child {
          width: 100%;
          object-fit: cover;
          height: 300px;
          border-radius: 10px;
        }
        .name {
          position: absolute;
          left: 50%;
          bottom: -26px;
          background-color: #03091f;
          display: flex;
          align-items: center;
          border-radius: 50px;
          transform: translateX(-50%);
          width: 75%;
          padding: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.8);
          &:hover {
            background: linear-gradient(130deg, #395ff6, #eb3fa9);
            transition: all 0.4s ease-in-out;
          }
          img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            margin-right: 2rem;
          }
        }
      }
      .cardContent {
        padding-top: 3rem;
        .cardTitle {
          font-size: 1.3rem;
          font-weight: 500;
          padding: 0.6rem;
        }
        .price {
          color: #6bbe92;
        }
        .l-text {
          opacity: 0.5;
        }
        .duration {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px dashed rgba(255, 255, 255, 0.2);
          display: flex;
          justify-content: space-between;
          p {
            display: flex;
            align-items: center;
            font-size: 0.8rem;
            img {
              object-fit: cover;
              width: 18px;
              margin-right: 0.6rem;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
      }
    }
  }
`;

export default GradientCard;
