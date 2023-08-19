import React from 'react'
import { Grid, Typography } from "@mui/material";

function Card2heading() {
  return (
    <div>
    <Grid
        item
        lg={6}
        xs={12}
        sx={{
          paddingTop: 10,
        }}
      >
        <Typography variant="h4" align="center">
        Gateway in the News
        </Typography>
      </Grid>
      </div>
  )
}

export default Card2heading