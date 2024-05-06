import type React from "react"
import ComponentWrapper from "../../components/ComponentWrapper"
import { Button, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"
const FileHandling: React.FC<{ title: string }> = ({ title }) => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  })
  return (
    <ComponentWrapper title={title}>
      <Typography variant="h6" sx={{ textDecoration: "underline" }}>
        Firebase File Handling
      </Typography>
      <Typography variant="caption">
        This is a test functionality so the number of files is limited to 1 file
        and less that 2Mb
      </Typography>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput type="file" />
      </Button>
    </ComponentWrapper>
  )
}

export default FileHandling
