import { Stack, Typography } from "@mui/material"
import React from "react"
import Message from "./Message"

const MessageContainer = () => {
  return (
    <Stack
      flexGrow={1}
      sx={{ width: "100%" }}
      direction={"column"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
    >
      <Typography>User 1</Typography>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </Stack>
  )
}

export default MessageContainer
