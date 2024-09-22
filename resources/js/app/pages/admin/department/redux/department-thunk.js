import { store_department_service, delete_department_service, update_department_service, get_department_by_id_service, get_department_service } from "@/app/services/department-service";



export function get_department_thunk() {
  return async function (dispatch, getState) {
    // dispatch(appSlice.actions.incrementByAmount(10));
    const res = get_department_service()
    return res
  };
}

export function get_department_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = get_department_by_id_service(id)
    return res
  };
}

export function store_department_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_department_service(data)
    return res
  };
}

export function update_department_thunk(data) {
  return async function (dispatch, getState) {
    const res = update_department_service(data)
    return res
  };
}

export function delete_department_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_department_service(id)
    return res
  };
}
