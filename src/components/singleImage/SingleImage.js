import React from "react";
import classes from "./singleImage.module.css";
import close from "./../../assesst/close.svg";

const SingleImage = ({ image, closeSingleImage }) => {
  console.log(image);
  const { url, name, tags, type } = image;
  return (
    <div className={classes.container}>
      <div className={classes.singleImageBox}>
        <div className={classes.singleImageHeader}>
          <div className={classes.headerTitle}>
            <h2>{type} from</h2>
            <p>{name}</p>
          </div>
          <div className={classes.headerClose} onClick={closeSingleImage}>
            <img src={close} alt="" />
          </div>
        </div>
        <div className={classes.singleImageBox}>
          <img src={url} alt={`${type} ${name}`} />
        </div>
      </div>
    </div>
  );
};

export default SingleImage;
