import axios from "axios";

export async function get_grade_service() {
    try {
        const res = await axios.get("/api/grade");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_grades_service(id) {
    try {
        const res = await axios.post(`/api/get_grades/${id}${window.location.search}`);
        return res;
    } catch (error) {
        return error;
    }
}
export async function get_grade_by_id_service(id) {
    try {
        const res = await axios.get(`/api/grade/${id}${window.location.search}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_student_grade_service(enrollment_id) {
    try {
        const res = await axios.get(`/api/get_student_grade/${enrollment_id}`);
        return res;
    } catch (error) {
        return error;
    }
}


export async function store_grade_service(data) {
    try {
        const res = await axios.post('/api/grade', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_grade_service(data) {
    try {
        const res = await axios.put(`/api/grade/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_grade_service(id) {
    try {
        const res = await axios.delete(`/api/grade/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}