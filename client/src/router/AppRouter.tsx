import { BrowserRouter, Routes, Route } from 'react-router-dom'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={'Home Page'} />

                <Route path='*' element={'404'} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter