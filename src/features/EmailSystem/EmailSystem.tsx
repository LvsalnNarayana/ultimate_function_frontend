import { useState } from "react"
import {
  Stack,
  Typography,
  Divider,
  TextField,
  Button,
  FormHelperText,
} from "@mui/material"
import MUIRichTextEditor from "mui-rte"
import { stateToHTML } from "draft-js-export-html"
import type { EditorState } from "draft-js"
import "./EmailSystem.css"

const EmailSystem = () => {
  const [emailIds, setEmailIds] = useState("")
  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")
  const [emailError, setEmailError] = useState("")
  const [subjectError, setSubjectError] = useState("")
  const [contentError, setContentError] = useState("")

  const handleEmailbodyChange = (state: EditorState) => {
    const html = stateToHTML(state.getCurrentContent())
    setContent(html)
  }

  const validateInputs = () => {
    let isValid = true

    if (!emailIds.trim() || !emailIds.split(",").some(email => email.trim())) {
      setEmailError("Please enter at least one valid email address.")
      isValid = false
    } else {
      setEmailError("")
    }

    if (!subject.trim()) {
      setSubjectError("Please enter a subject for your email.")
      isValid = false
    } else {
      setSubjectError("")
    }

    if (content.trim() === "<p><br></p>") {
      setContentError("Please enter content for your email.")
      isValid = false
    } else {
      setContentError("")
    }
    return isValid
  }

  const handleSendEmail = () => {
    if (validateInputs()) {
      const emailArray = emailIds
        .split(",")
        .map(email => email.trim())
        .filter(email => email !== "")
      const emailData = {
        emailIds: emailArray,
        subject: subject,
        body: content,
      }
      console.log(emailData)
    }
  }

  return (
    <Stack
      sx={{ px: 4, py: 2, width: "100%" }}
      gap={1}
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Typography variant="h6" sx={{ fontWeight: "semibold" }}>
        Email System
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} />
      <Typography>Enter email ids to send the mail</Typography>
      <>
        <TextField
          onChange={e => setEmailIds(e.target.value)}
          placeholder="Enter your email separated by ', '"
          size="small"
          value={emailIds}
          error={!!emailError}
          sx={{ width: "100%", "& .MuiInputBase-root": { borderRadius: 3 } }}
        />
        <FormHelperText sx={{ fontSize: "14px", mb: 2 }} error>
          {emailError}
        </FormHelperText>
      </>
      <Typography>Enter email subject</Typography>
      <>
        <TextField
          onChange={e => setSubject(e.target.value)}
          placeholder="Enter your email subject"
          size="small"
          value={subject}
          error={!!subjectError}
          sx={{ width: "100%", "& .MuiInputBase-root": { borderRadius: 3 } }}
        />
        <FormHelperText sx={{ fontSize: "14px", mb: 2 }} error>
          {subjectError}
        </FormHelperText>
      </>
      <Typography>Enter your email content</Typography>
      <MUIRichTextEditor
        onChange={handleEmailbodyChange}
        controls={["title", "bold", "italic", "underline", "link"]}
        defaultValue={null}
      />
      <FormHelperText sx={{ fontSize: "14px", mb: 5 }} error>
        {contentError}
      </FormHelperText>
      <Button variant="contained" sx={{ ml: "auto" }} onClick={handleSendEmail}>
        Send Email
      </Button>
    </Stack>
  )
}

export default EmailSystem
