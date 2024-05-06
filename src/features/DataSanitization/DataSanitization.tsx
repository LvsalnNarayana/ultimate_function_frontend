import type React from "react"
import ComponentWrapper from "../../components/ComponentWrapper"
import { Button, FormLabel, Stack, TextField, Typography } from "@mui/material"
import type { ChangeEvent } from "react"
import { useState } from "react"
import type { validationInput } from "../../utils/Interfaces"

const DataSanitization: React.FC<{ title: string }> = ({ title }) => {
  const [data, setData] = useState<validationInput>({
    username: "",
    email: "",
    password: "",
    minInput: 0,
    maxInput: 0,
    dob: "",
  })
  return (
    <ComponentWrapper title={title}>
      <Typography variant="body1" textAlign={"center"} sx={{ width: "100%" }}>
        These inputs are validated from the server side.
      </Typography>
      <Stack
        gap={3}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ width: "100%", mt: 3 }}
      >
        <Stack
          direction={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          sx={{ width: "auto" }}
        >
          <FormLabel sx={{ mb: 0 }}>Username</FormLabel>
          <TextField
            value={data?.username}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData({ ...data, username: e.target.value })
            }
            sx={{ width: 350 }}
            placeholder="Enter username here"
            size="small"
            name="data-username-input"
            id="data-username-input"
          />
        </Stack>
        <Stack
          direction={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          sx={{ width: "auto" }}
        >
          <FormLabel sx={{ mb: 0 }}>Email</FormLabel>
          <TextField
            value={data?.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData({ ...data, email: e.target.value })
            }
            sx={{ width: 350 }}
            placeholder="Enter email here"
            size="small"
            name="data-email-input"
            id="data-email-input"
          />
        </Stack>
        <Stack
          direction={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          sx={{ width: "auto" }}
        >
          <FormLabel sx={{ mb: 0 }}>Password</FormLabel>
          <TextField
            value={data?.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData({ ...data, password: e.target.value })
            }
            sx={{ width: 350 }}
            placeholder="Enter password here"
            size="small"
            name="data-password-input"
            id="data-password-input"
          />
        </Stack>
        <Stack
          direction={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          sx={{ width: "auto" }}
        >
          <FormLabel sx={{ mb: 0 }}>Min input</FormLabel>
          <TextField
            value={data?.minInput}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData({ ...data, minInput: parseInt(e.target.value) })
            }
            sx={{ width: 350 }}
            type="number"
            placeholder="Enter input here"
            size="small"
            name="data-min-number-input"
            id="data-min-number-input"
          />
        </Stack>
        <Stack
          direction={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          sx={{ width: "auto" }}
        >
          <FormLabel sx={{ mb: 0 }}>Max input</FormLabel>
          <TextField
            value={data?.maxInput}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData({ ...data, maxInput: parseInt(e.target.value) })
            }
            sx={{ width: 350 }}
            type="number"
            placeholder="Enter input here"
            size="small"
            name="data-max-number-input"
            id="data-max-number-input"
          />
        </Stack>
        <Stack
          direction={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          sx={{ width: "auto" }}
        >
          <FormLabel sx={{ mb: 0 }}>Dob</FormLabel>
          <TextField
            value={data?.dob}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData({ ...data, dob: e.target.value })
            }
            sx={{ width: 350 }}
            placeholder="Enter dob here"
            size="small"
            name="data-date-input"
            id="data-date-input"
          />
        </Stack>
        <Button variant="contained" color="secondary" sx={{ width: 350 }}>
          Submit
        </Button>
      </Stack>
    </ComponentWrapper>
  )
}

export default DataSanitization
