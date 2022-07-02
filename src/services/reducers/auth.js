import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED 
} from "../types";
import {getCookie} from '../../utils/cookiesHandlers'


const initialState = {
  name: '',
  email: '',
  isAutorized: getCookie('authToken'),

  isRegRequested: false,
  isRegError: false,

  isLoginRequested: false,
  isLoginError: false,

  isLogOutRequested: false,
  isLogOutError: false,

  isForgotPassRequested: false,
  isForgotPassError: false
}

export const auth = (state = initialState, action) => {

    switch (action.type) {
      case REGISTRATION_REQUEST:
        return { ...state, isRegRequested:true, isRegError: false};
      
      case REGISTRATION_SUCCESS:
        return {...state, 
          name: action.payload.name,
          email: action.payload.email,
          isRegRequested: false,
        }

      case REGISTRATION_FAILED: 
        return {...state,
          isRegRequested: false,
          isRegError: true
        }
      
      case LOGIN_REQUEST:
        return {...state,
          isLoginRequested: true,
          isLoginError: false
        }
      
      case LOGIN_SUCCESS:
        return {...state,
          name: action.payload.name,
          email: action.payload.email,
          isLoginRequested: false,
          isAutorized: true
        }

      case LOGIN_FAILED:
        return {...state,
          isLoginRequested: false,
          isLoginError: true
        }

        case LOGOUT_REQUEST: {
          return {
            ...state,
            isLogOutRequested: true,
            isLogOutError: false,
          };
        }
        case LOGOUT_SUCCESS: {
          return {
            ...state,
            isLogOutError: false,
            name: '',
            email: '',
            isLogOutRequested: false,
            isAutorized: false
          };
        }
        case LOGOUT_FAILED: {
          return { ...state, isLogOutError: true, isLogOutRequested: false };
        }

        case FORGOT_PASSWORD_REQUEST: {
          return {
            ...state,
            isForgotPassRequested: true,
            isForgotPassError: false
          }
        }

        case FORGOT_PASSWORD_SUCCESS: {
          return {
            ...state,
            isForgotPassRequested: false
          }
        }

        case FORGOT_PASSWORD_FAILED: 
        return {
          ...state,
          isForgotPassRequested: false,
          isForgotPassError: true
        }
      
      default:
         return state
      
    }
}