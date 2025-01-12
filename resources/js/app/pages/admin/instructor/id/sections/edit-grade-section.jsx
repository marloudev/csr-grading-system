import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { CircularProgress, TextField } from "@mui/material";
import { useEffect } from "react";
import store from "@/app/pages/store/store";
import { update_grade_thunk } from "../../../grades/redux/grade-thunk";
import { get_subject_by_id_thunk } from "../../../subjects/redux/subject-thunk";
import { useSelector } from "react-redux";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

export default function EditGradeSection({ data, value, type }) {
    const [form, setForm] = useState({});
    const [error, setError] = useState({});
    const { user } = useSelector((store) => store.app);
    const [loading, setLoading] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const instructor_id = window.location.pathname.split("/")[3];

    useEffect(() => {
        setForm({
            ...data,
            [type]: value ?? 0,
        });
    }, []);

    async function handled_submit(e) {
        if (e.key === "Enter") {
            setLoading(true);
            try {
                await store.dispatch(
                    update_grade_thunk({
                        prelim:form.prelim,
                        midterm:form.midterm,
                        final:form.final,
                        id: data.id,
                    }),
                );
                await store.dispatch(
                    get_subject_by_id_thunk(
                        user.user_type == "1" ? instructor_id : user.user_id,
                    ),
                );
                setIsEdit(false)
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }
    }

    console.log("formform", form);
    return (
        <div>
            {
                loading && <>Loading...</>
            }
            {!loading && !isEdit && <a className="flex w-full" onClick={() => setIsEdit(true)}>{form[type]}</a>}
            {!loading && isEdit && (
                <TextField
                    size="small"
                    onKeyDown={handled_submit}
                    value={form[type]}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            [e.target.name]: e.target.value,
                        })
                    }
                    error={error?.prelim ? true : false}
                    helperText={error?.prelim ?? ""}
                    name={type}
                    type="number"
                    id="outlined-basic"
                    label="Prelim"
                    variant="outlined"
                />
            )}
        </div>
    );
}
