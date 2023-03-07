import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
        font-family: 'Noto Sans KR', sans-serif;
    }

    body, h1, h2, p, button, ul, li {
        margin: 0px;
        padding: 0px;
        border: 0;
    }

    h1, h2 {
        font-weight: normal
    }

    ul {
        list-style-type: none
    }

    button {
        background-color: white;
    }
`;

export default GlobalStyle;
