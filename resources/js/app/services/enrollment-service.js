import axios from "axios";

export async function get_enrollment_service() {
    try {
        const res = await axios.get("/api/enrollment");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_enrollment_by_id_service(id) {
    try {
        const res = await axios.get(`/api/enrollment/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_enrollment_service(data) {
    try {
        const res = await axios.post('/api/enrollment', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_enrollment_service(data) {
    try {
        const res = await axios.put(`/api/enrollment/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_enrollment_service(id) {
    try {
        const res = await axios.delete(`/api/enrollment/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}