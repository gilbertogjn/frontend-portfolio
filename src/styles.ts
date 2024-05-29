import { createGlobalStyle } from "styled-components";

export const colors = {
    textGray: '#555555',
    btnGray: '#353535'
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
    }

    .container {
        max-width: 1024px;
        margin: 0 auto;
        padding: 0 1rem;

        ul {
            display: flex;
            gap: 2rem;
            justify-content: space-between;
        }
    }
`
