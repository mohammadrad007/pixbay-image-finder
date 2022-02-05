import React from "react";
import close from "./../../assesst/close.svg";

import classes from "./singleImage.module.css";

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
        <div className={classes.image}>
          <img src={url} alt={`${type} ${name}`} />
        </div>
        <div>
          <p>Tags:</p>
          {tags.split(", ").map((tag, index) => (
            <span key={index}>#{tag} </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleImage;
