import { store_dashboard_service, delete_dashboard_service, update_dashboard_service, get_dashboard_by_id_service, get_dashboard_service } from "@/app/services/dashboard-service";
import {dashboardSlice} from "./dashboard-slice";



export function get_dashboard_thunk(search) {
  return async function (dispatch, getState) {
    const res = await get_dashboard_service(search)
    dispatch(dashboardSlice.actions.setDashboards(res.data));
  };
}

export function get_dashboard_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = get_dashboard_by_id_service(id)
    return res
  };
}

export function store_dashboard_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_dashboard_service(data)
    return res
  };
}

export function update_dashboard_thunk(data) {
  return async function (dispatch, getState) {
    const res = update_dashboard_service(data)
    return res
  };
}

export function delete_dashboard_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_dashboard_service(id)
    return res
  };
}
