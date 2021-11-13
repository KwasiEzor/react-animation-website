import React from "react";
import styled from "styled-components";

const CustomButton = ({ name }) => {
  return <CustomButtonStyled>{name}</CustomButtonStyled>;
};

const CustomButtonStyled = styled.button`
  text-transform: uppercase;
  outline: none;
  border: none;
  padding: 0.9rem 1.5rem;
  letter-spacing: 1px;
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.4s ease-in-out;
  border-radius: 70px;
  cursor: pointer;
  background: linear-gradient(130deg, #395ff6, #eb3fa9);
  &:last-child {
    margin-left: 1.5rem;
  }
  &:hover {
    transition: all 0.4s ease-in-out;
    background: linear-gradient(120deg, #eb3fa9, #395ff6);
  }
`;
export default CustomButton;
