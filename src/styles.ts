import { createGlobalStyle } from "styled-components";

export const colors = {
  textBlack: "#000000",
  textWhite: "#ffffff",
  textGray: "#555555",
  btnGray: "#353535",
  bgWhite: "#fafafa",
  borderGray: "#a3a3a3",
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        list-style: none;

        @media screen and (max-width: 768px) {
            font-size: 16px;
        }
    }

    html {
        scroll-behavior: smooth;
    }


    a {
        text-decoration: none;
        color: ${colors.textBlack};
    }

    .container {
        max-width: 1124px;
        width: 100%;
        margin: 0 auto;
        padding: 0 1.5rem;

        ul {
            display: flex;
            gap: 2rem;
            justify-content: space-between;
        }
    }

    section, footer {
        position: relative;
        padding: 6rem 0;

        @media screen and (max-width: 768px) {
            padding: 4rem 0;
        }
    }
`;
