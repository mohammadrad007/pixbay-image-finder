import axios from "axios";

const apiKey = "12725301-6d1d3080ea8ea5f1d3bde1efa";
const apiUrl = "https://pixabay.com/api";

export const getImageFromPixbay = async (text, amount) => {
  const data = await axios
    .get(
      `${apiUrl}/?key=${apiKey}&q=${text}&image_type=photo&per_page=${amount}&safesearch=true`
    )
    .then((res) => res)
    .catch((err) => console.log(err));

  return data;
};
