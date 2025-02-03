import { store_grade_service, delete_grade_service, update_grade_service, get_grade_by_id_service, get_grade_service, get_student_grade_service, get_grades_service } from "@/app/services/grade-service";
import {gradesSlice} from "./grade-slice";




export function get_grades_thunk(id) {
  return async function (dispatch, getState) {
    const res =await get_grades_service(id)
    dispatch(gradesSlice.actions.setYearGrade(res.data.response));
    return res
  };
}

export function get_grade_thunk() {
  return async function (dispatch, getState) {
    const res =await get_grade_service()
    dispatch(gradesSlice.actions.setGrades(res.data.response));
    return res
  };
}

export function get_grade_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res =await get_grade_by_id_service(id)
    dispatch(gradesSlice.actions.setUserGrades(res.data.response));
    return res
  };
}

export function get_student_grade_thunk(id) {
  return async function (dispatch, getState) {
    const res =await get_student_grade_service(id)
    dispatch(gradesSlice.actions.setUserGrades(res.data.response));
    return res
  };
}

export function store_grade_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_grade_service(data)
    return res
  };
}

export function update_grade_thunk(data) {
  return async function (dispatch, getState) {
    const res = update_grade_service(data)
    return res
  };
}

export function delete_grade_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_grade_service(id)
    return res
  };
}
