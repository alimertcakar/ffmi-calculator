import React from "react";
import Headsvg from "../Svg/head.svg";
import Grid from "@material-ui/core/Grid";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 2 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <Grid container justify="center">
        <img
          src={Headsvg}
          alt=""
          height="90px"
          width="50%"
          style={{ marginBottom: "10px" }}
        ></img>
      </Grid>
    </motion.div>
  );
}

export default App;
