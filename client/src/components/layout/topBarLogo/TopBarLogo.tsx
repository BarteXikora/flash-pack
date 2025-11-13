import StyledTopBarLogo from './TopBarLogo.styles'
import logo from '@assets/icon-logo.svg'

const TopBarLogo = () => {
    return (
        <StyledTopBarLogo>
            <img src={logo} alt="FlashPack" />

            <h1>FlashPack</h1>
        </StyledTopBarLogo>
    )
}

export default TopBarLogo