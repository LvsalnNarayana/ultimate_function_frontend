import type React from "react"
import ComponentWrapper from "../../components/ComponentWrapper"
import type { ChangeEvent} from "react";
import { useState } from "react"
import { Button, Stack, TextField, Typography } from "@mui/material"

const SessionManagement: React.FC<{ title: string }> = ({ title }) => {
  const [sessionValue, setSessionValue] = useState("")
  return (
    <ComponentWrapper title={title}>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
        sx={{ width: "100%" }}
      >
        <Typography variant="body1" sx={{ width: 700 }} textAlign={"center"}>
          This value is added to your session on this browser this variable can
          not be found in another login session. This value will disappear after
          logout
        </Typography>
        <TextField
          value={sessionValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSessionValue(e.target.value)
          }
          sx={{ width: 500 }}
          size="small"
          placeholder="Enter your text here"
          id="session-value-input"
          name="session-value-input"
          type="text"
        />
        <Button variant="contained" color="secondary" sx={{ width: 250 }}>
          Save
        </Button>
      </Stack>
    </ComponentWrapper>
  )
}

export default SessionManagement
