import { store_settings_service, delete_settings_service, update_settings_service, get_settings_by_id_service, get_settings_service } from "@/app/services/settings-service";



export function get_settings_thunk() {
  return async function (dispatch, getState) {
    // dispatch(appSlice.actions.incrementByAmount(10));
    const res = get_settings_service()
    return res
  };
}

export function get_settings_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = get_settings_by_id_service(id)
    return res
  };
}

export function store_settings_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_settings_service(data)
    return res
  };
}

export function update_settings_thunk(data) {
  return async function (dispatch, getState) {
    const res = update_settings_service(data)
    return res
  };
}

export function delete_settings_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_settings_service(id)
    return res
  };
}
