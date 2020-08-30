import React from "react";
import useStyles from "./BodyForm.style";
import Grid from "@material-ui/core/Grid";
import Head from "../BodyParts/Head.component";
import Body from "../BodyParts/Body.component";
import Hip from "../BodyParts/Hip.component";
import LeftArm from "../BodyParts/LeftArm.component";
import RightArm from "../BodyParts/RightArm.component";
import LeftLeg from "../BodyParts/LeftLeg.component";
import RightLeg from "../BodyParts/RightLeg.component";

function App() {
  const cls = useStyles();
  return (
    <Grid container justify="center" className={cls.bodyForm}>
      <Grid container justify="center" item xs={12}>
        <Head />
      </Grid>

      <Grid container justify="center" item xs={12}>
        <LeftArm /> <Body /> <RightArm />
      </Grid>
      <Grid container justify="center" item xs={12}>
        <Hip />
      </Grid>
      <Grid container justify="center" item xs={12}>
        <LeftLeg />
        <RightLeg />
      </Grid>
    </Grid>
  );
}

export default App;
