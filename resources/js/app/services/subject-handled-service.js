import axios from "axios";

export async function get_subject_handled_service() {
    try {
        const res = await axios.get("/api/subject_handled");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_subject_handled_by_id_service(id) {
    try {
        const res = await axios.get(`/api/subject_handled/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_subject_handled_service(data) {
    try {
        const res = await axios.post('/api/subject_handled', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_subject_handled_service(data) {
    try {
        const res = await axios.put(`/api/subject_handled/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_subject_handled_service(id) {
    try {
        const res = await axios.delete(`/api/subject_handled/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}