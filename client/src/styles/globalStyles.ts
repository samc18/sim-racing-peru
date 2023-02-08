import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    html, body {
        height: 100%;
    }

    body {
        line-height: 1.5;
        font-family: 'Dameron', serif;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }
    
    @font-face {
        src: url('/fonts/dameron.ttf');
        font-family: 'Dameron';
    }

    @font-face {
        src: url('/fonts/dameron-bold.ttf');
        font-family: 'Dameron Bold';
    }

    a {
        text-decoration: none;
    }
`

export default GlobalStyle
