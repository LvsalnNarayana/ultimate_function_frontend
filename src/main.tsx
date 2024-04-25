import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { generateThemeOptions } from "./theme"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CrudApp from "./features/CRUD/CrudApp"
import EmailSystem from "./features/EmailSystem/EmailSystem"
import SubscriptionSystem from "./features/SubscriptionSystem/SubscriptionSystem"
import AuthProvider from "./auth/AuthWrapper"
import Login from "./auth/Login"
import Register from "./auth/Register"
import ProtectedRoute from "./auth/ProtectedRoute"
import { Toaster } from "react-hot-toast"

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
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <AuthProvider>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/" element={<App />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/CRUD" element={<CrudApp />} />
                  <Route path="/email-system" element={<EmailSystem />} />
                  <Route
                    path="/subscription-system"
                    element={<SubscriptionSystem />}
                  />
                </Route>
              </Routes>
              <Toaster/>
            </AuthProvider>
            <CssBaseline />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
