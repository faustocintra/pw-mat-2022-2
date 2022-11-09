import TopBar from './ui/TopBar'
import { createTheme, ThemeProvider } from '@mui/material'
import Box from '@mui/material/Box'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { yellow, pink } from '@mui/material/colors'

const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: yellow[500]
    },
    secondary: {
      main: pink[500]
    }
  }
})

function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Box sx={{ 
            minHeight: '100vh', 
            backgroundColor: customTheme.palette.background.default
          }}>
            <BrowserRouter>
              
              <TopBar />

              <Box component="main" sx={{ m: 24 /* margin: '24px '*/ }}>
                
              </Box>
            
            </BrowserRouter>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
