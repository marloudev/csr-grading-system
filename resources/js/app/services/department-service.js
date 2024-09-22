import axios from "axios";

export async function get_department_service() {
    try {
        const res = await axios.get("/api/department");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_department_by_id_service(id) {
    try {
        const res = await axios.get(`/api/department/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_department_service(data) {
    try {
        const res = await axios.post('/api/department', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_department_service(data) {
    try {
        const res = await axios.put(`/api/department/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_department_service(id) {
    try {
        const res = await axios.delete(`/api/department/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}