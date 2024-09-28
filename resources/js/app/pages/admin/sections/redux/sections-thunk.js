import { store_sections_service, delete_sections_service, update_sections_service, get_sections_by_id_service, get_sections_service } from "@/app/services/sections-service";
import {sectionsSlice} from "./sections-slice";



export function get_sections_thunk() {
  return async function (dispatch, getState) {
    // dispatch(appSlice.actions.incrementByAmount(10));
    const res =await get_sections_service()
    dispatch(sectionsSlice.actions.setSections(res.data.response));
    return res
  };
}

export function get_sections_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = get_sections_by_id_service(id)
    return res
  };
}

export function store_sections_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_sections_service(data)
    return res
  };
}

export function update_sections_thunk(data) {
  return async function (dispatch, getState) {
    const res = update_sections_service(data)
    return res
  };
}

export function delete_sections_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_sections_service(id)
    return res
  };
}
