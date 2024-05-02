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
import { useSendEmailMutation } from "./emailApiSlice"
import toast from "react-hot-toast"

const EmailSystem = () => {
  const [emailId, setemailId] = useState("")
  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")
  const [emailError, setEmailError] = useState("")
  const [subjectError, setSubjectError] = useState("")
  const [contentError, setContentError] = useState("")
  const [sendMail, { isLoading: sendMailLoading }] = useSendEmailMutation()
  const handleEmailbodyChange = (state: EditorState) => {
    setContentError("")
    const html = stateToHTML(state.getCurrentContent())
    setContent(html)
  }

  const validateInputs = () => {
    let isValid = true

    if (!emailId.trim()) {
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
      sendMail({
        subject: subject,
        email: emailId,
        html: content,
      })
        .unwrap()
        .then((result: any) => {
          setContent("")
          setSubject("")
          setemailId("")
          toast.success("Email sent successfully!")
        })
        .catch((error: any) => {
          toast.error("Error sending email!")
        })
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
      <Typography>Enter email id to send the mail</Typography>
      <>
        <TextField
          onChange={e => {
            setEmailError("")
            setemailId(e.target.value)
          }}
          placeholder="Enter your email"
          size="small"
          value={emailId}
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
          onChange={e => {
            setSubjectError("")
            setSubject(e.target.value)
          }}
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
        defaultValue={""}
      />
      <FormHelperText sx={{ fontSize: "14px", mb: 5 }} error>
        {contentError}
      </FormHelperText>
      <Button
        disabled={sendMailLoading}
        variant="contained"
        sx={{ ml: "auto" }}
        onClick={handleSendEmail}
      >
        Send Email
      </Button>
    </Stack>
  )
}

export default EmailSystem
