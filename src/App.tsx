import { Container, Stack, Typography } from "@mui/material"

const App = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography>Welcome to Ultimate Function</Typography>
        </Stack>
      </Container>
    </>
  )
}

export default App
