import React, { useState } from "react";

const Search = () => {
  const apiKey = "12725301-6d1d3080ea8ea5f1d3bde1efa";

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(15);
  const [result, setResult] = useState([]);

  return (
    <>
      <input
        name="searchText"
        value={text}
        // onChange={onTextChange}
        floatingLabelText="search for image"
      />
      <br />
      <select
        name="amount"
        value={amount}
        // onChange={this.onAmountChange}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={30}>30</option>
        <option value={50}>50</option>
      </select>
      <br />
      {/* {this.state.images.length > 0 ? (
        <ImageResults images={this.state.images} />
      ) : (
        <p>Search Something</p>
      )} */}
    </>
  );
};

export default Search;
