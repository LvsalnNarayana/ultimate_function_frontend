import type React from "react"
import ComponentWrapper from "../../components/ComponentWrapper"
import NotificationsIcon from "@mui/icons-material/Notifications"
import {
  Badge,
  Button,
  Chip,
  Divider,
  IconButton,
  Popover,
  Stack,
  Typography,
} from "@mui/material"
import { useState } from "react"
import Notification from "./Notification"
import { DeleteOutline } from "@mui/icons-material"
const NotificationSystem: React.FC<{ title: string }> = ({ title }) => {
  /*
  ..######..########....###....########.########
  .##....##....##......##.##......##....##......
  .##..........##.....##...##.....##....##......
  ..######.....##....##.....##....##....######..
  .......##....##....#########....##....##......
  .##....##....##....##.....##....##....##......
  ..######.....##....##.....##....##....########
  */
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  /*
  .##.....##.########.########.##.....##..#######..########...######.
  .###...###.##..........##....##.....##.##.....##.##.....##.##....##
  .####.####.##..........##....##.....##.##.....##.##.....##.##......
  .##.###.##.######......##....#########.##.....##.##.....##..######.
  .##.....##.##..........##....##.....##.##.....##.##.....##.......##
  .##.....##.##..........##....##.....##.##.....##.##.....##.##....##
  .##.....##.########....##....##.....##..#######..########...######.
  */
  const handleNotificationOpen = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorEl(event.currentTarget)
  }

  const handleNotificationClose = () => {
    setAnchorEl(null)
  }
  return (
    <ComponentWrapper title={title}>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        gap={15}
        sx={{
          my: 10,
          width: "100%",
        }}
      >
        <IconButton
          disableRipple
          sx={{ color: "black" }}
          onClick={handleNotificationOpen}
        >
          <Badge color="secondary" badgeContent={4}>
            <NotificationsIcon fontSize="large" />
          </Badge>
        </IconButton>
        <Popover
          disablePortal
          elevation={1}
          id={"notification-popover-container"}
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleNotificationClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          PaperProps={{
            sx: {
              width: 450,
              borderRadius: 3,
              backgroundColor: "#fff",
            },
          }}
        >
          <Stack
            justifyContent={"flex-end"}
            alignItems={"flex-end"}
            sx={{ mb: 2, p: 1, pb: 0 }}
          >
            <Chip
              clickable
              onClick={() => {}}
              sx={{ width: "auto" }}
              color="error"
              variant="outlined"
              label={
                <Stack
                  gap={1}
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <DeleteOutline />
                  <Typography sx={{ fontSize: "14px" }}>Clear All</Typography>
                </Stack>
              }
            />
          </Stack>
          <Divider sx={{ my: 1 }} />
          <Stack
            flexGrow={1}
            sx={{
              p: 1,
              overflowY: "auto",
              maxHeight: "55vh",
            }}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            gap={2}
          >
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
            <Notification />
          </Stack>
        </Popover>
        <Button variant="contained" color="secondary">
          Receive Notification
        </Button>
      </Stack>
    </ComponentWrapper>
  )
}

export default NotificationSystem
