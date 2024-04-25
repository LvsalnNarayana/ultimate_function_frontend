import {
  Typography,
  Dialog,
  DialogTitle,
  IconButton,
  Divider,
  DialogActions,
  Button,
  DialogContent,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useDeleteRecordMutation } from "./recordApiSlice"
import toast from "react-hot-toast"

interface DeleteRecordProps {
  config: {
    open: boolean
    recordId: string
  }
  setRecordId: (recordId: string) => void
  handleDeleteRecordClose: () => void
}

const DeleteRecord = ({
  config,
  setRecordId,
  handleDeleteRecordClose,
}: DeleteRecordProps) => {
  const [deleteRecord, { isLoading: deleteRecordLoading }] =
    useDeleteRecordMutation()

  const handleConfirmDelete = () => {
    deleteRecord(config.recordId)
      .unwrap()
      .then(result => {
        toast.success("Record deleted successfully")
        setRecordId("")
        handleDeleteRecordClose()
      })
      .catch(error => {
        toast.error("Failed to delete record")
      })
  }

  return (
    <Dialog
      keepMounted
      maxWidth={"sm"}
      fullWidth
      disableEscapeKeyDown
      open={config.open}
      onClose={() => {
        setRecordId("")
        handleDeleteRecordClose()
      }}
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
          Delete Record
        </Typography>
        <IconButton onClick={handleDeleteRecordClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider sx={{ width: "100%", my: 2 }} />
      <DialogContent sx={{ p: 0 }}>
        <Typography>Are you sure you want to delete this record?</Typography>
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
          onClick={() => {
            setRecordId("")
            handleDeleteRecordClose()
          }}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          onClick={handleConfirmDelete}
          variant="contained"
          disabled={deleteRecordLoading}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteRecord
