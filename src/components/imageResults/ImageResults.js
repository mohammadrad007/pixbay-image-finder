import React from "react";
import classes from "./imageResult.module.css";
import fullScreen from "./../../assesst/full.svg";
const ImageResult = ({ images }) => {
  console.log(images);
  return (
    <>
      {images?.map(
        ({ id, previewURL, likes, comments, type, user, largeImageURL }) => (
          <div className={classes.imageItem} key={id}>
            <div className={classes.image}>
              <img src={previewURL} alt={user} />
              <div className={classes.fullScreen}>
                <img src={fullScreen} />
              </div>
            </div>
            <p className={classes.imageUser}>{user}</p>
            <div className={classes.imageItemFooter}>
              <span>Likes: {likes}</span>
              <span>Comments: {comments}</span>
              <span>Type: {type}</span>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default ImageResult;
