import * as React from "react";
import { Button, Box, ButtonGroup } from "@mui/material";
import ListView from "./ListView";

function Page() {
  return (
    <div>
      <Box
        justifyContent="center"
        alignItems="center"
        sx={{ mx: "auto", width: 400, pm: "auto", padding: "50px" }}
      >
        <ButtonGroup
          variant="outlined"
          aria-label="outlined button group"
          size="large"
        >
          <Button sx={{ fontSize: 24 }}>Users</Button>
          <Button sx={{ fontSize: 24 }}>Researchers</Button>
          <Button sx={{ fontSize: 24 }}>Trials</Button>
        </ButtonGroup>
      </Box>
      <Box
        justifyContent="center"
        alignItems="center"
        sx={{ mx: "auto", pm: "auto", width: "70%" }}
      >
        <ListView />
      </Box>
    </div>
  );
}

export default Page;
