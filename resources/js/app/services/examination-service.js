import axios from "axios";

export async function get_examination_service() {
    try {
        const res = await axios.get("/api/examination");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_examination_by_id_service(id) {
    try {
        const res = await axios.get(`/api/examination/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_examination_service(data) {
    try {
        const res = await axios.post('/api/examination', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_examination_service(data) {
    try {
        const res = await axios.put(`/api/examination/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_examination_service(id) {
    try {
        const res = await axios.delete(`/api/examination/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}