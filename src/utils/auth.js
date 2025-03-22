import { checkResponse } from "./api";
import { BASE_URL } from "./constants";

// export const BASE_URL = "http://localhost:3001";

// console.log("Where are you feching from ", process.env.NODE_ENV);

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

export const getUserInfo = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
};

export const editProfileInfo = (userData) => {
  const token = localStorage.getItem("jwt");
  if (!token) {
    console.error("JWT Token not found or invalid");
  }

  if (!userData.name || !userData.avatar) {
    console.log("Invalid input for either name or avatar");
    return;
  }

  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: userData.name,
      avatar: userData.avatar,
    }),
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to update user data");
    }
    // return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    return checkResponse(res);
  });
};
