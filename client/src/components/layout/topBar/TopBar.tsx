import StyledTopBar from './TopBar.styles'
import TopBarLogo from '@components/layout/topBarLogo/TopBarLogo'

import iconArrowLeft from '@assets/icon-arrow-left.svg'
import iconHamburger from '@assets/icon-hamburger.svg'

import type TopBarProps from './topBar.types'

const TopBar = (props: TopBarProps) => {
    return (
        <StyledTopBar>
            {
                props.isHome
                    ? <TopBarLogo />
                    : <div className="top-bar__content">
                        <button className='top-bar__btn' onClick={props.backBtnClickHandler}>
                            <img src={iconArrowLeft} alt='Wróć' />
                        </button>

                        <h2 className='top-bar__title'>{props.title}</h2>
                    </div>
            }

            <button className='top-bar__btn'>
                <img src={iconHamburger} alt='Otwórz menu' />
            </button>
        </StyledTopBar>
    )
}

export default TopBar