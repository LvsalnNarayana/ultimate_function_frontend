import { Stack } from "@mui/material"
import Sidebar from "../components/Sidebar"
import { useAuth } from "./AuthWrapper"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
  const {
    session,
    loading: sessionLoading,
    error: sessionError,
    success: sessionSuccess,
  } = useAuth()

  return (
    <>
      {!sessionLoading &&
        sessionSuccess &&
        !sessionError &&
        (session?.user !== undefined || session?.user !== null) && (
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
              <Outlet />
            </Stack>
          </Stack>
        )}
      {!sessionLoading &&
        sessionSuccess &&
        !sessionError &&
        (session?.user === undefined || session?.user === null) && (
          <Navigate to={"/login"} />
        )}
    </>
  )
}

export default ProtectedRoute
