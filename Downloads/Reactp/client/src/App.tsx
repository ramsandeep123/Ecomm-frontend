import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Box } from "@mui/system"
import Navbar from "./scences/navbar"
import DashBoard from "./scences/dashboard"
import Predictions from "./scences/predications"

function App() {

  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <div className="app">

      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>

              <Route path="/" element={<DashBoard />}></Route>
              <Route path="/prediction" element={<Predictions />}></Route>


            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>

  )
}

export default App
