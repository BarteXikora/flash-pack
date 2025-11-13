import styled from 'styled-components'

const StyledTopBarLogo = styled.div`
    display: flex;
    align-items: center;
    gap: ${p => p.theme.gap.small};
    margin-left: ${p => p.theme.gap.big};

    h1 {
        ${p => p.theme.text.title}
        margin: 0;
        padding: 0;
    }
`

export default StyledTopBarLogo