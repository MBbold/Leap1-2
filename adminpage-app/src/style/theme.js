import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useMemo } from 'react';




export function CustomTheme({ children }) {
    const Theme = useMemo(() => createTheme({
        palette: {
            primary: {
                main: '#000',
                light: '#fff'
            },
            secondary: {
                light: '#0066ff',
                main: '#0044ff',
                // contrastText: '#ffcc00',
            },
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
    }), []);
    return (
        <ThemeProvider theme={Theme}>
            {children}
        </ThemeProvider>
    );
}