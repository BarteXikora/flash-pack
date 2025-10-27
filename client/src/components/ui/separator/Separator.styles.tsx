import styled from 'styled-components'

const StyledSeparator = styled.hr`
    margin: ${p => p.theme.gap.extraBig} auto;
    width: 4.5rem;
    border: none;
    border-top: 1.5px solid ${p => p.theme.color.grayLight};
`

export default StyledSeparator