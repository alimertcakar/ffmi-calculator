import React from "react";
import { Container, Paper, Typography as T, Box } from "@material-ui/core";
import BodyForm from "./BodyForm/BodyForm.component";

function App() {
  return (
    <Container>
      <Paper style={{ padding: 20 }}>
        <h1>Maximum Muscular Potential Calculator</h1>
        <T component="strong">
          Calculate how much muscle you can gain in your body's physical limits
        </T>
        <T>
          Equations are made by examining muscle ratio's of world class drug
          free body builders.
        </T>
        <BodyForm />
      </Paper>
    </Container>
  );
}

export default App;
