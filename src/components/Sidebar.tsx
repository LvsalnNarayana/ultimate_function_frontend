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
import EmailSystem from "../features/EmailSystem/EmailSystem"
import CrudApp from "../features/CRUD/CrudApp"
import SubscriptionSystem from "../features/SubscriptionSystem/SubscriptionSystem"
import NewsLetter from "../features/NewsLetter/NewsLetter"
import SessionManagement from "../features/SessionManagement/SessionManagement"
import FileHandling from "../features/FileHandling/FileHandling"
import DataSanitization from "../features/DataSanitization/DataSanitization"
import StripePayment from "../features/StripePayment/StripePayment"
import NotificationSystem from "../features/NotificationSystem/NotificationSystem"
import Messages from "../features/Messages/Messages"
import Microservices from "../features/Microservices/Microservices"
import BackgroundTask from "../features/BackgroundTasks/BackgroundTask"
import CRON from "../features/CRONjobs/CRON"
import CSRF_XSS from "../features/CSRF&XSS/CSRF_XSS"
import RateLimiting from "../features/RateLimiting/RateLimiting"
import ServerEvents from "../features/ServerEvents/ServerEvents"
import DiscountCoupon from "../features/DiscountCoupons/DiscountCoupon"
import type { NavMenu } from "../utils/Interfaces"
export const sidebarItems: NavMenu[] = [
  { id: "basic-crud", title: "Basic CRUD", route: "CRUD", component: CrudApp },
  {
    id: "email-system",
    title: "Email System",
    route: "email-system",
    component: EmailSystem,
  },
  {
    id: "subscription-system",
    title: "Subscription System",
    route: "subscription-system",
    component: SubscriptionSystem,
  },
  {
    id: "newsletter-subscription",
    title: "Newsletter Subscription System",
    route: "newsletter",
    component: NewsLetter,
  },
  {
    id: "session-management",
    title: "Session Management",
    route: "session-management",
    component: SessionManagement,
  },
  {
    id: "file-handling",
    title: "File Handling",
    route: "file-handling",
    component: FileHandling,
  },
  {
    id: "data-sanitization",
    title: "Data Sanitization",
    route: "data-sanitization",
    component: DataSanitization,
  },
  {
    id: "stripe-payment",
    title: "Stripe Payment System",
    route: "stripe-payment",
    component: StripePayment,
  },
  {
    id: "notification-system",
    title: "Notification System",
    route: "notification-system",
    component: NotificationSystem,
  },
  {
    id: "messaging-system",
    title: "Messaging System",
    route: "messaging-system",
    component: Messages,
  },
  {
    id: "micro-services",
    title: "Micro Services",
    route: "micro-services",
    component: Microservices,
  },
  {
    id: "background-tasks",
    title: "Background Tasks",
    route: "background-tasks",
    component: BackgroundTask,
  },
  { id: "cron-jobs", title: "CRON Jobs", route: "cron-jobs", component: CRON },
  {
    id: "csrf-xss-protection",
    title: "CSRF & XSS Protection",
    route: "csrf-xss-protection",
    component: CSRF_XSS,
  },
  {
    id: "rate-limiting",
    title: "Rate Limiting",
    route: "rate-limiting",
    component: RateLimiting,
  },
  { id: "graphql", title: "GraphQL", route: "" },
  { id: "oauth", title: "OAuth", route: "" },
  { id: "oauth2", title: "OAuth 2.0", route: "" },
  { id: "jwt", title: "JWT", route: "jwt" },
  {
    id: "caching",
    title: "Caching",
    route: "caching",
    component: FileHandling,
  },
  { id: "trpc", title: "TRPC", route: "" },
  {
    id: "sse",
    title: "Server Sent Events",
    route: "sse",
    component: ServerEvents,
  },
  {
    id: "spin-wheel",
    title: "Spin Wheel",
    route: "spin-wheel",
  },
  {
    id: "discount-coupons",
    title: "Discount Coupons",
    route: "discount-coupons",
    component: DiscountCoupon,
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
