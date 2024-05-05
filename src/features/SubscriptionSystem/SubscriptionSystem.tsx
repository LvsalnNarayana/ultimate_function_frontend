import {
  Stack,
  Typography,
  Divider,
  Button,
  IconButton,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material"
import type { Subscription } from "./SubscriptionList"
import { subscriptionList } from "./SubscriptionList"
import SubscriptionCard from "./SubscriptionCard"
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory"
import {
  useLazyGetSubscribedContentQuery,
  useLazyGetSubscriptionStatusQuery,
} from "./SubscriptionApiSlice"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import moment from "moment"
import { CloseOutlined } from "@mui/icons-material"
const SubscriptionSystem = () => {
  /*
  ..######..########....###....########.########
  .##....##....##......##.##......##....##......
  .##..........##.....##...##.....##....##......
  ..######.....##....##.....##....##....######..
  .......##....##....#########....##....##......
  .##....##....##....##.....##....##....##......
  ..######.....##....##.....##....##....########
  */
  const [timeLeft, setTimeLeft] = useState("")
  const [contentModalOpen, setContentModalOpen] = useState(false)

  /*
  ....###....########..####.....######.....###....##.......##........######.
  ...##.##...##.....##..##.....##....##...##.##...##.......##.......##....##
  ..##...##..##.....##..##.....##........##...##..##.......##.......##......
  .##.....##.########...##.....##.......##.....##.##.......##........######.
  .#########.##.........##.....##.......#########.##.......##.............##
  .##.....##.##.........##.....##....##.##.....##.##.......##.......##....##
  .##.....##.##........####.....######..##.....##.########.########..######.
  */
  const [
    getSubscriptionStatus,
    {
      data: subscriptionStatus,
      isLoading: subscriptionStatusLoading,
      isError: subscriptionStatusError,
      isSuccess: subscriptionStatusSuccess,
    },
  ] = useLazyGetSubscriptionStatusQuery()

  const [
    getSubscribedContent,
    {
      data: subscribedContent,
      isLoading: subscribedContentLoading,
      isError: subscribedContentError,
      isSuccess: SubscribedContentSuccess,
    },
  ] = useLazyGetSubscribedContentQuery()
  /*
  .##.....##.########.########.##.....##..#######..########...######.
  .###...###.##..........##....##.....##.##.....##.##.....##.##....##
  .####.####.##..........##....##.....##.##.....##.##.....##.##......
  .##.###.##.######......##....#########.##.....##.##.....##..######.
  .##.....##.##..........##....##.....##.##.....##.##.....##.......##
  .##.....##.##..........##....##.....##.##.....##.##.....##.##....##
  .##.....##.########....##....##.....##..#######..########...######.
  */
  const showProContent = () => {
    getSubscribedContent({})
      .unwrap()
      .then(() => {
        setContentModalOpen(true)
      })
      .catch(error => {
        toast.error("No subscription found")
      })
  }
  const closeContentModal = () => {
    setContentModalOpen(false)
  }
  /*
  .########.########.########.########..######..########..######.
  .##.......##.......##.......##.......##....##....##....##....##
  .##.......##.......##.......##.......##..........##....##......
  .######...######...######...######...##..........##.....######.
  .##.......##.......##.......##.......##..........##..........##
  .##.......##.......##.......##.......##....##....##....##....##
  .########.##.......##.......########..######.....##.....######.
  */
  useEffect(() => {
    getSubscriptionStatus({})
      .unwrap()
      .catch(error => {
        toast.error("Can not get subscription details")
      })
  }, [getSubscriptionStatus])

  useEffect(() => {
    const now = moment()
    const endDate = moment(subscriptionStatus?.endDate)
    const duration = moment.duration(endDate.diff(now))
    const formatted =
      duration.asDays() >= 1
        ? `${Math.floor(duration.asDays())} days, ${duration.hours()} hours`
        : `${duration.hours()} hours, ${duration.minutes()} minutes, ${duration.seconds()} seconds`
    setTimeLeft(formatted)
  }, [subscriptionStatus])

  return (
    <Stack
      sx={{ px: 4, py: 2, width: "100%" }}
      gap={2}
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Typography variant="h6" sx={{ fontWeight: "semibold" }}>
        Subscription System
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} />
      {!subscriptionStatusLoading &&
        !subscriptionStatusError &&
        subscriptionStatusSuccess &&
        !("subscription" in subscriptionStatus) && (
          <Typography
            sx={{ width: "100%", my: 3 }}
            variant="h5"
            textAlign={"center"}
          >
            Active Subscription Timer : {timeLeft}
          </Typography>
        )}
      {!subscriptionStatusLoading &&
        !subscriptionStatusError &&
        subscriptionStatusSuccess &&
        "subscription" in subscriptionStatus && (
          <Typography
            sx={{ width: "100%", my: 3 }}
            variant="h5"
            textAlign={"center"}
          >
            No Active Subscription
          </Typography>
        )}
      {subscriptionStatusLoading &&
        !subscriptionStatusError &&
        !subscriptionStatusSuccess && (
          <Typography
            sx={{ width: "100%", my: 3 }}
            variant="h5"
            textAlign={"center"}
          >
            Loading...
          </Typography>
        )}
      <Button variant="contained" color="secondary" sx={{ mx: "auto", mb: 3 }}>
        Cancel Subscription
      </Button>
      <Stack
        sx={{ width: "100%", mb: 3 }}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
      >
        {subscriptionList.map((subscription: Subscription, index: number) => {
          return <SubscriptionCard key={index} subscription={subscription} />
        })}
      </Stack>
      <Button
        onClick={showProContent}
        variant="contained"
        sx={{ mx: "auto", my: 3 }}
      >
        <ChangeHistoryIcon />
        &nbsp;Show Pro Content
      </Button>
      <>
        {!subscribedContentError &&
          !subscribedContentLoading &&
          SubscribedContentSuccess && (
            <Dialog
              open={contentModalOpen}
              PaperProps={{
                sx: {
                  borderRadius: 5,
                  width: "100%",
                  maxWidth: "500px",
                  maxHeight: "500px",
                  overflow: "auto",
                },
              }}
            >
              <DialogTitle sx={{ display: "flex", justifyContent: "flex-end" }}>
                <IconButton onClick={closeContentModal}>
                  <CloseOutlined />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <Stack
                  direction={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={2}
                >
                  <ChangeHistoryIcon sx={{ fontSize: "100px" }} />
                  <Typography
                    variant="h6"
                    sx={{ mx: "auto" }}
                    textAlign={"center"}
                    lineHeight={2}
                  >
                    {subscribedContent?.message}
                  </Typography>
                </Stack>
              </DialogContent>
            </Dialog>
          )}
        {!subscribedContentError &&
          subscribedContentLoading &&
          !SubscribedContentSuccess && <CircularProgress color="secondary" />}
      </>
    </Stack>
  )
}

export default SubscriptionSystem
