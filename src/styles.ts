import { createGlobalStyle } from "styled-components";

export const colors = {
    textBlack: '#000000',
    textWhite: '#ffffff',
    textGray: '#555555',
    btnGray: '#353535',
    bgWhite: '#fafafa',
    borderGray: '#a3a3a3'
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        list-style: none;
    }

    a {
        text-decoration: none;
        color: ${colors.textBlack};
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        padding: 0 1rem;

        ul {
            display: flex;
            gap: 2rem;
            justify-content: space-between;
        }
    }

    section, footer {
        padding: 4rem 0;
    }
`
