import { CloseOutlined } from "@mui/icons-material"
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material"

const Notification = () => {
  const theme = useTheme()
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={3}
      sx={{
        p: 1.5,
        width: "100%",
        borderRadius: 2,
        boxShadow: 1,
        backgroundColor: "#f1f1f1",
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          width: "50px",
          height: "50px",
          borderRadius: "100%",
          backgroundColor: theme.palette.secondary.main,
        }}
      />
      <Typography
        sx={{
          flexGrow: 1,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        This is a test Notification. Stored in database.
      </Typography>
      <IconButton disableRipple>
        <CloseOutlined />
      </IconButton>
    </Stack>
  )
}

export default Notification
