import React, { useState } from "react";
import classes from "./imageResult.module.css";
import fullScreen from "./../../assesst/full.svg";
const ImageResult = ({ images, showSingleImage }) => {
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
                  onClick={() =>
                    showSingleImage({
                      url: largeImageURL,
                      name: user,
                      type: type,
                      tags: tags,
                    })
                  }
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
    </>
  );
};

export default ImageResult;
