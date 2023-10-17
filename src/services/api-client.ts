import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a8fd1b11049a4d5bb09025c9604df835",
  },
});
