import StyledMainView from './MainView.style'

import TopBar from '../topBar/TopBar'
import { Outlet } from 'react-router-dom'

const MainView = () => {
    return (
        <StyledMainView>
            <TopBar isHome={true} />

            <main className='main'>
                <Outlet />
            </main>
        </StyledMainView>
    )
}

export default MainView