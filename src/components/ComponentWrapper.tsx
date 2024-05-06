import type React from "react"
import { Stack, Typography, Divider } from "@mui/material"

const ComponentWrapper = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <Stack
      sx={{ px: 4, py: 2, width: "100%" }}
      gap={2}
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Typography variant="h6" sx={{ fontWeight: "semibold" }}>
        {title}
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} />
      {children}
    </Stack>
  )
}

export default ComponentWrapper
