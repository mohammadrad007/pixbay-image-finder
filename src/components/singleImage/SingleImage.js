import React from "react";
import classes from "./singleImage.module.css";

const SingleImage = ({ imageLink }) => {
  return (
    <div className={classes.container}>
      <img src={imageLink} />
    </div>
  );
};

export default SingleImage;
