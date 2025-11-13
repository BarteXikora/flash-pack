import styled from 'styled-components'

const StyledBoxButton = styled.div`
    button {
        flex-direction: column;
        height: fit-content;
        align-items: start;
        padding: ${p => p.theme.gap.medium + ' ' + p.theme.gap.big};
        gap: ${p => p.theme.gap.extraSmall};
        margin-bottom: ${p => p.theme.gap.medium};
        width: 100%;

        h3, span {
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100%;
        }

        h3 {
           margin: 0;
            ${p => p.theme.text.title};
        }

        span {
            ${p => p.theme.text.body};
        }

        .warning {
            margin-top: ${p => p.theme.gap.small};
        }

        &.box-done {
            color: ${p => p.theme.color.grayLight};
        }
    }
`

export default StyledBoxButton