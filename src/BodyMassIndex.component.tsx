import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Grid";
import HumanIcon from "./Svg/HumanIcon.svg";
import { motion } from "framer-motion";
import BodyFatChart from "./Svg/BodyFatChart.jpg";
import RoomIcon from "@material-ui/icons/Room";
function clamp(num: number, min: number, max: number) {
  return num <= min ? min : num >= max ? max : num;
}
//TODO humanIcon'un içini doldurmayı unutma
//TODO vücut kitle ile yağ indeksi farklı şeyler
const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
  },
  bmiText: { fontSize: "4rem", color: theme.palette.primary.main },
}));
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
    value: 35,
    label: "35kg",
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
  let bodyFatRatio: number = clamp(
    parseInt(
      ((weightValue as number) / ((sliderValue as number) / 100) ** 2).toFixed(
        2
      )
    ),
    0.5,
    40
  );

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
            style={{ userSelect: "none" }}
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
            min={35}
            max={150}
            aria-labelledby="weight-slider"
            getAriaValueText={heightText}
            marks={marksWeight}
            valueLabelDisplay="on"
            style={{ userSelect: "none", zIndex: 2 }}
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
            userSelect: "none",
            filter:
              "invert(33%) sepia(100%) saturate(1113%) hue-rotate(187deg) brightness(93%) contrast(89%)",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            scaleY: (sliderValue as number) / 100,
            scaleX: (weightValue as number) / 50,
          }}
        ></motion.img>
      </Grid>
      <Grid
        container
        item
        xs={12}
        style={{ marginTop: "3rem" }}
        justify="center"
      >
        <img src={BodyFatChart} alt="" style={{ userSelect: "none" }}></img>
        <motion.div
          style={{ position: "absolute" }}
          animate={{ x: -175 + bodyFatRatio * 8 }}
        >
          <RoomIcon color="primary" />
        </motion.div>
      </Grid>
      <Grid
        container
        item
        xs={12}
        style={{ marginTop: "3rem", userSelect: "none" }}
        justify="center"
      >
        <Typography className={cls.bmiText}>{bodyFatRatio}</Typography>
      </Grid>
    </Grid>
  );
}

export default App;
