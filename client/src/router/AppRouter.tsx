import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainView from '../components/layout/mainView/MainView'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainView />}>
                    <Route path='' element={'Home Page'} />

                    <Route path='*' element={'404'} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter