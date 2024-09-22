import { delete_course_service, get_course_by_id_service, get_course_service, store_course_service, update_course_service } from '@/app/services/course-service';
import {courseSlice} from './course-slice';


export function get_course_thunk() {
  return async function (dispatch, getState) {
    const res = await get_course_service(2)
    dispatch(courseSlice.actions.setCouses(res.data.response));
    return res
  };
}

export function get_course_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = get_course_by_id_service(id)
    return res
  };
}

export function store_course_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_course_service(data)
    return res
  };
}

export function update_course_thunk(data) {
  return async function (dispatch, getState) {
    const res = update_course_service(data)
    return res
  };
}

export function delete_course_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_course_service(id)
    return res
  };
}
