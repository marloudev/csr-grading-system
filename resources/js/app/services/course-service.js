import axios from "axios";

export async function get_course_service() {
    try {
        const res = await axios.get("/api/course");
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function get_course_by_id_service(id) {
    try {
        const res = await axios.get(`/api/course/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function store_course_service(data) {
    try {
        const res = await axios.post('/api/course', data);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function update_course_service(data) {
    try {
        const res = await axios.put(`/api/course/${data.id}`, data);
        return res.data;
    } catch (error) {
        return error;
    }
}

export async function delete_course_service(id) {
    try {
        const res = await axios.delete(`/api/course/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}