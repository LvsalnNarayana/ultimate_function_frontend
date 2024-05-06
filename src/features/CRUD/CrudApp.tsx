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
import { useGetRecordsQuery } from "./recordApiSlice"
import moment from "moment"
import ComponentWrapper from "../../components/ComponentWrapper"
const CrudApp: React.FC<{ title: string }> = ({ title }) => {
  /*
  ....###....########..####.....######.....###....##.......##........######.
  ...##.##...##.....##..##.....##....##...##.##...##.......##.......##....##
  ..##...##..##.....##..##.....##........##...##..##.......##.......##......
  .##.....##.########...##.....##.......##.....##.##.......##........######.
  .#########.##.........##.....##.......#########.##.......##.............##
  .##.....##.##.........##.....##....##.##.....##.##.......##.......##....##
  .##.....##.##........####.....######..##.....##.########.########..######.
  */
  const {
    isLoading: recordsLoading,
    isError: recordsError,
    isSuccess: recordsSuccess,
    data: recordData,
    refetch: refetchRecords,
  } = useGetRecordsQuery({})
  /*
  ..######..########....###....########.########
  .##....##....##......##.##......##....##......
  .##..........##.....##...##.....##....##......
  ..######.....##....##.....##....##....######..
  .......##....##....#########....##....##......
  .##....##....##....##.....##....##....##......
  ..######.....##....##.....##....##....########
  */
  const [editRecordId, setEditRecordId] = useState("")
  const [editRecordOpen, setEditRecordOpen] = useState(false)
  const [createRecordOpen, setCreateRecordOpen] = useState(false)
  const [deleteRecordOpen, setDeleteRecordOpen] = useState(false)
  /*
  .##.....##.########.########.##.....##..#######..########...######.
  .###...###.##..........##....##.....##.##.....##.##.....##.##....##
  .####.####.##..........##....##.....##.##.....##.##.....##.##......
  .##.###.##.######......##....#########.##.....##.##.....##..######.
  .##.....##.##..........##....##.....##.##.....##.##.....##.......##
  .##.....##.##..........##....##.....##.##.....##.##.....##.##....##
  .##.....##.########....##....##.....##..#######..########...######.
  */
  const handleEditRecordOpen = (recordId: string) => {
    setEditRecordOpen(true)
    setEditRecordId(recordId)
  }
  const handleEditRecordClose = () => {
    setEditRecordOpen(false)
  }

  const handleDeleteRecordOpen = (recordId: string) => {
    setDeleteRecordOpen(true)
    setEditRecordId(recordId)
  }
  const handleDeleteRecordClose = () => {
    setDeleteRecordOpen(false)
  }
  const handleCreateRecordOpen = () => {
    setCreateRecordOpen(true)
  }
  const handleCreateRecordClose = () => {
    setCreateRecordOpen(false)
  }

  return (
    <ComponentWrapper title={title}>
      <Button onClick={handleCreateRecordOpen} size="small" variant="contained">
        +&nbsp;Create Record
      </Button>
      {recordsSuccess && !recordsError && !recordsLoading && (
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
              {[...recordData]
                .sort(
                  (a: any, b: any) =>
                    new Date(a.createdAt).getTime() -
                    new Date(b.createdAt).getTime(),
                )
                .map((record: any) => (
                  <TableRow
                    key={record.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {record?.id?.slice(-4)}
                    </TableCell>
                    <TableCell align="right">{record.title}</TableCell>
                    <TableCell align="right">{record.tagline}</TableCell>
                    <TableCell align="right">
                      {moment(record.createdAt).format("DD-MM-YYYY")}
                    </TableCell>
                    <TableCell align="right">
                      {record.createdBy.profile.firstName}{" "}
                      {record.createdBy.profile.lastName}
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        onClick={() => handleEditRecordOpen(record.id)}
                      >
                        <EditOutlinedIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        color="error"
                        onClick={() => handleDeleteRecordOpen(record.id)}
                      >
                        <DeleteOutlineOutlinedIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {recordsLoading && !recordsSuccess && !recordsError && (
        <Typography
          variant="body1"
          textAlign={"center"}
          sx={{ my: 4, width: "100%" }}
        >
          Loading...
        </Typography>
      )}
      {recordsError && !recordsLoading && !recordsSuccess && (
        <Stack
          sx={{ width: "100%", my: 4 }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Typography>Something went wrong..!</Typography>
          <Button variant="contained" onClick={refetchRecords}>
            Retry
          </Button>
        </Stack>
      )}
      <EditRecord
        config={{ open: editRecordOpen, recordId: editRecordId }}
        setRecordId={(recordId: string) => setEditRecordId(recordId)}
        handleEditRecordClose={handleEditRecordClose}
      />
      <DeleteRecord
        config={{ open: deleteRecordOpen, recordId: editRecordId }}
        setRecordId={(recordId: string) => setEditRecordId(recordId)}
        handleDeleteRecordClose={handleDeleteRecordClose}
      />
      <CreateRecord
        open={createRecordOpen}
        handleCreateRecordClose={handleCreateRecordClose}
      />
    </ComponentWrapper>
  )
}

export default CrudApp
