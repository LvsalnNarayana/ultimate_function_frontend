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
const DeleteRecord = (props: {
  open: boolean
  handleDeleteRecordClose: () => void
}) => {
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
          Delete Record
        </Typography>
        <IconButton onClick={props.handleDeleteRecordClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider sx={{ width: "100%", my: 2 }} />
      <DialogContent sx={{p:0}}>
        <Typography>Are you sure you want to delete this record?</Typography>
      </DialogContent>
      <Divider sx={{ width: "100%", my: 2 }} />
      <DialogActions
        sx={{
            p:0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button onClick={props.handleDeleteRecordClose} variant="outlined">
          Cancel
        </Button>
        <Button variant="contained">Confirm</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteRecord
