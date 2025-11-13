import styled from 'styled-components'

const StyledBadge = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -0.5rem;
    right: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${p => p.theme.color.black};
    border-radius: 50%;

    .badge {
        width: 0.875rem;
        height: 0.875rem;
        border-radius: 50%;
        background-color: ${p => p.theme.color.primary};

        &--outline {
            background-color: ${p => p.theme.color.black};
            box-sizing: border-box;
            border: 0.188rem solid ${p => p.theme.color.primary};
        }
    }
`

export default StyledBadge