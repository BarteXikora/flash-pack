import styled from 'styled-components'

const StyledProgressBar = styled.div`
    display: flex;
    width: 100%;
    height: 1.9rem;
    border-radius: ${p => p.theme.borderRadius.big};
    background-color: ${p => p.theme.color.grayDark};

    .progress-bar {
        &__data-wrapper {
            background-color: ${p => p.theme.color.primary};
            border-top-left-radius: ${p => p.theme.borderRadius.big};
            border-bottom-left-radius: ${p => p.theme.borderRadius.big};
        }

        &__data {
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: center;
            background-color: ${p => p.theme.color.white};
            padding: 0 ${p => p.theme.gap.medium};
            border-radius: ${p => p.theme.borderRadius.big};
            color: ${p => p.theme.color.black};
            font-weight: 700;
        }

        &__progress-wrapper {
            flex-grow: 1;
        }

        &__progress {
            height: 100%;
            min-width: ${p => p.theme.borderRadius.big};
            background-color: ${p => p.theme.color.primary};
            border-top-right-radius: ${p => p.theme.borderRadius.big};
            border-bottom-right-radius: ${p => p.theme.borderRadius.big};
            flex-shrink: 1;
        }
    }

    &.progress-bar--secondary .progress-bar {
        &__data-wrapper {
            background-color: ${p => p.theme.color.secondary};
        }

        &__progress {
            background-color: ${p => p.theme.color.secondary};
        }
    } 
`

export default StyledProgressBar