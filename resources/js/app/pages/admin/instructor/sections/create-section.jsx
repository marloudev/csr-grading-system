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
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
    get_instructor_thunk,
    store_instructor_thunk,
} from "../redux/instructor-thunk";
import { get_available_subject_thunk } from "../../subjects/redux/subject-thunk";

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


export default function CreateSection() {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const [notify, setNotify] = useState(false);
    const { courses } = useSelector((state) => state.courses);
    const { available_subjects } = useSelector((state) => state.subjects);
    const [subjectDatas, setSubjectDatas] = useState([]);

    useEffect(() => {
        setSubjectDatas(available_subjects ?? []);
    }, []);

    async function submitForm(params) {
        setLoading(true);
        const result = await store.dispatch(
            store_instructor_thunk({
                ...data,
                user_type: 2,
            }),
        );
        if (result.status == 200) {
            await store.dispatch(get_instructor_thunk());
            await store.dispatch(get_available_subject_thunk());
            setNotify(true);
            setError({});
            setOpen(false)
            setLoading(false);
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

    function select_department(e) {
        const selected = available_subjects.filter(
            (res) => res.course.id == e.target.value,
        );
        setSubjectDatas(selected);

        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }
    const handleChange = (event, newValue) => {
        setData({
            ...data,
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
            <Button variant="contained" onClick={() => setOpen(true)}>
                Create Instructor
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <div className=" px-3 w-full flex flex-col items-center justify-between pb-5">
                            <div className="flex flex-col gap-3  w-full">
                                <div className="text-2xl font-black">
                                    Create Instructor
                                </div>
                                <TextField
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                    error={error?.user_id ? true : false}
                                    helperText={error?.user_id ?? ""}
                                    name="user_id"
                                    type="text"
                                    id="outlined-basic"
                                    label="Employee ID"
                                    variant="outlined"
                                />
                                <TextField
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                    error={error?.fname ? true : false}
                                    helperText={error?.fname ?? ""}
                                    name="fname"
                                    type="text"
                                    id="outlined-basic"
                                    label="First Name"
                                    variant="outlined"
                                />
                                <TextField
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                    error={error?.lname ? true : false}
                                    helperText={error?.lname ?? ""}
                                    name="lname"
                                    type="text"
                                    id="outlined-basic"
                                    label="Last Name"
                                    variant="outlined"
                                />
                                <TextField
                                    onChange={(e) =>
                                        setData({
                                            ...data,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
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
                                        setData({
                                            ...data,
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
                                        Department
                                    </InputLabel>
                                    <Select
                                        id="demo-simple-select"
                                        name="department_id"
                                        label="Department"
                                        onChange={(e) => select_department(e)}
                                    >
                                        {courses.data.map((res, i) => {
                                            return (
                                                <MenuItem
                                                    key={i}
                                                    value={res.id}
                                                >
                                                    {res.name}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                                {data.department_id && (
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
                                )}
                            </div>
                            <br />
                            <Button
                                onClick={submitForm}
                                disabled={loading}
                                variant="contained"
                                className=" w-full"
                            >
                                {loading ? (
                                    <CircularProgress
                                        size={24}
                                        color="inherit"
                                    />
                                ) : (
                                    "Submit"
                                )}
                            </Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
}
