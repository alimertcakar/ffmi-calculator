import React from "react";
import { Container, Paper, Typography as T, Box } from "@material-ui/core";
import BodyForm from "./BodyForm/BodyForm.component";
import Slider from "@material-ui/core/Slider";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import BodyMassIndex from "./BodyMassIndex.component";
import global from "./GlobalTheme";

const useStyles = makeStyles({
  root: {
    height: 300,
  },
});
function App() {
  const cls = useStyles();

  function heightText(value: Number) {
    return `${value}cm`;
  }
  return (
    <ThemeProvider theme={global}>
      <Container>
        <Paper style={{ padding: 20 }}>
          <T component="h1" variant="h4">
            Body Fat Calculator
          </T>
          <T component="strong">Calculate your body fat</T>
          <T>Extra info</T>
          <BodyMassIndex />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
