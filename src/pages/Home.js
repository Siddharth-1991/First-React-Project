import React from "react";
import Slideshow from "../component/Slideshow";
import Content from "../component/Content";
import Card from "../component/Card";

import { Grid } from "@mui/material";
import Card2 from "../component/Card2";
import { icons } from "../utils/icons";
import Card2heading from "../component/Card2heading";

function Home() {
  return (
    <div>
      <Slideshow />
      <Content />
      <Grid Container xs={12}>
        <Grid
          item
          container
          xs={12}
          sx={{
            paddingTop: 10,
            // border:'1px solid black',
          }}
        >
          <Grid item lg={6} xs={12}>
            <Card
              cardImage={icons().image4}
              cardHeading="We are compassionate and caring"
              cardContent1="We appreciate the diversity of individuals."
              cardContent2="We operate as a safe and joyful space for our students, parents and teachers."
              cardContent3="We reach out to support when someone needs our help."
              cardContent4="We listen."
            />
          </Grid>

          <Grid
            item
            lg={6}
            xs={12}
            sx={{
              paddingTop: 10,
            }}
          >
            <Grid item lg={6} xs={12}>
              <Card
                cardImage={icons().image5}
                cardHeading="We are committed to learning and excellence"
                cardContent1={`We engage in continuous inquiry and innovate`}
                cardContent2={`We ensure self-reflection is a part of our professional practice`}
                cardContent3={`We invest our time in research to inform our classroom practices.`}
                cardContent4={`We hold ourselves to high standards.

We know that every person has the potential to learn and grow.`}
              />
            </Grid>

            <Grid
              item
              lg={6}
              xs={12}
              sx={{
                paddingTop: 10,
              }}
            ></Grid>
            <Card
              cardImage={icons().image6}
              cardHeading="We collaborate"
              cardContent1="We work as a team"
              cardContent2="We share our learning with our internal, extended and global community."
              cardContent3="We work with external partners to grow our impact, learnings and research."
              cardContent4="We keep our classrooms open and value feedback
We trust each other and know our different strengths."
            />
          </Grid>
          <Grid
            item
            lg={6}
            xs={12}
            sx={{
              paddingTop: 10,
            }}
          >
            <Card
              cardImage={icons().image7}
              cardHeading={"We persevere to reach our goal of social change"}
              cardContent1="We go the extra mile."
              cardContent2="We dream big."
              cardContent3="We thrive when individuals grow together with the organization and community."
              cardContent4="We work hard to change social perceptions.
We take on challenges with grit and resilience."
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={6} xs={12}>
        <Card2heading />
      </Grid>
      <Grid Container xs={12}>
        <Grid
          item
          container
          xs={12}
          sx={{
            paddingTop: 10,
            // border:'1px solid black',
          }}
        >
          <Grid item lg={6} xs={12}>
            <Card2
              cardImage1={icons().image8}
              cardHeading1="Covid-19: Special children face a challenged world"
              cardContent1="Technology has filled some of the gaps caused by school 
        closures. But the absence of the human touch remains a critical factor for
         children who are differently abled."
              cardContent2="Jan, 2022"
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <Card2
              cardImage1={icons().image9}
              cardHeading1="The power of teacher collaboration"
              cardContent1="We are all aware of that proverb, ‘Unity is strength’. When we come together we can achieve great things than we can’t individually."
              cardContent2="March, 2022"
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <Card2
              cardImage1={icons().image10}
              cardHeading1="Professional development for inclusive education: insights from India"
              cardContent1="Gateway is committed to building an inclusive future for our children. This article, which is published in the International Journal of Inclusive Education."
              cardContent2="Feb, 2022"
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <Card2
              cardImage1={icons().image11}
              cardHeading1="Identification of Learning Disabilities in India"
              cardContent1="We are excited to share an article published in the international journal, Intervention in School and Clinic."
              cardContent2="Jan, 2022"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
