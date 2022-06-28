import { getCookie } from "../utils/cookiesHandlers";

const baseUrl = "https://norma.nomoreparties.space/api"


function checkResponse(res) {
 return res.ok? res.json(): Promise.reject(`Ошибка ${res.status}`);
} 

export const getIngredientsApi = () => { 
  return fetch(`${baseUrl}/ingredients`)
  .then(checkResponse)
  
}

export const orderApi = (orderData) => {
  return fetch(`${baseUrl}/orders`,  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  })
  .then(checkResponse)
}

export const registrationRequest  = ({email, password, name}) => {
  return fetch (`${baseUrl}/auth/register`, {
    method: 'POST',
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name })
  })
  .then(checkResponse)
}


export const forgotPassRequest = ({email}) => {
  return fetch (`${baseUrl}/password-reset`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email})
  })
  .then(checkResponse)
}


export const loginRequest = ({email, password}) => {
  return fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email, password})
  })
  .then(checkResponse)
}


export const logoutRequest = () => {
  return fetch(`${baseUrl}/auth/logout`, {
    method:'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({token:getCookie('refreshToken')})
  })
  .then(checkResponse)
}


