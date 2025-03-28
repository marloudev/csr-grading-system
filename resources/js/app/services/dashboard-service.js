import axios from "axios";

export async function get_dashboard_service(search) {
    try {
        const res = await axios.get("/api/dashboard" + search ?? "");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_dashboard_by_id_service(id) {
    try {
        const res = await axios.get(`/api/dashboard/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_dashboard_service(data) {
    try {
        const res = await axios.post("/api/dashboard", data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_dashboard_service(data) {
    try {
        const res = await axios.put(`/api/dashboard/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_dashboard_service(id) {
    try {
        const res = await axios.delete(`/api/dashboard/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}
