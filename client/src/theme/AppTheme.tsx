import { ThemeProvider } from 'styled-components'
import GlobalStyles from './GlobalStyles'
import theme from './theme'
import { type ReactNode } from 'react'

const AppTheme = ({ children }: { children: ReactNode }) => {
    return <ThemeProvider theme={theme}>
        <GlobalStyles />

        {children}
    </ThemeProvider>
}

export default AppTheme