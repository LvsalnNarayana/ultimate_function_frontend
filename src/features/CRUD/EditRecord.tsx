import { useEffect, useState } from "react"
import {
  Typography,
  Dialog,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Divider,
  DialogActions,
  Button,
  DialogContent,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import {
  useLazyGetRecordByIdQuery,
  useUpdateRecordMutation,
} from "./recordApiSlice"
import toast from "react-hot-toast"

interface EditRecordProps {
  config: {
    open: boolean
    recordId: string
  }
  setRecordId: (recordId: string) => void
  handleEditRecordClose: () => void
}
const EditRecord = (props: EditRecordProps) => {
  const [
    getRecordById,
    {
      data: recordData,
      isLoading: recordLoading,
      isError: recordError,
      isSuccess: recordsSuccess,
    },
  ] = useLazyGetRecordByIdQuery()
  const [updateRecord, { isLoading: updatedRecordLoading }] =
    useUpdateRecordMutation()

  const [title, setTitle] = useState("")
  const [tagline, setTagline] = useState("")

  useEffect(() => {
    if (props?.config?.open) {
      getRecordById({ recordId: props?.config?.recordId })
    }
  }, [props?.config, getRecordById])

  useEffect(() => {
    if (recordsSuccess) {
      setTitle(recordData.title)
      setTagline(recordData.tagline)
    }
  }, [recordsSuccess, recordData])

  const saveRecordChanges = () => {
    updateRecord({
      recordId: props?.config?.recordId,
      title,
      tagline,
    })
      .then(() => {
        toast.success("Record updated successfully")
        props?.setRecordId("")
        props?.handleEditRecordClose()
      })
      .catch(err => toast.error("Error updating record"))
  }

  return (
    <Dialog
      keepMounted
      maxWidth="sm"
      fullWidth
      disableEscapeKeyDown
      open={props?.config?.open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        sx: { p: 2, borderRadius: 2, backgroundColor: "#fff" },
      }}
    >
      <DialogTitle
        sx={{
          p: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" component={"p"}>
          Edit Record
        </Typography>
        <IconButton
          onClick={() => {
            props?.setRecordId("")
            props?.handleEditRecordClose()
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider sx={{ my: 2 }} />
      <DialogContent sx={{ p: 0 }}>
        {!recordError && recordsSuccess && !recordLoading && (
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            gap={2}
            sx={{ width: "100%" }}
          >
            <Typography variant="body1">Title</Typography>
            <TextField
              fullWidth
              size="small"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Typography variant="body1">Tagline</Typography>
            <TextField
              fullWidth
              size="small"
              value={tagline}
              onChange={e => setTagline(e.target.value)}
            />
          </Stack>
        )}
        {recordLoading && (
          <Typography variant="body1" sx={{ py: 4 }}>
            Loading...
          </Typography>
        )}
        {recordError && (
          <Stack
            sx={{ width: "100%", my: 4 }}
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Typography>Something went wrong..!</Typography>
            <Button
              variant="contained"
              onClick={() =>
                getRecordById({ recordId: props?.config?.recordId })
              }
            >
              Retry
            </Button>
          </Stack>
        )}
      </DialogContent>
      <Divider sx={{ my: 2 }} />
      <DialogActions
        sx={{
          p: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => {
            props?.setRecordId("")
            props?.handleEditRecordClose()
          }}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          onClick={saveRecordChanges}
          disabled={recordLoading || updatedRecordLoading}
          variant="contained"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditRecord
