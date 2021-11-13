import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo2.png";
const Navigation = () => {
  return (
    <NavigationStyled>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav-items">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">FAQs</a>
        </li>
        <li>
          <a href="#">Activity</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <button className="primary-btn">GET CONNECTED</button>
      </ul>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav-items {
    display: flex;
    align-items: center;
    li {
      margin: 0 1rem;
      a:focus,
      a:hover {
        color: #ce44b6;
        transition: all 0.4s ease-in-out;
      }
    }
    .primary-btn {
      margin-left: 3rem;
      background-color: rgba(57, 95, 246, 0.6);
      outline: none;
      border: 2px solid transparent;
      padding: 0.6rem 1rem;
      border-radius: 70px;
      cursor: pointer;
      color: inherit;
      font-family: inherit;
      font-weight: bold;
      letter-spacing: 1px;
      transition: all 0.4s ease-in-out;
      &:hover {
        background-color: rgba(57, 95, 246, 1);
        border: 2px solid #ce44b6;
      }
    }
  }
  .logo {
    img {
      width: 50px;
    }
  }
`;

export default Navigation;
