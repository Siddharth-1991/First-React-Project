import { Grid, Typography } from "@mui/material";
import React from "react";

function Content() {
  return (
    <div>
      <Grid container xs={12}>
        <Grid
          item
          container
          xs={12}
          sx={{
            paddingTop: 10,
            paddingLeft: 20,
          }}
        >
          <Grid item lg={6} xs={12}>
            <iframe
              width="420"
              height="236"
              src="https://www.youtube.com/embed/xAjPa1CFP8c"
              title="Gateway School of Mumbai: The Film"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Typography variant="h4" align="center">
              Who We Are
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "20px",
              }}
            >
              Founded in 2012, The Gateway School of Mumbai is a not-for-profit
              organisation dedicated to empowering children with disabilities.
              Together with our students, their families and our community of
              teachers, professionals and support staff, we work towards our
              common vision → students will lead fulfilling, productive lives
              and be active contributors to society.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "10px",
              }}
            >
              Gateway was started by a parent of a child with special needs. We
              believe this collaboration, of parents and professionals, is the
              cornerstone of our success in working with students with
              disabilities.
            </Typography>
            <Typography
              variant=""
              sx={{
                marginTop: "10px",
              }}
            >
              We are a lab school. Our mission is to generate and spread
              learning in our field. We work with individuals and organisations
              in different capacities to help achieve this goal.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        lg={6}
        xs={12}
        sx={{
          paddingTop: 15,
        }}
      >
        <Typography variant="h4" align="center">
          Values
        </Typography>
      </Grid>
      <Grid
        item
        lg={6}
        xs={12}
        sx={{
          paddingTop: 3,
        }}
      >
        <Typography variant="body1" align="center">
          Teaching and learning at Gateway rests on four values.
        </Typography>
      </Grid>
    </div>
  );
}

export default Content;
