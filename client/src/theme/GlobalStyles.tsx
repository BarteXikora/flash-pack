import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    html, body, #root {
        margin: 0;
        padding: 0;
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 16px;
        background-color: ${p => p.theme.color.black};
        color: ${p => p.theme.color.white};
    }

    .accent-primary {
        color: ${p => p.theme.color.primary};
    }

    .accent-secondary {
        color: ${p => p.theme.color.secondary};
    }
`

export default GlobalStyles