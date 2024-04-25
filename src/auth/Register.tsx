import type { ChangeEvent, FormEvent } from "react"
import { useState } from "react"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import type { SelectChangeEvent } from "@mui/material"
import {
  Stack,
  Card,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Select,
  MenuItem,
} from "@mui/material"
import { Link } from "react-router-dom"
import { useLazyCheckUsernameQuery } from "./authApiSlice"

const Register = () => {
  const [email, setEmail] = useState<string>("")
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [birthDate, setBirthDate] = useState<string>("")
  const [gender, setGender] = useState<string>("")
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [marketing, setMarketing] = useState<boolean>(false)
  const [techUpdates, setTechUpdates] = useState<boolean>(false)
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

  const [
    checkUsername,
    {
      isError: usernameError,
      isSuccess: usernameSuccess,
      isLoading: usernameLoading,
    },
  ] = useLazyCheckUsernameQuery()

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value)
  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
    if (timer) clearTimeout(timer)
    const newTimer = setTimeout(() => checkUsername(event.target.value), 3000)
    setTimer(newTimer)
  }
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value)
  const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) =>
    setConfirmPassword(event.target.value)
  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setFirstName(event.target.value)
  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setLastName(event.target.value)
  const handleBirthDateChange = (event: ChangeEvent<HTMLInputElement>) =>
    setBirthDate(event.target.value)
  const handleGenderChange = (event: SelectChangeEvent<string>) =>
    setGender(event.target.value)
  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    console.log({
      username,
      password,
      email,
      profile: {
        firstName,
        lastName,
        birthDate,
        gender,
      },
      preferences: {
        newsletters: [
          ...(marketing ? ["marketing"] : []),
          ...(techUpdates ? ["tech_updates"] : []),
        ],
      },
    })
  }

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh", minWidth: "100vw", overflow: "hidden" }}
    >
      <Card sx={{ p: 2, borderRadius: 4, width: 400 }}>
        <form onSubmit={handleSubmit}>
          <Typography
            variant="body1"
            sx={{ pb: 3, fontSize: "24px", textAlign: "center" }}
            className="source-code-pro"
          >
            {"<Ultimate_function/>"}
          </Typography>
          <TextField
            sx={{ width: "100%", mb: 2 }}
            size="small"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            type="email"
          />
          <TextField
            sx={{ width: "100%", mb: 2 }}
            size="small"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <TextField
            sx={{ width: "100%", mb: 2 }}
            size="small"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ width: "100%", mb: 2 }}
            size="small"
            placeholder="Confirm Password"
            type={showPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <TextField
              fullWidth
              placeholder="First Name"
              size="small"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <TextField
              fullWidth
              placeholder="Last Name"
              size="small"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </Stack>
          <TextField
            type="date"
            sx={{ width: "100%", mb: 2 }}
            size="small"
            InputLabelProps={{ shrink: true }}
            value={birthDate}
            onChange={handleBirthDateChange}
          />
          <Select
            fullWidth
            size="small"
            value={gender}
            onChange={handleGenderChange}
            sx={{ mb: 2 }}
          >
            <MenuItem selected={true} value={""} />
            {["male", "female", "other"].map(option => (
              <MenuItem key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </MenuItem>
            ))}
          </Select>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  color="secondary"
                  checked={marketing}
                  onChange={() => setMarketing(!marketing)}
                />
              }
              label="Marketing Emails"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="secondary"
                  checked={techUpdates}
                  onChange={() => setTechUpdates(!techUpdates)}
                />
              }
              label="Tech Updates"
            />
          </FormGroup>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, width: "100%" }}
          >
            Register
          </Button>
          <Typography sx={{ textAlign: "center", mt: 2 }}>
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </form>
      </Card>
    </Stack>
  )
}

export default Register
