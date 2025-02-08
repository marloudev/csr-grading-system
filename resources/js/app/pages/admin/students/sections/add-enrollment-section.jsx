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
    Select,
    Snackbar,
    TextField,
} from "@mui/material";
import { useState } from "react";
import store from "@/app/pages/store/store";
import { useSelector } from "react-redux";
import { PersonAdd } from "@mui/icons-material";
import academic_year from "@/app/lib/academic-year";
import current_academic_year from "@/app/lib/current-academic-year";
import { useEffect } from "react";
import { store_enrollments_thunk } from "../../enrollment/redux/enrollment-thunk";
import { get_student_thunk } from "../redux/student-thunk";

export default function AddEnrollmentSection({ data }) {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [notify, setNotify] = useState(false);
    const { departments } = useSelector((state) => state.department);
    const { courses } = useSelector((state) => state.courses);
    const { sections } = useSelector((state) => state.sections);
    const [form, setForm] = useState({});

    const { subjects } = useSelector((state) => state.subjects);

    useEffect(() => {
        setForm({
            ...data,
            academic_year: current_academic_year(),
            semester: "1st Semester",
        });
    }, []);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    console.log("formsss", subjects);

    async function submitForm(params) {
        setLoading(true);
        const result = await store.dispatch(store_enrollments_thunk(form));
        if (result.status == 200) {
            await store.dispatch(get_student_thunk());
            setNotify(true);
            setError({});
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
                    Successfully Created!
                </Alert>
            </Snackbar>
            <Button
                size="small"
                variant="contained"
                color="warning"
                onClick={toggleDrawer(true)}
            >
                <PersonAdd />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box className="w-[500px] h-full flex" role="presentation">
                    <div className="pt-20 px-3 w-full flex flex-col items-center justify-between pb-5">
                        <div className="flex flex-col gap-3  w-full">
                            <div className="text-2xl font-black">
                                Add Enrollment
                            </div>
                            <TextField
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                error={error?.user_id ? true : false}
                                helperText={error?.user_id ?? ""}
                                value={form.user_id}
                                name="user_id"
                                type="text"
                                id="outlined-basic"
                                label="Employee ID"
                                variant="outlined"
                                disabled
                            />
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Academic Year
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={form.academic_year}
                                    name="academic_year"
                                    label="Academic Year"
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                >
                                    {academic_year().map((res, i) => {
                                        return (
                                            <MenuItem key={i} value={res}>
                                                {res}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Course
                                </InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    name="course_id"
                                    label="Course"
                                    value={form.course_id}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
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
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Semester
                                </InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    name="semester"
                                    label="Semester"
                                    value={form.semester}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                >
                                    <MenuItem value="1st Semester">
                                        1st Semester
                                    </MenuItem>
                                    <MenuItem value="2nd Semester">
                                        2nd Semester
                                    </MenuItem>
                                    <MenuItem value="Summer">Summer</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Year
                                </InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    name="year"
                                    label="year"
                                    value={form.year}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                >
                                    <MenuItem value="1st Year">
                                        1st Year
                                    </MenuItem>
                                    <MenuItem value="2nd Year">
                                        2nd Year
                                    </MenuItem>
                                    <MenuItem value="3rd Year">
                                        3rd Year
                                    </MenuItem>
                                    <MenuItem value="4th Year">
                                        4th Year
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Sections
                                </InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    name="section_id"
                                    label="Course"
                                    value={form.section_id}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            [e.target.name]: e.target.value,
                                        })
                                    }
                                >
                                    {sections.data.map((res, i) => {
                                        return (
                                            <MenuItem key={i} value={res.id}>
                                                {res.name}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </FormControl>

                            <Autocomplete
                                className="w-full"
                                multiple
                                id="tags-outlined"
                                options={subjects
                                    .filter(
                                        (subject) =>
                                            !data?.subjects?.some(
                                                (selected) =>
                                                    selected.value ===
                                                    subject.code,
                                            ),
                                    ) // Remove already selected subjects from suggestions
                                    .map((res) => ({
                                        name: res.name,
                                        value: res.code,
                                    }))}
                                getOptionLabel={(option) => option.name}
                                filterSelectedOptions
                                onChange={(e, newValue) => {
                                    // Ensure uniqueness based on `value` (code)
                                    // const uniqueSubjects = [
                                    //     ...new Map(
                                    //         newValue.map((item) => [
                                    //             item.value,
                                    //             item,
                                    //         ]),
                                    //     ).values(),
                                    // ];

                                    // setData({
                                    //     ...data,
                                    //     subjects: uniqueSubjects,
                                    // });
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Select Subjects"
                                        placeholder="Favorites"
                                    />
                                )}
                            />
                            {/* <TextField onChange={(e) => setForm({
                                ...data,
                                [e.target.name]: e.target.value
                            })}
                                error={error?.fname ? true : false}
                                helperText={error?.fname ?? ''}
                                name="fname"
                                type='text'
                                id="outlined-basic"
                                label="First Name"
                                variant="outlined"
                            />
                            <TextField
                                onChange={(e) => setForm({
                                    ...data,
                                    [e.target.name]: e.target.value
                                })}
                                error={error?.lname ? true : false}
                                helperText={error?.lname ?? ''}
                                name='lname'
                                type='text'
                                id="outlined-basic"
                                label="Last Name"
                                variant="outlined" />
                            <TextField
                                onChange={(e) => setForm({
                                    ...data,
                                    [e.target.name]: e.target.value
                                })}
                                error={error?.email ? true : false}
                                helperText={error?.email ?? ''}
                                name='email'
                                type='email'
                                id="outlined-basic"
                                label="Email"
                                variant="outlined" />
                            <TextField
                                onChange={(e) => setForm({
                                    ...data,
                                    [e.target.name]: e.target.value
                                })}
                                error={error?.password ? true : false}
                                helperText={error?.password ?? ''}
                                name='password'
                                type='password'
                                id="outlined-basic"
                                label="Password"
                                variant="outlined" />

                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Department</InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    name='department_id'
                                    label="Department"
                                    onChange={(e) => setForm({
                                        ...data,
                                        [e.target.name]: e.target.value
                                    })}
                                >
                                    {
                                        departments.data.map((res, i) => {
                                            return <MenuItem key={i} value={res.id}>{res.name}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>

                           
                            <TextField
                                onChange={(e) => setForm({
                                    ...data,
                                    [e.target.name]: e.target.value
                                })}
                                error={error?.dob ? true : false}
                                helperText={error?.dob ?? ''}
                                name='dob'
                                type='date'
                                id="outlined-basic"
                                variant="outlined" />
                            <TextField
                                onChange={(e) => setForm({
                                    ...data,
                                    [e.target.name]: e.target.value
                                })}
                                error={error?.address ? true : false}
                                helperText={error?.address ?? ''}
                                name='address'
                                id="outlined-basic"
                                label="Address"
                                variant="outlined" /> */}
                        </div>
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
            </Drawer>
        </div>
    );
}
