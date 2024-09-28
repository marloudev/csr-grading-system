import { store_enrollments_service, delete_enrollments_service, update_enrollments_service, get_enrollments_by_id_service, get_enrollments_service } from "@/app/services/enrollments-service";
import {enrollmentsSlice} from "./enrollment-slice";



export function get_enrollments_thunk() {
  return async function (dispatch, getState) {
    const res = await get_enrollments_service(3)
    dispatch(enrollmentsSlice.actions.setEnrollments(res.data.response));
    return res
  };
}

export function get_enrollments_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = get_enrollments_by_id_service(id)
    return res
  };
}

export function store_enrollments_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_enrollments_service(data)
    return res
  };
}

export function update_enrollments_thunk(data) {
  return async function (dispatch, getState) {
    const res = update_enrollments_service(data)
    return res
  };
}

export function delete_enrollments_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_enrollments_service(id)
    return res
  };
}
