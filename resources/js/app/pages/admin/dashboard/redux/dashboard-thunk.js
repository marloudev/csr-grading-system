import { store_dashboard_service, delete_dashboard_service, update_dashboard_service, get_dashboard_by_id_service, get_dashboard_service } from "@/app/services/dashboard-service";



export function get_dashboard_thunk() {
  return async function (dispatch, getState) {
    // dispatch(appSlice.actions.incrementByAmount(10));
    const res = get_dashboard_service()
    return res
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
