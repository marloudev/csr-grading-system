import { get_user_login_service } from '../services/user-service';
import { appSlice } from './app-slice';


export function addCartProducts(product_id) {
  return async function (dispatch, getState) {
    dispatch(appSlice.actions.incrementByAmount(10));

  };
}

export function get_user_login_thunk() {
  return async function (dispatch, getState) {
    const res = await get_user_login_service(3)
    dispatch(appSlice.actions.setUser(res));
    return res
  }
}