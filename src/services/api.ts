import { isConstructorDeclaration } from "typescript";
import { deleteCookie, getCookie, setCookie } from "../utils/cookiesHandlers";
import { TUserData } from "../utils/types";

const baseUrl = "https://norma.nomoreparties.space/api";

function checkResponse(res: Response) {
  return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
}

export const getIngredientsApi = () => {
  return fetch(`${baseUrl}/ingredients`).then(checkResponse);
};

export const orderApi = (orderData: {ingredients:Array<String>}) => {
  return fetch(`${baseUrl}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("authToken"),
    },
    body: JSON.stringify(orderData),
  }).then(checkResponse);
};

export const registrationRequest = ({ email, password, name }: TUserData) => {
  return fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  }).then(checkResponse);
};

export const forgotPassRequest = ({ email }: {email:string}) => {
  return fetch(`${baseUrl}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  }).then(checkResponse);
};

export const loginRequest = ({ email, password }: {email:string, password:string}) => {
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

export const resetPassRequest = ({ password, token }: {password:string, token:string}) => {
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

export const setUserDataRequest = (data:TUserData) => {
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

const requestWithExpiredToken = (url:string, config: RequestInit) => {
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

            
          })
          .then((res) => fetch(url, config).then(checkResponse));
      } else {
        return res;
      }
    });
};
