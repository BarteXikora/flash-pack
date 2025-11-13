import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainView from '@components/layout/mainView/MainView'
import HomePage from '@pages/homePage/HomePage'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainView />}>
                    <Route path='' element={<HomePage />} />

                    <Route path='*' element={'404'} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter