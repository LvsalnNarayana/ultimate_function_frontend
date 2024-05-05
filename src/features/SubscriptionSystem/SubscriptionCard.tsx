import { Button, Card, Stack, Typography } from "@mui/material"
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory"
import type { Subscription } from "./SubscriptionList"
import { usePurchaseSubscriptionMutation } from "./SubscriptionApiSlice"
import toast from "react-hot-toast"
import { useAppDispatch } from "../../app/hooks"
import { authApiSlice } from "../../auth/authApiSlice"

const SubscriptionCard = (props: { subscription: Subscription }) => {
  const dispatch = useAppDispatch()
  const [purchaseSubscription, { isLoading: purchaseSubscriptionLoading }] =
    usePurchaseSubscriptionMutation()
  const handlePurchaseSubscription = () => {
    purchaseSubscription({ endDate: props.subscription.duration })
      .unwrap()
      .then(() => {
        dispatch(authApiSlice.util.invalidateTags(["session"]))
        toast.success("Subscription purchased successfully!")
      })
      .catch(() => {
        toast.error("Error purchasing subscription")
      })
  }
  return (
    <>
      <Card sx={{ width: 300, p: 3, borderRadius: 3 }}>
        <Stack
          direction={"column"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          sx={{ width: "100%" }}
        >
          <ChangeHistoryIcon sx={{ fontSize: "100px", mb: 2 }} />
          <Typography variant="h4" sx={{ mb: 4 }}>
            {props.subscription.title}
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          sx={{ width: "100%", mb: 2 }}
        >
          <Typography sx={{ width: "50%", textAlign: "center" }}>
            Duration
          </Typography>
          <Typography sx={{ width: "50%", textAlign: "center" }}>
            {props.subscription.duration}
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          sx={{ width: "100%" }}
        >
          <Typography sx={{ width: "50%", textAlign: "center" }}>
            Price
          </Typography>
          <Typography sx={{ width: "50%", textAlign: "center" }}>
            {props.subscription.currency === "USD" && "$"}&nbsp;
            {props.subscription.price}
          </Typography>
        </Stack>
        <Button
          onClick={handlePurchaseSubscription}
          variant="contained"
          sx={{ width: "100%", mt: 2 }}
          disabled={purchaseSubscriptionLoading}
        >
          Subscribe
        </Button>
      </Card>
    </>
  )
}

export default SubscriptionCard
