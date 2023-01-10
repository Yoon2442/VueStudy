import axios from "axios";

const BASE_URL = "//localhost:8081/";
// const BASE_URL = 'https://jsonplaceholder.typicode.com/';
// const PAGESIZE = 10;

export default {
  getArticles: function (page) {
    console.log(page);
    return axios.get(BASE_URL + "board/list");
  },

  getArticle: function (id) {
    return axios.get(BASE_URL + `board/${id}`);
  },

  postArticle: function (user_id, title, body) {
    return axios.post(BASE_URL + "board", {
      user_id: user_id,
      title: title,
      body: body,
    });
  },

  //   patchArticle: function () {
  //     return axios.patch(BASE_URL + "board");
  //   },

  patchArticle: function (id, user_id, title, body) {
    return axios.patch(BASE_URL + "board", {
      id: id,
      user_id: user_id,
      title: title,
      body: body,
    });
  },

  deleteArticle: function (id) {
    return axios.delete(BASE_URL + `board/${id}`);
  },
};
