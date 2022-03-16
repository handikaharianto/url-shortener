import axios from "axios";

const postOriginalUrl = async (url) => {
  try {
    const { data } = await axios.post("/url", {
      url,
    });

    return data;
  } catch (error) {
    return error.response.data;
  }
};

export { postOriginalUrl };
