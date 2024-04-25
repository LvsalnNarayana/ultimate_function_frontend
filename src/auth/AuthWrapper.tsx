import type { ReactNode } from "react"
import { createContext, useContext, useMemo } from "react"
import { useGetSessionQuery } from "./authApiSlice"
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
    isLoading: sessionLoading,
    isError: sessionError,
    isSuccess: sessionSuccess,
  } = useGetSessionQuery({})
  const contextValue = useMemo(
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
        {props.children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext)
}
