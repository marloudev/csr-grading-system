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

export default function EditGradeSection({ data }) {
    const [form, setForm] = useState({});
    const [error, setError] = useState({});
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { user } = useSelector((store) => store.app);
    const [loading, setLoading] = useState(false);
    const instructor_id = window.location.pathname.split("/")[3];
    
    useEffect(() => {
        setForm({
            ...form,
            prelim: data.prelim ?? 0,
            midterm: data.midterm ?? 0,
            final: data.final ?? 0,
        });
    }, []);
    async function handled_submit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            await store.dispatch(
                update_grade_thunk({
                    ...form,
                    id: data.id,
                }),
            );
            await store.dispatch(get_subject_by_id_thunk(user.user_type == "1" ? instructor_id : user.user_id));
            setLoading(false);
            setOpen(false)
        } catch (error) {
            setLoading(false);
        }
    }
    console.log("datadata", data);
    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>
                ADD GRADE
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="capitalize text-xl mb-3">
                        {data.user.fname} {data.user.lname} <br />{" "}
                        {data.user.department.name}
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-3">
                            <TextField
                                value={form.prelim}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                error={error?.prelim ? true : false}
                                helperText={error?.prelim ?? ""}
                                name="prelim"
                                type="text"
                                id="outlined-basic"
                                label="Prelim"
                                variant="outlined"
                            />
                            <TextField
                                value={form.midterm}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                error={error?.midterm ? true : false}
                                helperText={error?.midterm ?? ""}
                                name="midterm"
                                type="text"
                                id="outlined-basic"
                                label="Midterm"
                                variant="outlined"
                            />
                            <TextField
                                value={form.final}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                error={error?.final ? true : false}
                                helperText={error?.final ?? ""}
                                name="final"
                                type="text"
                                id="outlined-basic"
                                label="Final"
                                variant="outlined"
                            />
                            <TextField
                                disabled={true}
                                value={(
                                    (data.prelim + data.midterm + data.final) /
                                    3
                                ).toFixed(2)}
                                name="final"
                                type="text"
                                id="outlined-basic"
                                label="Grade"
                                variant="outlined"
                            />
                        </div>
                        <Button
                            variant="contained"
                            className="w-full"
                            size="large"
                            disabled={loading}
                            onClick={handled_submit}
                        >
                            {loading ? (
                                <CircularProgress size={24} color="inherit" />
                            ) : (
                                "Submit"
                            )}
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
