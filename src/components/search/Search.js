import React, { Component } from "react";
import { TextField, SelectField, MenuItem } from "material-ui";
import axios from "axios";
import ImageResults from "../image-results/ImageResults";
class Search extends Component {
  state = {
    searchText: "",
    amount: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: "12725301-6d1d3080ea8ea5f1d3bde1efa",
    images: []
  };
  onTextChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
              this.state.searchText
            }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(res =>
            this.setState({
              images: res.data.hits
            })
          )
          .catch(err => console.log(err));
      }
    );
  };
  onAmountChange = (e, index, value) => {
    this.setState({
      amount: value
    });
  };
  render() {
    console.log(this.state.images);
    return (
      <div>
        <TextField
          name="searchText"
          value={this.state.serachText}
          onChange={this.onTextChange}
          floatingLabelText="search for image"
          fullWidth={true}
        />
        <br />
        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br />

      </div>
    );
  }
}
export default Search;
