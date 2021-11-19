import React, { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";

import classes from "./App.module.css";
import SingleImage from "./components/singleImage/SingleImage";
import ImageResults from "./components/imageResults/ImageResults";

const App = () => {
  const [imageDesc, setImageDesc] = useState("");
  const [showSingleImage, setShowSindleImage] = useState(false);
  const [result, setResult] = useState([]);

  const getImagesFromPixbay = (images) => {
    setResult(images);
  };
  const closeSingleImageHandler = () => {
    setShowSindleImage(false);
    setImageDesc("");
  };
  const showSingleImageHandler = (link) => {
    setImageDesc(link);
    setShowSindleImage(true);
  };

  return (
    <div className={classes.app}>
      <NavBar />
      <Search getImagesFromPixbay={getImagesFromPixbay} />
      <div className={classes.resultBox}>
        {result.length > 0 ? (
          <ImageResults
            images={result}
            showSingleImage={showSingleImageHandler}
          />
        ) : (
          <p>Search Something</p>
        )}
      </div>
      {showSingleImage && (
        <SingleImage
          image={imageDesc}
          closeSingleImage={closeSingleImageHandler}
        />
      )}
    </div>
  );
};

export default App;
