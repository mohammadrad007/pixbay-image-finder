import React, { useState } from "react";

import { getImageFromPixbay } from "../../services/search";
import classes from "./search.module.css";
const Search = ({ getImagesFromPixbay }) => {
  const [text, setText] = useState("dog");
  const [error, setError] = useState("");
  const [amount, setAmount] = useState(5);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (text.length > 0 && text !== "") {
      setError("");
      getImageFromPixbay(text, amount).then((res) => {
        if (res.status === 200) {
          getImagesFromPixbay(res.data.hits);
        }
      });
    } else {
      setError("Please Fill Search Box");
    }
  };
  return (
    <>
      <form className={classes.formSearch} onSubmit={handleSearchSubmit}>
        <input
          name="searchText"
          value={text}
          placeholder="Search Something"
          onChange={(e) => setText(e.target.value)}
        />

        <select
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={30}>30</option>
          <option value={50}>50</option>
        </select>
        <button type="submit">Search</button>
      </form>
      <div className={classes.errorBox}>
        {error.length > 0 && <p>{error}</p>}
      </div>
    </>
  );
};

export default Search;
