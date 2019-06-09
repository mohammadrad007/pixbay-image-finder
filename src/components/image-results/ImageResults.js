import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  GridList,
  GridTile,
  IconButton,
  Dialog,
  FlatButton
} from "material-ui";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
class ImageResults extends Component {
  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map(image => (
            <GridTile
              title={image.tags}
              key={image.id}
              subtitle={
                <span>
                  by : <strong>{image.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton>
                  <ZoomIn color="white" />
                </IconButton>
              }
            >
              <img src={image.largeImageURL} alt="" />
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = null;
    }
    return <div>{imageListContent}</div>;
  }
}
ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};
export default ImageResults;
