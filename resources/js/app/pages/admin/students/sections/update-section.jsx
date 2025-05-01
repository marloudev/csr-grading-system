import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Drawer from "@mui/material/Drawer";
import {
    Alert,
    Autocomplete,
    CircularProgress,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Snackbar,
    TextField,
} from "@mui/material";
import { useState } from "react";
import store from "@/app/pages/store/store";
import {
    get_student_thunk,
    store_student_thunk,
    update_student_thunk,
} from "../redux/student-thunk";
import { useSelector } from "react-redux";
import { Edit } from "@mui/icons-material";
import { useEffect } from "react";
import Swal from "sweetalert2";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

export default function UpdateSection({ data }) {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({});
    const [error, setError] = useState({});
    const [notify, setNotify] = useState(false);
    const { departments } = useSelector((state) => state.department);
    const { courses } = useSelector((state) => state.courses);
    const { subjects } = useSelector((state) => state.subjects);

    const [subjectDatas, setSubjectDatas] = useState([]);

    const excludeCodes = data?.grades?.map((res) => res.subject_code) ?? [];

    useEffect(() => {
        const filteredCourses = subjects?.data?.filter(
            (course) => !excludeCodes.includes(course.code),
        );
        const subjects_data = filteredCourses.filter(
            (res) => res.course_id == data.course_id,
        );
        setSubjectDatas(subjects_data);
    }, [open]);
    

    console.log("formformssss", data);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    useEffect(() => {
        setForm({
            ...data,
            selected_subjects: [],
        });
        // setSubjects(data?.course?.subjects ?? []);
    }, []);
    const handleOpen = () => setOpen(true);

    async function submitForm(params) {
        setLoading(true);
        const result = await store.dispatch(update_student_thunk(form));
        if (result.status == 200) {
            await store.dispatch(get_student_thunk());
            Swal.fire({
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
            });
            setError({});
            setLoading(false);
            setOpen(false);
        } else {
            setLoading(false);
            setError(result.response.data.errors);
        }
    }

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setNotify(false);
        setOpen(false);
    };

    function search_course(e) {
        const filteredCourses = subjects?.data?.filter(
            (course) => !excludeCodes.includes(course.code),
        );
        const subjects_data = filteredCourses.filter(
            (res) => res.course_id == e.target.value,
        );
        console.log("subjects", subjects);
        setSubjectDatas(subjects_data);
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleChange = (event, newValue) => {
        setForm({
            ...form,
            selected_subjects: newValue,
        });
    };
    return (
        <>
            <Snackbar
                open={notify}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    Successfully Created!
                </Alert>
            </Snackbar>
            <Button size="small" variant="contained" onClick={handleOpen}>
                <Edit />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className=" px-3 w-full flex flex-col items-center justify-between pb-5">
                        <div className="flex flex-col gap-3  w-full">
                            <div className="text-2xl font-black">
                                Update Student Account
                            </div>
                            <div className="text-xl font-black">
                                Personal Information
                            </div>
                            <TextField
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                value={form.user_id}
                                error={error?.user_id ? true : false}
                                helperText={error?.user_id ?? ""}
                                name="user_id"
                                type="text"
                                disabled
                                id="outlined-basic"
                                label="Student ID"
                                variant="outlined"
                            />
                            <div className="w-full flex gap-4">
                                <TextField
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                    value={form.fname}
                                    error={error?.fname ? true : false}
                                    helperText={error?.fname ?? ""}
                                    name="fname"
                                    type="text"
                                    id="outlined-basic"
                                    label="First Name"
                                    className="w-full"
                                    variant="outlined"
                                />
                                <TextField
                                    className="w-full"
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                    value={form.lname}
                                    error={error?.lname ? true : false}
                                    helperText={error?.lname ?? ""}
                                    name="lname"
                                    type="text"
                                    id="outlined-basic"
                                    label="Last Name"
                                    variant="outlined"
                                />
                            </div>

                            <TextField
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                value={form.email}
                                error={error?.email ? true : false}
                                helperText={error?.email ?? ""}
                                name="email"
                                type="email"
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                            />
                            <TextField
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                error={error?.password ? true : false}
                                helperText={error?.password ?? ""}
                                name="password"
                                type="password"
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                            />

                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Course
                                </InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    name="course_id"
                                    label="Course"
                                    value={form.course_id}
                                    onChange={(e) => search_course(e)}
                                >
                                    {courses.data.map((res, i) => {
                                        return (
                                            <MenuItem key={i} value={res.id}>
                                                {res.name}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </FormControl>
                            <Autocomplete
                                multiple
                                id="tags-outlined"
                                onChange={handleChange}
                                options={subjectDatas}
                                getOptionLabel={(option) => option.name}
                                // defaultValue={[subjectDatas[13]]}
                                filterSelectedOptions
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        value={params}
                                        label="Select Subjects"
                                        placeholder="Favorites"
                                    />
                                )}
                            />
                        </div>
                        <br />
                        <Button
                            onClick={submitForm}
                            disabled={loading}
                            variant="contained"
                            className=" w-full"
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
        </>
    );
}
