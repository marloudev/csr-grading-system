import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import store from "@/app/pages/store/store";
import { update_grade_thunk } from "../../../grades/redux/grade-thunk";
import { get_subject_by_id_thunk } from "../../../subjects/redux/subject-thunk";

export default function EditGradeSection({ data, value, type }) {
    const [form, setForm] = useState({});
    const [error, setError] = useState({});
    const { user } = useSelector((store) => store.app);
    const [loading, setLoading] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const instructor_id = window.location.pathname.split("/")[3];

    useEffect(() => {
        if (data) {
            setForm({
                ...data,
                [type]: value ?? 0,
            });
        }
    }, [data, value, type]);

    async function handled_submit(e) {
        if (e.key === "Enter") {
            setLoading(true);
            try {
                await store.dispatch(
                    update_grade_thunk({
                        prelim: form.prelim,
                        midterm: form.midterm,
                        final: form.final,
                        id: data.id,
                    })
                );
                await store.dispatch(
                    get_subject_by_id_thunk(
                        user.user_type === "1" ? instructor_id : user.user_id
                    )
                );
                setIsEdit(false);
            } catch (error) {
                console.error("Error updating grade:", error);
            } finally {
                setLoading(false);
            }
        }
    }

    return (
        <div>
            {loading && <>Loading...</>}
            {!loading && !isEdit && (
                <a className="flex w-full" onClick={() => setIsEdit(true)}>
                    {form[type]}
                </a>
            )}
            {!loading && isEdit && (
                <TextField
                    size="small"
                    onKeyDown={handled_submit}
                    value={form[type] ?? ""}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            [e.target.name]: parseFloat(e.target.value) || 0,
                        })
                    }
                    error={!!error?.[type]}
                    helperText={error?.[type] ?? ""}
                    name={type}
                    type="number"
                    label={type.charAt(0).toUpperCase() + type.slice(1)}
                    variant="outlined"
                />
            )}
        </div>
    );
}
