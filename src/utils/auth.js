import { checkResponse } from "./api";

export const BASE_URL = "http://localhost:3001";

export const registerUser = (userData) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userData.name,
      avatar: userData.avatar,
      email: userData.email,
      password: userData.password,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
};

export const loginUser = (userData) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userData.email,
      password: userData.password,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
};
