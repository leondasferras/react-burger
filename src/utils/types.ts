import { act } from '@testing-library/react';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { rootReducer } from "../services/reducers/root";
import { store } from '../services/store';
import { Action, ActionCreator } from 'redux';
import { TLoginActions } from '../services/actions/login';
import {TRegistrationActions} from '../services/actions/registration';
import {TLogoutActions} from '../services/actions/logout'
import {TResetPassActions} from '../services/actions/reset-password'
import {TForgotPassActions} from '../services/actions/forgotPassword'
import {TGetUserdataActions} from  '../services/actions/getUserData'
import {TSetUserdataActions} from '../services/actions/setUserdata'
import {TGetIngredientsActions} from '../services/actions/Ingredients'
import {TConstructorActions} from '../services/actions/constructor'
import {ICreateOrderActions} from '../services/actions/order'
import {TWSActions} from '../services/actions/webSocket'


type TApplicationActions = TLoginActions | TRegistrationActions | TLogoutActions | TLogoutActions | TResetPassActions | TForgotPassActions | TGetUserdataActions | TSetUserdataActions |TGetIngredientsActions |TConstructorActions | ICreateOrderActions | TWSActions;

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v?: number;
  uid?:string;
}

export type TOrder = {
  createdAt: string;
  ingredients: Array<string>;
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
}

export type TOrders = {
	orders: Array<TOrder>;
	total: number;
	totalToday: number;
}

export type TOrderInfo = {
  name: string;
  order: {
    ingredients: Array<{}>
  };
  success: boolean;
}

export type TUserData = {
  email: string;
  name?:string;
  password:string;
}

export type TUser = {
  name: string;
  email: string;
  password?: string;
}

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;