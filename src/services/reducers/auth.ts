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
  FORGOT_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAILED,
  SET_USER_DATA_REQUEST,
  SET_USER_DATA_SUCCESS,
  SET_USER_DATA_FAILED 
} from "../types";
import {getCookie} from '../../utils/cookiesHandlers'
import { TRegistrationActions } from "../actions/registration";
import { TLoginActions } from "../actions/login";
import { TLogoutActions } from "../actions/logout";
import { TForgotPassActions } from "../actions/forgotPassword";
import { TResetPassActions } from "../actions/reset-password";
import { TGetUserdataActions } from "../actions/getUserData";
import { TSetUserdataActions } from "../actions/setUserdata";

type TAuthState = {
  name: string|undefined;
  email: string;
  isAutorized: string | boolean | undefined;
  isRegRequested: Boolean,
  isRegError: Boolean,

  isLoginRequested: Boolean,
  isLoginError: Boolean,

  isLogOutRequested: Boolean,
  isLogOutError: Boolean,

  isForgotPassRequested: Boolean,
  isForgotPassError: Boolean,
  isForgotPassSuccess: Boolean,

  isResetPassRequested: Boolean,
  isResetPassSuccess: Boolean,
  isResetPassError: Boolean,

  isUserDataRequested: Boolean,
  isUserDataError:Boolean,

  isSetUserDataRequested:Boolean,
  isSetUserDataError: Boolean
}


const initialState:TAuthState = {
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
  isForgotPassError: false,
  isForgotPassSuccess: false,

  isResetPassRequested: false,
  isResetPassSuccess: false,
  isResetPassError: false,

  isUserDataRequested: false,
  isUserDataError:false,

  isSetUserDataRequested:false,
  isSetUserDataError: false
}

export const auth = (state = initialState, action: TRegistrationActions | TLoginActions | TLogoutActions | TLogoutActions | TForgotPassActions | TResetPassActions | TGetUserdataActions | TSetUserdataActions):TAuthState => {

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
            isForgotPassRequested: false,
            isForgotPassSuccess: true
          }
        }

        case FORGOT_PASSWORD_FAILED: 
        return {
          ...state,
          isForgotPassRequested: false,
          isForgotPassError: true
        }

        case RESET_PASSWORD_REQUEST: {
          return {
            ...state,
            isResetPassRequested: true,
            isResetPassError: false
          }
        }

        case RESET_PASSWORD_SUCCESS: {
          return {
            ...state,
            isResetPassRequested: false,
            isResetPassSuccess: true,
            isForgotPassSuccess: false
          }
        }

        case RESET_PASSWORD_FAILED: 
        return {
          ...state,
          isResetPassRequested: false,
          isResetPassError: true
        }

        case GET_USER_DATA_REQUEST:
          return {
            ...state,
            isUserDataRequested: true,
            isUserDataError: false
          }
        
        case GET_USER_DATA_SUCCESS:
          return {
            ...state,
            isUserDataRequested: false,
            name: action.payload.user.name,
            email: action.payload.user.email
          }
        
        case GET_USER_DATA_FAILED: 
          return {
            ...state,
            isUserDataRequested: false,
            isUserDataError: false
          }

          case SET_USER_DATA_REQUEST: 
          return {
            ...state,
            isSetUserDataRequested:true,
            isSetUserDataError: false
          }

          case SET_USER_DATA_SUCCESS:
            return {
              ...state,
              isSetUserDataRequested: false,
              name: action.payload.user.name,
              email: action.payload.user.email
            }

          case SET_USER_DATA_FAILED: 
            return {
              ...state,
              isSetUserDataRequested: false,
              isSetUserDataError: false
            }
      
      default:
         return state
      
    }
}