import axios from "axios";

export async function get_enrollments_service() {
    try {
        const res = await axios.get("/api/enrollments");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_enrollments_by_id_service(id) {
    try {
        const res = await axios.get(`/api/enrollments/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_enrollments_service(data) {
    try {
        const res = await axios.post('/api/enrollments', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_enrollments_service(data) {
    try {
        const res = await axios.put(`/api/enrollments/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_enrollments_service(id) {
    try {
        const res = await axios.delete(`/api/enrollments/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}