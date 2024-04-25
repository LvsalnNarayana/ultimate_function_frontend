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
import { useState } from "react"
import { useCreateRecordMutation } from "./recordApiSlice"
import toast from "react-hot-toast"
const CreateRecord = (props: {
  open: boolean
  handleCreateRecordClose: () => void
}) => {
  const [newRecord, setNewRecord] = useState({ title: "", tagline: "" })
  const [createRecord, { isLoading: createRecordLoading }] =
    useCreateRecordMutation()

  const handleCreateRecord = () => {
    createRecord(newRecord)
      .unwrap()
      .then(result => {
        setNewRecord({ title: "", tagline: "" })
        toast.success("Record Created")
        props.handleCreateRecordClose()
      })
      .catch(error => {
        toast.error("Error Creating Record")
      })
  }
  return (
    <Dialog
      keepMounted
      maxWidth={"sm"}
      fullWidth
      disableEscapeKeyDown
      open={props.open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        sx: {
          p: 2,
          borderRadius: 2,
          backgroundColor: "#fff",
        },
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
        <Typography variant="h6" component="p">
          Create Record
        </Typography>
        <IconButton onClick={props.handleCreateRecordClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider sx={{ width: "100%", my: 2 }} />
      <DialogContent sx={{ p: 0 }}>
        <Stack
          direction={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          gap={2}
          sx={{
            width: "100%",
          }}
        >
          <Stack
            sx={{ width: "100%" }}
            direction={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Typography sx={{ width: "50%" }} variant="body1" component="p">
              Title
            </Typography>
            <TextField
              placeholder="Enter your title"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewRecord({ ...newRecord, title: e.target.value })
              }
              size="small"
              sx={{ width: "50%" }}
              value={newRecord.title}
            />
          </Stack>
          <Stack
            sx={{ width: "100%" }}
            direction={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Typography sx={{ width: "50%" }} variant="body1" component="p">
              Tagline
            </Typography>
            <TextField
              placeholder="Enter your tagline"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewRecord({ ...newRecord, tagline: e.target.value })
              }
              size="small"
              sx={{ width: "50%" }}
              value={newRecord.tagline}
            />
          </Stack>
        </Stack>
      </DialogContent>
      <Divider sx={{ width: "100%", my: 2 }} />
      <DialogActions
        sx={{
          p: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          disabled={createRecordLoading}
          onClick={() => {
            setNewRecord({ title: "", tagline: "" })
            props.handleCreateRecordClose()
          }}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          disabled={createRecordLoading}
          onClick={handleCreateRecord}
          variant="contained"
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CreateRecord
