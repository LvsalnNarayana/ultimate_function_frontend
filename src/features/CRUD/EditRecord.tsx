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
const EditRecord = (props: {
  open: boolean
  handleEditRecordClose: () => void
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
          Edit Record
        </Typography>
        <IconButton onClick={props.handleEditRecordClose}>
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
            <TextField size="small" sx={{ width: "50%" }} value={"Record 1"} />
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
              size="small"
              sx={{ width: "50%" }}
              value={"This is record 1"}
            />
          </Stack>
          <Stack
            sx={{ width: "100%" }}
            direction={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Typography sx={{ width: "50%" }} variant="body1" component="p">
              CreatedAt
            </Typography>
            <TextField
              disabled
              size="small"
              sx={{ width: "50%" }}
              value={"2024"}
            />
          </Stack>
          <Stack
            sx={{ width: "100%" }}
            direction={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Typography sx={{ width: "50%" }} variant="body1" component="p">
              CreatedBy
            </Typography>
            <TextField
              disabled
              size="small"
              sx={{ width: "50%" }}
              value={"Narayana Lvsaln"}
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
        <Button onClick={props.handleEditRecordClose} variant="outlined">
          Cancel
        </Button>
        <Button variant="contained">Save</Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditRecord
