import type { ReactNode } from "react"
import { createContext, useContext, useMemo } from "react"
import { useGetSessionQuery } from "./authApiSlice"
import { Stack, Typography } from "@mui/material"
interface AuthContextType {
  session: any
  loading: boolean
  error: boolean
  success: boolean
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  loading: false,
  error: false,
  success: false,
})

const AuthProvider = (props: { children: ReactNode }) => {
  const {
    data: sessionData,
    isFetching: sessionLoading,
    isError: sessionError,
    isSuccess: sessionSuccess,
  } = useGetSessionQuery({})

  const contextValue: AuthContextType = useMemo(
    () => ({
      session: sessionData,
      loading: sessionLoading,
      error: sessionError,
      success: sessionSuccess,
    }),
    [sessionData, sessionError, sessionLoading, sessionSuccess],
  )
  return (
    <>
      <AuthContext.Provider value={contextValue}>
        {sessionLoading ? (
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
        ) : (
          <>{props.children}</>
        )}
      </AuthContext.Provider>
    </>
  )
}

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext)
}
