import {
  Card,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material"
import ProfileAvatar from "./ProfileAvatar"
import { useLocation, useNavigate } from "react-router-dom"
const sidebarItems = [
  { id: "basic-crud", title: "Basic CRUD", route: "CRUD" },
  { id: "email-system", title: "Email System", route: "email-system" },
  {
    id: "subscription-system",
    title: "Subscription System",
    route: "subscription-system",
  },
  { id: "newsletter-subscription", title: "Newsletter Subscription System" },
  { id: "session-management", title: "Session Management" },
  { id: "file-handling", title: "File Handling" },
  { id: "data-sanitization", title: "Data Sanitization" },
  { id: "stripe-payment", title: "Stripe Payment System" },
  { id: "notification-system", title: "Notification System" },
  { id: "messaging-system", title: "Messaging System" },
  { id: "micro-services", title: "Micro Services" },
  { id: "background-tasks", title: "Background Tasks" },
  { id: "cron-jobs", title: "CRON Jobs" },
  { id: "csrf-xss-protection", title: "CSRF & XSS Protection" },
  { id: "rate-limiting", title: "Rate Limiting" },
  { id: "graphql", title: "GraphQL" },
  { id: "oauth", title: "OAuth" },
  { id: "oauth2", title: "OAuth 2.0" },
  { id: "jwt", title: "JWT" },
  { id: "caching", title: "Caching" },
  { id: "trpc", title: "TRPC" },
  { id: "sse", title: "Server Sent Events" },
  { id: "spin-wheel", title: "Spin Wheel" },
  { id: "discount-coupons", title: "Discount Coupons" },
]

const Sidebar = () => {
  const theme = useTheme()
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <Stack
      sx={{
        width: 350,
        minHeight: "100vh",
        maxHeight: "100vh",
        overflowY: "hidden",
      }}
      flexShrink={0}
      direction={"column"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
    >
      <Card
        elevation={0}
        sx={{
          py: 2,
          mb: 3,
          minHeight: "max-content",
          height: "max-content",
          width: "100%",
          borderRadius: 3,
          overflow: "visible",
          backgroundColor: `${theme.palette.primary.main}40`,
        }}
      >
        <Typography
          variant="body1"
          sx={{ pb: 3, fontSize: "24px", textAlign: "center" }}
          className="source-code-pro"
        >
          {"<Ultimate_function/>"}
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <ProfileAvatar username="Narayana Lvsaln" size={35} />
          <Typography variant="body1" sx={{ fontSize: "18px" }}>
            Narayana Lvsaln
          </Typography>
        </Stack>
      </Card>
      <List sx={{ width: "100%", flexGrow: 1, overflowY: "auto" }}>
        {sidebarItems.map(item => (
          <ListItemButton
            key={item.id}
            disableRipple
            selected={
              (item?.route && location.pathname.includes(item?.route)) || false
            }
            onClick={() => navigate(`/${item?.route}`)}
          >
            <ListItemText
              sx={{
                "& .MuiTypography-root": {
                  fontSize: "16px",
                  fontWeight: 500,
                },
              }}
            >
              {item.title}
            </ListItemText>
          </ListItemButton>
        ))}
      </List>
    </Stack>
  )
}

export default Sidebar
