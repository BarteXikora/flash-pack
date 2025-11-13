import styled from 'styled-components'

const StyledSectionTitle = styled.h2`
    ${p => p.theme.text.section};
    margin: 0;
    padding: 0;
    margin-bottom: ${p => p.theme.gap.medium};
`

export default StyledSectionTitle