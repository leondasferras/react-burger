// hooks.ts
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { AppDispatch, AppThunk, RootState } from '../utils/types';


// export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>(); 
export const useDispatch = () => dispatchHook<any>(); 


export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
