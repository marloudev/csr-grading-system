import axios from "axios";

export async function get_student_service() {
    try {
        const res = await axios.get("/api/user");
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function get_student_by_id_service(id) {
    try {
        const res = await axios.get(`/api/user/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function store_student_service(data) {
    try {
        const res = await axios.post('/api/user', data);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function update_student_service(data) {
    try {
        const res = await axios.put(`/api/user/${data.id}`, data);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function delete_instructor_service(id) {
    try {
        const res = await axios.delete(`/api/user/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}