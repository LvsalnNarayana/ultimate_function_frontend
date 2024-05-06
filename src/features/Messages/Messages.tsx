import type React from "react"
import ComponentWrapper from "../../components/ComponentWrapper"
import { Stack } from "@mui/material"
import MessageContainer from "./MessageContainer"

const Messages: React.FC<{ title: string }> = ({ title }) => {
  return (
    <ComponentWrapper title={title}>
      <Stack
        flexGrow={1}
        sx={{ width: "100%" }}
        direction={"row"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
      >
        <MessageContainer />
        <MessageContainer />
      </Stack>
    </ComponentWrapper>
  )
}

export default Messages
