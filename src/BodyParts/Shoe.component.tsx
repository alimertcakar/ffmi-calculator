import React from "react";
import Shoe from "../Svg/shoe.jpg";
import Grid from "@material-ui/core/Grid";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 0.5 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <Grid container justify="center">
        <img
          src={Shoe}
          alt=""
          height="90px"
          width="50%"
          style={{
            marginBottom: "10px",
            transform: "translateY(-315px) translateX(-73px)",
          }}
        ></img>
      </Grid>
    </motion.div>
  );
}

export default App;
