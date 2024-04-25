import { Stack, Typography } from "@mui/material"
import Sidebar from "../components/Sidebar"
import { useAuth } from "./AuthWrapper"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
  const {
    loading: sessionLoading,
    error: sessionError,
    success: sessionSuccess,
  } = useAuth()
  return (
    <>
      {!sessionLoading && sessionSuccess && !sessionError && (
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
      {sessionLoading && !sessionSuccess && !sessionError && (
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ minHeight: "100vh", maxHeight: "100vh", overflow: "hidden" }}
        >
          <Typography
            variant="body1"
            sx={{ pb: 3, fontSize: "24px", textAlign: "center" }}
            className="source-code-pro"
          >
            {"<Ultimate_function/>"}
          </Typography>
          <Typography variant="body1">Loading...</Typography>
        </Stack>
      )}
      {!sessionLoading && !sessionSuccess && sessionError && (
        <Navigate to={"/login"} />
      )}
    </>
  )
}

export default ProtectedRoute
