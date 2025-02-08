import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
    Alert,
    Autocomplete,
    CircularProgress,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Skeleton,
    Snackbar,
    TextField,
} from "@mui/material";
import store from "@/app/pages/store/store";
import { useSelector } from "react-redux";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Checkbox, ListItemText, OutlinedInput } from "@mui/material";
import academic_year from "@/app/lib/academic-year";
import { useEffect } from "react";
import current_academic_year from "@/app/lib/current-academic-year";
import {
    get_enrollments_thunk,
    store_enrollments_thunk,
} from "@/app/pages/admin/enrollment/redux/enrollment-thunk";
import {
    get_grades_thunk,
    store_grade_thunk,
} from "../../../grades/redux/grade-thunk";
import {
    get_subject_by_id_thunk,
    get_subjects_thunk,
} from "../../../subjects/redux/subject-thunk";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

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

function not(a, b) {
    return a.filter((value) => !b.includes(value));
}

function intersection(a, b) {
    return a.filter((value) => b.includes(value));
}

function union(a, b) {
    return [...a, ...not(b, a)];
}
export default function EnrollStudentSection({ subject }) {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const student_id = window.location.pathname.split("/")[3];

    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState([]);
    const [right, setRight] = React.useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [transferValue, setTransferValue] = useState({
        available: [],
        registered: [],
    });

    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    });
    const [subjects, setSubjects] = useState([]);

    const query = window.location.search;

    // Parse query string using URLSearchParams
    const params = new URLSearchParams(query);
    const parsedParams = {
        academic_year:
            params.get("academic_year") ??
            academic_year()[academic_year().length - 1],
        semester: params.get("semester") ?? "1st Semester",
    };

    const { year_grade } = useSelector((store) => store.grades);
    const { subject_list } = useSelector((store) => store.subjects);
    console.log("subject_list", subject_list);
    const handleOpen = () => setOpen(true);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    useEffect(() => {
        setData({
            ...data,
            ...parsedParams,
            // subjects: year_grade?.subjects??[],
            // academic_year: current_academic_year(),
            student_id: student_id,
            year: "1st Year",
        });
    }, []);

    useEffect(() => {
        if (data.semester && data.academic_year && data.year) {
            async function get_subjects(params) {
                setIsLoading(true);
                try {
                    await store.dispatch(get_subjects_thunk(data));
               
                    setSubjects(subject_list);
                    setIsLoading(false);
                } catch (error) {
                    setIsLoading(false);
                }
            }
            get_subjects(true);
        }
    }, [data.semester, data.academic_year, data.year]);

    const available_subjects = subject_list
        .filter(
            (subject) =>
                !year_grade.user?.grades?.some(
                    (selected) => selected.subject_code === subject.code,
                ),
        )
        .map((res) => ({
            name: res?.name,
            value: res.code,
        }));

    // console.log("aaaa", subjects);
    console.log("bbbb", year_grade.user?.grades);
    // console.log("right", right);
    // console.log("checked", checked);
    // console.log("transferValue", transferValue);
    // console.log("year_grade", year_grade);
    useEffect(() => {
        setLeft(available_subjects);
        setRight(
            year_grade.user?.grades
                .filter(
                    (enrollment) =>
                        enrollment.year === data.year &&
                        enrollment.semester === data.semester &&
                        enrollment.academic_year === data.academic_year,
                )
                .map((res) => ({
                    value: res?.subject?.code,
                    name: res?.subject?.name,
                })),
        );
    }, [isLoading, open]);
    //    store.dispatch(get_subjects_thunk())

    async function submitForm(params) {
        setLoading(true);
        const res = await store.dispatch(
            store_grade_thunk({
                ...data,
                ...transferValue,
            }),
        );
        if (res.status == 200) {
            store.dispatch(
                get_grades_thunk(
                    student_id,
                    `?academic_year=${data.academic_year}&semester=${data.semester}`,
                ),
            );
            setError({});
            setLoading(false);
            // setData({});
            setNotify({
                isOpen: true,
                message: "Student updated!",
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
    }

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setNotify(false);
    };

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const numberOfChecked = (items) => intersection(checked, items).length;

    const handleToggleAll = (items) => () => {
        if (numberOfChecked(items) === items?.length) {
            setChecked(not(checked, items));
        } else {
            setChecked(union(checked, items));
        }
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setTransferValue({
            available: not(left, leftChecked),
            registered: right.concat(leftChecked),
        });
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setTransferValue({
            available: left.concat(rightChecked),
            registered: not(right, rightChecked),
        });
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const customList = (title, items) => (
        <Card>
            <CardHeader
                sx={{ px: 2, py: 1 }}
                avatar={
                    <Checkbox
                        onClick={handleToggleAll(items)}
                        checked={
                            numberOfChecked(items) === items?.length &&
                            items?.length !== 0
                        }
                        indeterminate={
                            numberOfChecked(items) !== items?.length &&
                            numberOfChecked(items) !== 0
                        }
                        disabled={items?.length === 0}
                        inputProps={{
                            "aria-label": "all items selected",
                        }}
                    />
                }
                title={title}
                subheader={`${numberOfChecked(items)}/${items?.length} selected`}
            />
            <Divider />
            <List
                sx={{
                    width: 200,
                    height: 230,
                    bgcolor: "background.paper",
                    overflow: "auto",
                }}
                dense
                component="div"
                role="list"
            >
                {items?.map((value) => {
                    const labelId = value.value;
                    console.log("valuevalue", value);
                    return (
                        <ListItemButton
                            key={value}
                            role="listitem"
                            onClick={handleToggle(value)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.includes(value)}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        "aria-labelledby": labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                id={labelId}
                                primary={`${value.name}`}
                            />
                        </ListItemButton>
                    );
                })}
            </List>
        </Card>
    );
    return (
        <>
            <Snackbar
                open={notify.isOpen}
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
            <Button variant="contained" onClick={handleOpen}>
                Enroll Student
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
                            <div className="flex w-full items-center justify-between">
                                <div className="text-2xl font-black">
                                    Enroll Student
                                </div>
                                <div>
                                    <Button
                                        onClick={() => setOpen(false)}
                                        variant="contained"
                                    >
                                        Close
                                    </Button>
                                </div>
                            </div>
                            <div className=" px-3 w-full flex flex-col items-center justify-between pb-5">
                                <div className="flex flex-col gap-3  w-full">
                                    <TextField
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                [e.target.name]: e.target.value,
                                            })
                                        }
                                        value={data?.student_id}
                                        error={error?.student_id ? true : false}
                                        helperText={error?.student_id ?? ""}
                                        name="student_id"
                                        disabled
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
                                                    [e.target.name]:
                                                        e.target.value,
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
                                            Semester
                                        </InputLabel>
                                        <Select
                                            id="demo-simple-select"
                                            name="semester"
                                            label="Semester"
                                            value={data.semester}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    [e.target.name]:
                                                        e.target.value,
                                                })
                                            }
                                        >
                                            <MenuItem value="1st Semester">
                                                1st Semester
                                            </MenuItem>
                                            <MenuItem value="2nd Semester">
                                                2nd Semester
                                            </MenuItem>
                                            <MenuItem value="Summer">
                                                Summer
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">
                                            Academic Year
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={data.academic_year}
                                            name="academic_year"
                                            label="Academic Year"
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    [e.target.name]:
                                                        e.target.value,
                                                })
                                            }
                                        >
                                            {academic_year().map((res, i) => {
                                                return (
                                                    <MenuItem
                                                        key={i}
                                                        value={res}
                                                    >
                                                        {res}
                                                    </MenuItem>
                                                );
                                            })}
                                        </Select>
                                    </FormControl>
                                    {/* <Autocomplete
                                        className="w-full"
                                        multiple
                                        id="tags-outlined"
                                        options={subjects
                                            .filter(
                                                (subject) =>
                                                    !year_grade.user?.grades?.some(
                                                        (selected) =>
                                                            selected.subject_code ===
                                                            subject.code,
                                                    ),
                                            )
                                            .map((res) => ({
                                                name: res?.name,
                                                value: res.code,
                                            }))}
                                        defaultValue={year_grade.user?.grades.map(
                                            (res) => ({
                                                name: res.subject.name,
                                                value: res.subject.code,
                                            }),
                                        )}
                                        onClose={handleCloseHandler}
                                        getOptionLabel={(option) => option.name}
                                        filterSelectedOptions
                                        onChange={(e, newValue) => {
                                            // Ensure uniqueness based on `value` (code)
                                            const uniqueSubjects = [
                                                ...new Map(
                                                    newValue.map((item) => [
                                                        item.value,
                                                        item,
                                                    ]),
                                                ).values(),
                                            ];

                                            setData({
                                                ...data,
                                                subjects: uniqueSubjects,
                                            });
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Select Subjects"
                                                placeholder="Favorites"
                                            />
                                        )}
                                    /> */}
                                    {isLoading ? (
                                        <>
                                            <Skeleton animation="wave" />
                                            <Skeleton animation="wave" />
                                            <Skeleton animation="wave" />
                                            <Skeleton animation="wave" />
                                            <Skeleton animation="wave" />
                                            <Skeleton animation="wave" />
                                            <Skeleton animation="wave" />
                                            <Skeleton animation="wave" />
                                        </>
                                    ) : (
                                        <>
                                            <Grid
                                                container
                                                spacing={5}
                                                className="w-full flex"
                                                sx={{
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Grid item>
                                                    {customList(
                                                        "Available Subjects",
                                                        left,
                                                    )}
                                                </Grid>
                                                <Grid item>
                                                    <Grid
                                                        container
                                                        direction="column"
                                                        sx={{
                                                            alignItems:
                                                                "center",
                                                        }}
                                                    >
                                                        <Button
                                                            sx={{ my: 0.5 }}
                                                            variant="outlined"
                                                            size="small"
                                                            onClick={
                                                                handleCheckedRight
                                                            }
                                                            disabled={
                                                                leftChecked.length ===
                                                                0
                                                            }
                                                            aria-label="move selected right"
                                                        >
                                                            &gt;
                                                        </Button>
                                                        <Button
                                                            sx={{ my: 0.5 }}
                                                            variant="outlined"
                                                            size="small"
                                                            onClick={
                                                                handleCheckedLeft
                                                            }
                                                            disabled={
                                                                rightChecked.length ===
                                                                0
                                                            }
                                                            aria-label="move selected left"
                                                        >
                                                            &lt;
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    {customList(
                                                        "Registered Subjects",
                                                        right,
                                                    )}
                                                </Grid>
                                            </Grid>
                                        </>
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
                    </div>
                </Box>
            </Modal>
        </>
    );
}
