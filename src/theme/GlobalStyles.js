import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        font-family: 'Poppins', sans-serif;
        font-size: 62.5%; 
    }

    button, input {
        font-family: 'Poppins', sans-serif;
        padding: 0;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyles;
