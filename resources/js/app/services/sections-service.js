import axios from "axios";

export async function get_sections_service() {
    try {
        const res = await axios.get("/api/sections");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_sections_by_id_service(id) {
    try {
        const res = await axios.get(`/api/sections/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_sections_service(data) {
    try {
        const res = await axios.post('/api/sections', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_sections_service(data) {
    try {
        const res = await axios.put(`/api/sections/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_sections_service(id) {
    try {
        const res = await axios.delete(`/api/sections/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}