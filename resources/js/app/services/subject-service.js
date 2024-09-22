import axios from "axios";

export async function get_subject_service() {
    try {
        const res = await axios.get("/api/subject");
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function get_subject_by_id_service(id) {
    try {
        const res = await axios.get(`/api/subject/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function store_subject_service(data) {
    try {
        const res = await axios.post('/api/subject', data);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function update_subject_service(data) {
    try {
        const res = await axios.put(`/api/subject/${data.id}`, data);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function delete_subject_service(id) {
    try {
        const res = await axios.delete(`/api/subject/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}