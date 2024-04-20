import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import { CssBaseline, Stack, ThemeProvider, createTheme } from "@mui/material"
import { generateThemeOptions } from "./theme"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import CrudApp from "./features/CRUD/CrudApp"
import EmailSystem from "./features/EmailSystem/EmailSystem"
import SubscriptionSystem from "./features/SubscriptionSystem/SubscriptionSystem"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)
  const theme = createTheme(
    generateThemeOptions({
      mode: "light",
    }),
  )
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Stack
              direction={"row"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              sx={{ width: "100%", minHeight: "100vh" }}
            >
              <Sidebar />
              <Stack
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                sx={{ width: "100%", maxHeight: "100vh", overflowY: "auto" }}
              >
                <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="/CRUD" element={<CrudApp />} />
                  <Route path="/email-system" element={<EmailSystem />} />
                  <Route
                    path="/subscription-system"
                    element={<SubscriptionSystem />}
                  />
                </Routes>
              </Stack>
            </Stack>
            <CssBaseline />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
