import React from 'react'
import { Grid, Typography } from "@mui/material";
function Card2({
    cardImage1,
    cardHeading1,
    cardContent1,
    cardContent2,
  

}) {
  return (
    <div className="">
     
        
      <Grid
      item
      lg={6}
      xs={12}
      sx={{
        paddingTop: 5,
        paddingLeft :5,
      }}
      >

      <img src={cardImage1} className="" />
      </Grid>
      <Grid
      item
      lg={6}
      xs={12}
      sx={{
        paddingTop: 5,
        paddingLeft :5,
      }}
      >
      <Typography variant="h6" align="left">
        {cardHeading1}
      </Typography></Grid>
      <Grid
      item
      lg={6}
      xs={12}
      sx={{
        
         paddingTop: 2,
        paddingLeft :5,
        // border: '1px solid black'
        
      }}
      >
      <Typography variant="body1" align="left">
          
          {cardContent1}
        </Typography></Grid>
        <Grid
      item
      lg={6}
      xs={12}
      sx={{
        paddingTop: 3,
        paddingLeft :5,
      }}>
        <Typography variant="body1" align="left">
          
          {cardContent2}
        </Typography></Grid>
        
      
    </div>
  )
}

export default Card2