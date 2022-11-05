import { api } from "./api";

export async function signInService(email: string, password: string) {
  const res = await api
    .post("/login", {
      email: email,
      password: password,
    })
    .then((res) => {
      return {
        code: res.status,
        data: {
          token: res.data.accessToken,
          message: "logged",
        },
      };
    })
    .catch((err) => {
      return {
        code: err.response.status,
        data: {
          token: null,
          message: err.response.data.message,
        },
      };
    });

  return res;
}
