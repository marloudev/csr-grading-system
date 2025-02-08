import axios from "axios";

export async function get_subject_service() {
    try {
        const res = await axios.get("/api/subject");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_subjects_service(data) {
    try {
        const res = await axios.post("/api/get_subjects",data);
        return res;
    } catch (error) {
        return error;
    }
}


export async function get_subject_by_id_service(id) {
    try {
        const res = await axios.get(`/api/subject/${id}${window.location.search}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_subject_service(data) {
    try {
        const res = await axios.post('/api/subject', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_subject_service(data) {
    try {
        const res = await axios.put(`/api/subject/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_subject_service(id) {
    try {
        const res = await axios.delete(`/api/subject/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}