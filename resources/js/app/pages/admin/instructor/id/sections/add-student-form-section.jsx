import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import {
    Alert,
    Autocomplete,
    Checkbox,
    CircularProgress,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    Snackbar,
    TextField,
} from "@mui/material";
import { useState } from "react";
import store from "@/app/pages/store/store";
import { useSelector } from "react-redux";
import academic_year from "@/app/lib/academic-year";
import { useEffect } from "react";
import current_academic_year from "@/app/lib/current-academic-year";
import {
    get_enrollments_thunk,
    store_enrollments_thunk,
} from "@/app/pages/admin/enrollment/redux/enrollment-thunk";
import { store_grade_thunk } from "../../../grades/redux/grade-thunk";
import { get_subject_by_id_thunk } from "../../../subjects/redux/subject-thunk";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function AddStudentFormSection({ subject }) {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const instructor_id = window.location.pathname.split("/")[3];
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    });
    const query = window.location.search;

    // Parse query string using URLSearchParams
    const params = new URLSearchParams(query);
    const parsedParams = {
        academic_year:
            params.get("academic_year") ??
            academic_year()[academic_year().length - 1],
        semester: params.get("semester") ?? "1st Semester",
    };

    const { user } = useSelector((store) => store.app);
    const { courses } = useSelector((state) => state.courses);
    const { sections } = useSelector((state) => state.sections);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    useEffect(() => {
        setData({
            ...data,
            ...parsedParams,
            subject_code: subject.code,
            academic_year: current_academic_year(),
            instructor_id: user.user_type == "1" ? instructor_id : user.user_id,
        });
    }, []);

    async function submitForm(params) {
        setLoading(true);
        const res = await store.dispatch(store_grade_thunk(data));
        console.log("resres", res);
        if (res.status == 200) {
            await store.dispatch(get_subject_by_id_thunk(user.user_type == "1" ? instructor_id : user.user_id));
            setError({});
            setLoading(false);
            setData({});
            setNotify({
                isOpen: true,
                message: "Student added!",
                type: "success",
            });
            setOpen(false);
        } else {
            setLoading(false);
            setNotify({
                isOpen: true,
                message: res.data.response,
                type: "warning",
            });
        }

        // const result = await store.dispatch(
        //     store_enrollments_thunk({
        //         ...data,
        //         user_type: 3,
        //     }),
        // );
        // if (result.status == 200) {

        // } else if (result.status == 202) {

        //     // setError(result.response.data.errors);
        //     setLoading(false);
        // } else {
        //     setLoading(false);
        //     setNotify({
        //         isOpen: true,
        //         message: "Student is already enrolled!",
        //         type: "warning",
        //     });
        //     // setError(result.response.data.errors);
        // }
    }

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setNotify(false);
    };

    return (
        <div>
            <Snackbar
                open={notify.isOpen}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity={notify.type ?? ""}
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    {notify.message}
                </Alert>
            </Snackbar>
            <Button variant="contained" onClick={toggleDrawer(true)}>
                Add Student
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box className="w-[500px] h-full flex" role="presentation">
                    <div className="pt-20 px-3 w-full flex flex-col items-center justify-between pb-5">
                        <div className="flex flex-col gap-3  w-full">
                            <div className="text-2xl font-black">
                                Add Student
                            </div>
                            <TextField
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                error={error?.student_id ? true : false}
                                helperText={error?.student_id ?? ""}
                                name="student_id"
                                type="text"
                                id="outlined-basic"
                                label="Student ID"
                                variant="outlined"
                            />

                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Year
                                </InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    name="year"
                                    label="year"
                                    value={data.year}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
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
                                    Section
                                </InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    name="section_id"
                                    label="Section"
                                    value={data.section_id}
                                    onChange={(e) =>
                                        setData({
                                            ...data,
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
                        </div>
                        <Button
                            type="submit"
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
