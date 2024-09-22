import axios from "axios";

export async function get_project_service() {
    try {
        const res = await axios.get("/api/project");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_project_by_id_service(id) {
    try {
        const res = await axios.get(`/api/project/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_project_service(data) {
    try {
        const res = await axios.post('/api/project', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_project_service(data) {
    try {
        const res = await axios.put(`/api/project/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_project_service(id) {
    try {
        const res = await axios.delete(`/api/project/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}