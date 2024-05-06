import { useState } from "react"
import ComponentWrapper from "../../components/ComponentWrapper"
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
} from "@mui/material"

const NewsLetter: React.FC<{ title: string }> = ({ title }) => {
  /*
  ..######..########....###....########.########
  .##....##....##......##.##......##....##......
  .##..........##.....##...##.....##....##......
  ..######.....##....##.....##....##....######..
  .......##....##....#########....##....##......
  .##....##....##....##.....##....##....##......
  ..######.....##....##.....##....##....########
  */
  const [marketingPreference, setMarketingPreference] = useState(false)
  const [techUpdatesPreference, setTechUpdatesPreference] = useState(false)

  return (
    <ComponentWrapper title={title}>
      <Stack
        direction="column"
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ width: "100%" }}
        gap={3}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                disableRipple
                color="secondary"
                value={marketingPreference}
                onChange={() => setMarketingPreference(prevState => !prevState)}
              />
            }
            label="Marketing Preferences"
          />
          <FormControlLabel
            control={
              <Checkbox
                disableRipple
                color="secondary"
                value={techUpdatesPreference}
                onChange={() =>
                  setTechUpdatesPreference(prevState => !prevState)
                }
              />
            }
            label="Tech Updates"
          />
        </FormGroup>
        <Button variant="contained" color="secondary" sx={{ width: 250 }}>
          Save
        </Button>
        <Button variant="contained" color="secondary" sx={{ width: 250 }}>
          Receive Test Letters
        </Button>
      </Stack>
    </ComponentWrapper>
  )
}

export default NewsLetter
