import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import HumanIcon from "./Svg/HumanIcon.svg";
import { motion } from "framer-motion";
//TODO humanIcon'un için yağ ile doldurmayı unutma
const useStyles = makeStyles({
  root: {
    height: 300,
  },
});
const marks = [
  {
    value: 100,
    label: "100cm",
  },
  {
    value: 150,
    label: "150cm",
  },
  {
    value: 175,
    label: "175cm",
  },
  {
    value: 190,
    label: "190cm",
  },
  {
    value: 240,
    label: "240cm",
  },
];
const marksWeight = [
  {
    value: 40,
    label: "40kg",
  },
  {
    value: 70,
    label: "70kg",
  },
  {
    value: 100,
    label: "100kg",
  },
  {
    value: 125,
    label: "125kg",
  },
  {
    value: 150,
    label: "150kg",
  },
];
function App() {
  const cls = useStyles();
  const [sliderValue, setSliderValue] = useState<number | number[]>(175);
  const [weightValue, setWeightValue] = useState<number | number[]>(70);

  function heightText(value: Number) {
    return `${value}cm`;
  }
  return (
    <Grid container style={{ marginTop: 30 }} justify="space-evenly">
      <Grid item>
        <div className={cls.root}>
          <Slider
            onChange={(event: any, value: number | number[]) => {
              setSliderValue(value);
            }}
            orientation="vertical"
            defaultValue={175}
            min={100}
            max={240}
            aria-labelledby="height-slider"
            getAriaValueText={heightText}
            marks={marks}
            valueLabelDisplay="on"
          />
        </div>
      </Grid>
      <Grid item>
        <div className={cls.root}>
          <Slider
            onChange={(event: any, value: number | number[]) => {
              setWeightValue(value);
            }}
            orientation="vertical"
            defaultValue={70}
            min={40}
            max={150}
            aria-labelledby="weight-slider"
            getAriaValueText={heightText}
            marks={marksWeight}
            valueLabelDisplay="on"
          />
        </div>
      </Grid>
      <Grid
        container
        item
        style={{
          marginLeft: 20,
          display: "contents",
        }}
      >
        <motion.img
          src={HumanIcon}
          alt=""
          style={{
            scaleY: (sliderValue as number) / 100,
            scaleX: (weightValue as number) / 50,
          }}
        ></motion.img>
      </Grid>
      <Grid item xs={12} style={{ marginTop: "3rem" }}>
        Body fat ratio:{" "}
        {(
          (weightValue as number) /
          ((sliderValue as number) / 100) ** 2
        ).toFixed(2)}
      </Grid>
    </Grid>
  );
}

export default App;
