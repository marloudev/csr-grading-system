import axios from "axios";

export async function get_grade_service() {
    try {
        const res = await axios.get("/api/grade");
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function get_grade_by_id_service(id) {
    try {
        const res = await axios.get(`/api/grade/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function store_grade_service(data) {
    try {
        const res = await axios.post('/api/grade', data);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function update_grade_service(data) {
    try {
        const res = await axios.put(`/api/grade/${data.id}`, data);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function delete_grade_service(id) {
    try {
        const res = await axios.delete(`/api/grade/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}