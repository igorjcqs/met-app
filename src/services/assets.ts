import { api } from "./api";

export async function fetchNftByToken() {
  const res = await api
    .get("/assets")
    .then((res) => {
      return {
        code: res.status,
        data: res.data.data,
      };
    })
    .catch((err) => {
      return {
        code: err.response.status,
        data: null,
      };
    });

  return res;
}
