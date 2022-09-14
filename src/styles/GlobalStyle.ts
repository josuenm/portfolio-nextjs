import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }


    ::-webkit-scrollbar {
        width: 7px;
        height: 0;
        border-radius: 3rem;
        background-color: #101010;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #454545;
        border-radius: 3rem;
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: #000;
        color: #fff
    }

    h1, h2, h3, h4, h5, h6, span, p {
        font-size: 16px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    a, button, input[type="submit"] {
        cursor: pointer;
    }
`;

export default GlobalStyle;
