import { css } from 'styled-components'
import { DefaultTheme } from 'styled-components'

const color = {
    black: '#293A53',
    grayDark: '#384B66',
    grayLight: '#7D91AE',
    white: '#F6FAFF',
    primary: '#FF7280',
    secondary: '#00E1C6'
}

const __fontSize = {
    title: '1.25rem',
    default: '1rem'
}

const textTitle = css`
    font-size: ${__fontSize.title};
    font-weight: 900;
`

const textSection = css`
    font-size: ${__fontSize.default};
    font-weight: 700;
`

const textBody = css`
    font-size: ${__fontSize.default};
    font-weight: 400;
`

const text = {
    title: textTitle,
    section: textSection,
    body: textBody
}

const gap = {
    extraBig: '2.5rem',
    big: '1.5rem',
    medium: '1rem',
    small: '0.5rem',
    extraSmall: '0.25rem'
}

const borderRadius = {
    big: '1.25rem',
    small: '0.625rem'
}

const theme: DefaultTheme = { color, text, gap, borderRadius }

export default theme