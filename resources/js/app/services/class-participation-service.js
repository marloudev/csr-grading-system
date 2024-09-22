import axios from "axios";

export async function get_class_participation_service() {
    try {
        const res = await axios.get("/api/class_participation");
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function get_class_participation_by_id_service(id) {
    try {
        const res = await axios.get(`/api/class_participation/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function store_class_participation_service(data) {
    try {
        const res = await axios.post('/api/class_participation', data);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function update_class_participation_service(data) {
    try {
        const res = await axios.put(`/api/class_participation/${data.id}`, data);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function delete_class_participation_service(id) {
    try {
        const res = await axios.delete(`/api/class_participation/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}