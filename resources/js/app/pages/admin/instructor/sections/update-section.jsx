import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import {
    Alert,
    Autocomplete,
    CircularProgress,
    FormControl,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    Snackbar,
    TextField,
} from "@mui/material";
import { useState } from "react";
import { Edit } from "@mui/icons-material";
import { useEffect } from "react";
import store from "@/app/pages/store/store";
import {
    get_instructor_thunk,
    update_instructor_thunk,
} from "../redux/instructor-thunk";
import { useSelector } from "react-redux";
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

export default function UpdateSection({ data }) {
    const [open, setOpen] = React.useState(false);
    const [form, setForm] = useState({});
    const [error, setError] = useState({});
    const [notify, setNotify] = useState(false);
    const [loading, setLoading] = useState(false);
    // const [data, setData] = useState({});
    const [selected, setSelected] = useState({});
    const { available_subjects } = useSelector((state) => state.subjects);
    const [subjectDatas, setSubjectDatas] = useState([]);
    const { courses } = useSelector((state) => state.courses);

    useEffect(() => {
        const selected = available_subjects.filter(
            (res) => res.course.id == data?.course?.id,
        );
        setSubjectDatas(selected ?? []);
    }, [open]);

    console.log("datadatadata", data);
    console.log("selectedddd", selected);
    console.log("subjectDatas", subjectDatas);

    useEffect(() => {
        setForm(data);
    }, []);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    async function submitForm(params) {
        setLoading(true);
        const result = await store.dispatch(
            update_instructor_thunk({
                ...form,
                ...selected,
            }),
        );
        if (result.status == 200) {
            await store.dispatch(get_instructor_thunk());
            await store.dispatch(get_available_subject_thunk());
            setNotify(true);
            setError({});
            setLoading(false);
            setOpen(false)
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
    const handleChange = (event, newValue) => {
        setSelected({
            ...data,
            selected_subjects: newValue,
        });
    };

    function select_department(e) {
        const selected = available_subjects.filter(
            (res) => res.course.id == e.target.value,
        );
        setSubjectDatas(selected);
        setForm({
            ...data,
            [e.target.name]: e.target.value,
        });
    }
    return (
        <div>
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
                    Successfully Updated!
                </Alert>
            </Snackbar>
            <Button
                size="small"
                variant="contained"
                onClick={toggleDrawer(true)}
            >
                <Edit />
            </Button>
            <Modal
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                open={open}
                onClose={toggleDrawer(false)}
            >
                <Box sx={style} role="presentation">
                    <div className=" px-3 w-full flex flex-col items-center justify-between pb-5">
                        <div className="flex flex-col gap-3  w-full">
                            <div className="text-2xl font-black">
                                Edit Instructor
                            </div>
                            <TextField
                                onChange={(e) =>
                                    setForm({
                                        ...data,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                value={form.user_id}
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
                                variant="outlined"
                            />
                            <TextField
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
                            {/* <TextField
                                onChange={(e) => setForm({
                                    ...form,
                                    [e.target.name]: e.target.value
                                })}
                                value={form.email}
                                error={error?.email ? true : false}
                                helperText={error?.email ?? ''}
                                name='email'
                                type='email'
                                id="outlined-basic"
                                label="Email"
                                variant="outlined" /> */}
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
                                    Department
                                </InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    name="department_id"
                                    label="Department"
                                    value={form.department_id}
                                    // onChange={(e) =>
                                    //     setForm({
                                    //         ...data,
                                    //         [e.target.name]: e.target.value,
                                    //     })
                                    // }

                                    onChange={(e) => select_department(e)}
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

                            {form?.department_id && (
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
        </div>
    );
}
