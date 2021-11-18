import React, { useState } from "react";
import classes from "./imageResult.module.css";
import fullScreen from "./../../assesst/full.svg";
import SingleImage from "../singleImage/SingleImage";
const ImageResult = ({ images }) => {
  const [imageLink, setImageLink] = useState("");

  console.log(images);
  return (
    <>
      {images?.map(
        ({
          id,
          previewURL,
          likes,
          comments,
          type,
          user,
          largeImageURL,
          tags,
        }) => (
          <div className={classes.imageItem} key={id}>
            <div className={classes.image}>
              <img src={previewURL} alt={tags} />
              <div className={classes.fullScreen}>
                <img
                  src={fullScreen}
                  alt={`full screen ${user} ${type}`}
                  onClick={() => setImageLink(largeImageURL)}
                />
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
      {imageLink && <SingleImage imageLink={imageLink} />}
    </>
  );
};

export default ImageResult;
