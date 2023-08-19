import { Box, Stack, Typography, colors } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import { red } from "@mui/material/colors";

function Card({
  cardImage,
  cardHeading,
  cardContent1,
  cardContent2,
  cardContent3,
  cardContent4,
}) {
  return (
    <div className="everythingcenter">
      <img src={cardImage} className="imgSize" />
      <Typography variant="h6" align="left">
        {cardHeading}
      </Typography>

      <Stack spacing={1}>
        <div style={{
          display:"flex",
          gap:'10px',
        }}>
      <CheckIcon
            sx={{
              color: "red",
              // marginRight: "10px",
              // width:'10%',
            }}
          />
        <Typography variant="body1" align="left">
          
          {cardContent1}
        </Typography></div>
        <div style={{
          display:"flex",
          gap:'10px',
        }}>
      <CheckIcon
            sx={{
              color: "red",
              // marginRight: "10px",
              // width:'10%',
            }}
          />
        <Typography variant="body1" align="left">
          
          {cardContent2}
        </Typography></div>
        <div style={{
          display:"flex",
          gap:'10px',
        }}>
      <CheckIcon
            sx={{
              color: "red",
              // marginRight: "10px",
              // width:'10%',
            }}
          />
        <Typography variant="body1" align="left">
          
          {cardContent3}
        </Typography></div>
        <div style={{
          display:"flex",
          gap:'10px',
        }}>
      <CheckIcon
            sx={{
              color: "red",
              // marginRight: "10px",
              // width:'10%',
            }}
          />
        <Typography variant="body1" align="left">
          
          {cardContent4}
        </Typography></div>
      </Stack>
    </div>
  );
}

export default Card;
