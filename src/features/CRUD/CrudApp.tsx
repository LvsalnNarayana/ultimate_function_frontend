import {
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import { useState } from "react"
import EditRecord from "./EditRecord"
import DeleteRecord from "./DeleteRecord"
import CreateRecord from "./CreateRecord"
const CrudApp = () => {
  const createData = (
    id: string,
    title: string,
    tagline: string,
    createdAt: string,
    createdBy: string,
  ) => {
    return { id, title, tagline, createdAt, createdBy }
  }
  const rows = [
    createData("01", "Record 1", "This is record", "2024", "Narayana"),
    createData("02", "Record 1", "This is record", "2024", "Narayana"),
    createData("03", "Record 1", "This is record", "2024", "Narayana"),
    createData("04", "Record 1", "This is record", "2024", "Narayana"),
    createData("05", "Record 1", "This is record", "2024", "Narayana"),
  ]

  const [editRecordOpen, setEditRecordOpen] = useState(false)
  const handleEditRecordOpen = () => {
    setEditRecordOpen(true)
  }
  const handleEditRecordClose = () => {
    setEditRecordOpen(false)
  }
  const [deleteRecordOpen, setDeleteRecordOpen] = useState(false)
  const handleDeleteRecordOpen = () => {
    setDeleteRecordOpen(true)
  }
  const handleDeleteRecordClose = () => {
    setDeleteRecordOpen(false)
  }
  const [createRecordOpen, setCreateRecordOpen] = useState(false)
  const handleCreateRecordOpen = () => {
    setCreateRecordOpen(true)
  }
  const handleCreateRecordClose = () => {
    setCreateRecordOpen(false)
  }

  return (
    <>
      <Stack
        sx={{
          px: 4,
          py: 2,
          width: "100%",
        }}
        gap={2}
        direction={"column"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
      >
        <Stack
          sx={{ width: "100%" }}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h6" sx={{ fontWeight: "semibold" }}>
            CRUD Application
          </Typography>
          <Button
            onClick={handleCreateRecordOpen}
            size="small"
            variant="contained"
          >
            +&nbsp;Create Record
          </Button>
        </Stack>
        <Divider sx={{ width: "100%" }} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Tagline</TableCell>
                <TableCell align="right">CreatedAt</TableCell>
                <TableCell align="right">CreatedBy</TableCell>
                <TableCell align="right">Edit</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">{row.tagline}</TableCell>
                  <TableCell align="right">{row.createdAt}</TableCell>
                  <TableCell align="right">{row.createdBy}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={handleEditRecordOpen}>
                      <EditOutlinedIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton color="error" onClick={handleDeleteRecordOpen}>
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
      <EditRecord
        open={editRecordOpen}
        handleEditRecordClose={handleEditRecordClose}
      />
      <DeleteRecord
        open={deleteRecordOpen}
        handleDeleteRecordClose={handleDeleteRecordClose}
      />
      <CreateRecord
        open={createRecordOpen}
        handleCreateRecordClose={handleCreateRecordClose}
      />
    </>
  )
}

export default CrudApp
