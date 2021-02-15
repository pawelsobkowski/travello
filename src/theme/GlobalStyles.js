import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        font-family: 'Poppins', sans-serif;
    }

    button, input {
        font-family: 'Poppins', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
