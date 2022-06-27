import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
} from "../types";

const initialState = {
  name: '',
  email: '',
  isLoading: false,
  isError: false,

}

export const registration = (state = initialState, action) => {

    switch (action.type) {
      case REGISTRATION_REQUEST:
        return { ...state, isLoading:true, isError: false};
      
      case REGISTRATION_SUCCESS:
        return {...state, 
          name: action.payload.name,
          email: action.payload.email,
          isLoading: false,
        }

      case REGISTRATION_FAILED: 
        return {...state,
          isLoading: false,
          isError: true
        }
      
      default:
         return state
      
    }
}