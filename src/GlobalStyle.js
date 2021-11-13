import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        list-style: none;
        box-sizing: border-box;
    }
    body{
        background-color: #03091F;
        font-family: 'Montserrat',sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
        color: #fff;
        ::-webkit-scrollbar{
            width: 8px;
        }
        ::-webkit-scrollbar-track{
            background-color: #ccc;
        }
        ::-webkit-scrollbar-thumb{
            background: linear-gradient(180deg, #7F41DB 0%, #022894 100%);
            border-radius: 24px;
        }
    }
    a{
        color: inherit;
        font-family: inherit;
        text-decoration: none;
    }
    p{
        line-height: 2rem;
    }
    .Before{
        position: relative;
        padding-left: 3rem;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            width: 35px;
            height: 5px;
            background: linear-gradient(
                120deg,
                rgba(74, 91, 237, 1) 0%,
                rgba(143, 10, 133, 1) 27%,
                rgba(255, 0, 155, 1) 100%
             );
        }
    }
    .GradientText{
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
    .titleContainer{
        margin: 0 auto;
        text-align: center;
        width: calc(100% - 4rem);
    }
    .gradientCardContainer{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(16rem,1fr));
        grid-gap: 1rem;
        margin: 2rem 0;
    }
`;

export default GlobalStyle;
