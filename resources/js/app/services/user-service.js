import axios from "axios";

export async function get_user_service() {
    try {
        const res = await axios.get("/api/user");
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function get_user_by_id_service(id) {
    try {
        const res = await axios.get(`/api/user/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function store_user_service(data) {
    try {
        const res = await axios.post('/api/user', data);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function update_user_service(data) {
    try {
        const res = await axios.put(`/api/user/${data.id}`, data);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function delete_user_service(id) {
    try {
        const res = await axios.delete(`/api/user/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}