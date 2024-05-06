import React, { ElementType, ReactNode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { generateThemeOptions } from "./theme"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthProvider from "./auth/AuthWrapper"
import Login from "./auth/Login"
import Register from "./auth/Register"
import ProtectedRoute from "./auth/ProtectedRoute"
import { Toaster } from "react-hot-toast"
import { sidebarItems } from "./components/Sidebar"
import { NavMenu } from "./utils/Interfaces"

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
                <Route path="/register" element={<Register />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/" element={<App />} />
                  {sidebarItems
                    ?.filter(
                      (item: any) =>
                        "route" in item &&
                        "component" in item &&
                        item?.route !== "" &&
                        item?.component !== null &&
                        item?.component !== undefined,
                    )
                    ?.map((item: NavMenu) => {
                      return (
                        <Route
                          key={item?.id}
                          path={`/${item?.route}`}
                          element={<item.component title={item?.title} />}
                        />
                      )
                    })}
                </Route>
              </Routes>
            </AuthProvider>
            <Toaster />
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
