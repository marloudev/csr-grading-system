import { store_student_service, delete_student_service, update_student_service, get_student_by_id_service, get_student_service } from "@/app/services/student-service";
import {studentSlice} from "./student-slice";



export function get_student_thunk(search) {
  return async function (dispatch, getState) {
    const res = await get_student_service(3,search)
    dispatch(studentSlice.actions.setStudents(res.data.response));
    return res
  };
}

export function get_student_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = get_student_by_id_service(id)
    return res
  };
}

export function store_student_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_student_service(data)
    return res
  };
}

export function update_student_thunk(data) {
  return async function (dispatch, getState) {
    const res = update_student_service(data)
    return res
  };
}

export function delete_student_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_student_service(id)
    return res
  };
}
