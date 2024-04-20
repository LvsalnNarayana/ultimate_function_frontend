import { Stack, Typography, Divider, Card, Button } from "@mui/material"
import type { Subscription } from "./SubscriptionList"
import { subscriptionList } from "./SubscriptionList"
import SubscriptionCard from "./SubscriptionCard"
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory"
const SubscriptionSystem = () => {
  return (
    <Stack
      sx={{ px: 4, py: 2, width: "100%" }}
      gap={1}
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Typography variant="h6" sx={{ fontWeight: "semibold" }}>
        Subscription System
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} />
      <Typography sx={{width:'100%',my:6}} variant="h5" textAlign={"center"}>
        Active Subscription Timer : 3mon 5day
      </Typography>
      <Stack
        sx={{ width: "100%", mb: 6 }}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
      >
        {subscriptionList.map((subscription: Subscription, index: number) => {
          return <SubscriptionCard key={index} subscription={subscription} />
        })}
      </Stack>
      <Button variant="contained" sx={{ mx: "auto" }}>
        <ChangeHistoryIcon />
        &nbsp;Show Pro Content
      </Button>
      <Card sx={{ p: 4, height: 270, borderRadius: 3, width: 400, mx: "auto" }}>
        <Stack
          sx={{ width: "100%" }}
          gap={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ChangeHistoryIcon sx={{ fontSize: "100px", mb: 2 }} />
          <Typography textAlign={"center"} variant="h4">
            This is pro content
          </Typography>
          <Typography textAlign={"center"}>
            if you are seeing this you are subscribed!
          </Typography>
        </Stack>
      </Card>
    </Stack>
  )
}

export default SubscriptionSystem
