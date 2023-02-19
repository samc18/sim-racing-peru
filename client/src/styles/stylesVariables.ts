export const colors: { accent: string, background: string, text: string, icon: string } = {
    accent: '#dc070d',
    background: '#201e1e',
    text: '#fff',
    icon: '#c5c5c5',
}

export const fonts: { regular: string, bold: string } = {
    regular: 'Dameron',
    bold: 'Dameron Bold',
}

export const fontSizes: { 300: string } = {
    300: '1.5rem',
}

export const breakPoints: { tablet: string, desktop: string } = {
    tablet: '850px',
    desktop: '1260px',
}

export const mediaQueryMargins: string = `
    display: grid;
    grid-template-columns: 2em 1fr 2em;

    @media (min-width: ${breakPoints.tablet}) {
        grid-template-columns: 5em 1fr 5em;
    }
`
