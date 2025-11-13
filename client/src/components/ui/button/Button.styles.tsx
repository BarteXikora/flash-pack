import styled, { css } from 'styled-components'
import type ButtonProps from './button.types'

const StyledPrimary = css`
    background-color: ${p => p.theme.color.primary};
    font-weight: 900;
`

const StyledSecondary = css`
    background-color: ${p => p.theme.color.grayDark};
`

const StyledBig = css`
    height: 4rem;
`

const StyledSmall = css`
    height: 3.25rem;
`

const StyledFullWidth = css`
    width: 100%;
`

const StyledNarrowWidth = css`
    min-width: 80%;
`

const StyledDisabled = css`
    background-color: ${p => p.theme.color.grayDark};
    color: ${p => p.theme.color.grayLight};
`

const StyledButton = styled.button<ButtonProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-wrap: nowrap;
    white-space: nowrap;
    gap: ${p => p.theme.gap.small};
    border: none;
    border-radius: ${p => p.theme.borderRadius.big};
    color: ${p => p.theme.color.white};
    padding: 0 ${p => p.theme.gap.big};
    max-width: 100%;
    margin: 0 auto;

    ${p => p.theme.text.body};

    ${p => p.$variant === 'primary' && StyledPrimary};
    ${p => p.$variant === 'secondary' && StyledSecondary};

    ${p => p.$size === 'big' && StyledBig};
    ${p => (!p.$size || p.$size === 'small') && StyledSmall};

    ${p => (!p.$width || p.$width === 'full') && StyledFullWidth};
    ${p => p.$width === 'narrow' && StyledNarrowWidth};

    ${p => p.disabled && StyledDisabled};

    span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`

export default StyledButton