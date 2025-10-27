import styled from 'styled-components'

const StyledTopBar = styled.header`
    position: sticky;
    top: 0;
    width: 100%;
    height: 4.375rem;
    background-color: ${p => p.theme.color.black};
    display: flex;
    align-items: center;
    justify-content: space-between;

    .top-bar {
        &__content {
            display: flex;
            align-items: center;
        }

        &__btn {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 4.375rem;
            width: 4.375rem;
            background-color: transparent;
            border-radius: ${p => p.theme.borderRadius.small};
            border: none;

            &:active {
                background-color: ${p => p.theme.color.grayDark};
            }
        }

        &__title {
            ${p => p.theme.text.body}
        }
    }
`

export default StyledTopBar