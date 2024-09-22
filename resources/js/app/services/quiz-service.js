import axios from "axios";

export async function get_quiz_service() {
    try {
        const res = await axios.get("/api/quiz");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_quiz_by_id_service(id) {
    try {
        const res = await axios.get(`/api/quiz/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_quiz_service(data) {
    try {
        const res = await axios.post('/api/quiz', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_quiz_service(data) {
    try {
        const res = await axios.put(`/api/quiz/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_quiz_service(id) {
    try {
        const res = await axios.delete(`/api/quiz/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}