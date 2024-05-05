import type { ChangeEvent } from "react"
import { useState } from "react"
import {
  Card,
  Stack,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Button,
} from "@mui/material"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { Link, useNavigate } from "react-router-dom"
import { authApiSlice, useLoginMutation } from "./authApiSlice"
import { useAuth } from "./AuthWrapper"
import { useAppDispatch } from "../app/hooks"

const Login = () => {
  const { session } = useAuth()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState("narayanalvsaln@example.com")
  const [password, setPassword] = useState("admin1234")
  const [showPassword, setShowPassword] = useState(false)
  const [login] = useLoginMutation()
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const handleLogin = () => {
    login({ email, password })
      .unwrap()
      .then(result => {
        navigate("/")
      })
  }
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh", minWidth: "100vw", overflow: "hidden" }}
    >
      <Card sx={{ p: 2, borderRadius: 4, width: 400 }}>
        {session?.user === undefined || session?.user === null ? (
          <>
            <Typography
              variant="body1"
              sx={{ pb: 3, fontSize: "24px", textAlign: "center" }}
              className="source-code-pro"
            >
              {"<Ultimate_function/>"}
            </Typography>
            <Typography sx={{ mb: 1 }} variant="body1">
              Email
            </Typography>
            <TextField
              sx={{ width: "100%" }}
              size="small"
              placeholder="Enter your email"
              id="login_email"
              name="login_email"
              type="text"
              value={email}
              onChange={handleEmailChange}
            />
            <Typography sx={{ mt: 3, mb: 1 }} variant="body1">
              Password
            </Typography>
            <TextField
              sx={{ width: "100%" }}
              size="small"
              placeholder="Enter your password"
              id="login_password"
              name="login_password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              onClick={handleLogin}
              variant="contained"
              sx={{ my: 3, width: "100%" }}
            >
              Login
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              Don't have an account? <Link to={"/register"}>Register</Link>
            </Typography>
          </>
        ) : (
          <>
            <Typography sx={{ py: 4 }} textAlign={"center"} variant={"body1"}>
              You are already logged in
            </Typography>
            <Link
              style={{ width: "100%", display: "block", textAlign: "center" }}
              to={"/"}
            >
              Home
            </Link>
          </>
        )}
      </Card>
    </Stack>
  )
}

export default Login
