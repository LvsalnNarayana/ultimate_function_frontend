import { Button, Container, Stack, Typography } from "@mui/material"
import { useLogoutMutation } from "./auth/authApiSlice"
// import { useNavigate } from "react-router-dom"

const App = () => {
  // const navigate = useNavigate()
  const [logout] = useLogoutMutation()

  const handleLogout = () => {
    logout({})
  }
  return (
    <>
      <Container maxWidth="xl">
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography>Welcome to Ultimate Function</Typography>
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </Stack>
      </Container>
    </>
  )
}

export default App
