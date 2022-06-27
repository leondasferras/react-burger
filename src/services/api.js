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