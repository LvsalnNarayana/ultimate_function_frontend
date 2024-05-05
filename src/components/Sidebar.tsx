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
import { Link, useLocation, useNavigate } from "react-router-dom"
const sidebarItems = [
  { id: "basic-crud", title: "Basic CRUD", route: "CRUD" },
  { id: "email-system", title: "Email System", route: "email-system" },
  {
    id: "subscription-system",
    title: "Subscription System",
    route: "subscription-system",
  },
  {
    id: "newsletter-subscription",
    title: "Newsletter Subscription System",
    route: "newsletter",
  },
  {
    id: "session-management",
    title: "Session Management",
    route: "session-management",
  },
  { id: "file-handling", title: "File Handling", route: "file-handling" },
  {
    id: "data-sanitization",
    title: "Data Sanitization",
    route: "data-sanitization",
  },
  {
    id: "stripe-payment",
    title: "Stripe Payment System",
    route: "stripe-payment",
  },
  {
    id: "notification-system",
    title: "Notification System",
    route: "notification-system",
  },
  {
    id: "messaging-system",
    title: "Messaging System",
    route: "messaging-system",
  },
  { id: "micro-services", title: "Micro Services", route: "micro-services" },
  {
    id: "background-tasks",
    title: "Background Tasks",
    route: "background-tasks",
  },
  { id: "cron-jobs", title: "CRON Jobs", route: "cron-jobs" },
  {
    id: "csrf-xss-protection",
    title: "CSRF & XSS Protection",
    route: "csrf-xss-protection",
  },
  { id: "rate-limiting", title: "Rate Limiting", route: "rate-limiting" },
  { id: "graphql", title: "GraphQL" },
  { id: "oauth", title: "OAuth" },
  { id: "oauth2", title: "OAuth 2.0" },
  { id: "jwt", title: "JWT", route: "jwt" },
  { id: "caching", title: "Caching", route: "caching" },
  { id: "trpc", title: "TRPC" },
  { id: "sse", title: "Server Sent Events", route: "sse" },
  { id: "spin-wheel", title: "Spin Wheel", route: "spin-wheel" },
  {
    id: "discount-coupons",
    title: "Discount Coupons",
    route: "discount-coupons",
  },
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
        <Link to={"/"}>
          <Typography
            variant="body1"
            sx={{ pb: 3, fontSize: "24px", textAlign: "center" }}
            className="source-code-pro"
          >
            {"<Ultimate_function/>"}
          </Typography>
        </Link>
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
