import axios from "axios";

export async function get_instructor_service() {
    try {
        const res = await axios.get("/api/account");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_instructor_by_id_service(id) {
    try {
        const res = await axios.get(`/api/account/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_instructor_service(data) {
    try {
        const res = await axios.post('/api/account', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_instructor_service(data) {
    try {
        const res = await axios.put(`/api/account/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_instructor_service(id) {
    try {
        const res = await axios.delete(`/api/account/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}