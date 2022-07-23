import { isConstructorDeclaration } from "typescript";
import { deleteCookie, getCookie, setCookie } from "../utils/cookiesHandlers";

const baseUrl = "https://norma.nomoreparties.space/api";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
}

export const getIngredientsApi = () => {
  return fetch(`${baseUrl}/ingredients`).then(checkResponse);
};

export const orderApi = (orderData) => {
  return fetch(`${baseUrl}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("authToken"),
    },
    body: JSON.stringify(orderData),
  }).then(checkResponse);
};

export const registrationRequest = ({ email, password, name }) => {
  return fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  }).then(checkResponse);
};

export const forgotPassRequest = ({ email }) => {
  return fetch(`${baseUrl}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  }).then(checkResponse);
};

export const loginRequest = ({ email, password }) => {
  return fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

export const logoutRequest = () => {
  return fetch(`${baseUrl}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: getCookie("refreshToken") }),
  }).then(checkResponse);
};

export const resetPassRequest = ({ password, token }) => {
  return fetch(`${baseUrl}/reset-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, token }),
  }).then(checkResponse);
};

export const refreshTokenRequest = () => {
  return fetch(`${baseUrl}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: getCookie("refreshToken") }),
  }).then(checkResponse);
};

export const getUserDataRequest = () => {
  return requestWithExpiredToken(`${baseUrl}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("authToken"),
    },
  });
};

export const setUserDataRequest = (data) => {
  return requestWithExpiredToken(`${baseUrl}/auth/user`, {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("authToken"),
    },
    body: JSON.stringify(data),
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
};

const requestWithExpiredToken = (url, config) => {
  return fetch(url, config)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      if (res?.message === "jwt expired") {
        return refreshTokenRequest()
          .then((res) => {
            deleteCookie("authToken");
            deleteCookie("refreshToken");
            const authToken = res.accessToken.split("Bearer ")[1];
            const refreshToken = res.refreshToken;
            setCookie("authToken", authToken);
            setCookie("refreshToken", refreshToken);
            config.headers.Authorization = res.authToken;
          })
          .then(() => fetch(url, config).then(checkResponse));
      } else {
        return res;
      }
    });
};
