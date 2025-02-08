import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UpdateSection from "./update-section";
import DeleteSection from "./delete-section";
import { useSelector } from "react-redux";
import { useState, useEffect, useMemo, useCallback } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { router } from "@inertiajs/react";
import academic_year from "@/app/lib/academic-year";

export default function TableSection() {
    const { subjects } = useSelector((state) => state.subjects);
    const { courses } = useSelector((state) => state.courses);

    const query = window.location.search;
    const params = useMemo(() => new URLSearchParams(query), [query]);

    const [search, setSearch] = useState({
        course_id: params.get("course_id") ?? "",
        semester: params.get("semester") ?? "",
        academic_year: params.get("academic_year") ?? "",
    });

    useEffect(() => {
        setSearch({
            course_id: params.get("course_id") ?? "",
            semester: params.get("semester") ?? "",
            academic_year: params.get("academic_year") ?? "",
        });
    }, [params]);

    const handleFilterChange = useCallback(
        (key, value) => {
            const newSearch = { ...search, [key]: value };

            // Construct query string dynamically
            const queryString = Object.entries(newSearch)
                .filter(([_, val]) => val !== "")
                .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
                .join("&");

            setSearch(newSearch);
            router.visit(`?${queryString}`);
        },
        [search],
    );

    function getLastWord(str) {
        return str.trim().split(" ").pop();
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name of Course</TableCell>
                        <TableCell>Instructor</TableCell>
                        <TableCell>Subject Code</TableCell>
                        <TableCell>
                            <FormControl fullWidth>
                                <InputLabel id="course-select-label">
                                    Course
                                </InputLabel>
                                <Select
                                    labelId="course-select-label"
                                    id="course-select"
                                    name="course_id"
                                    label="Course"
                                    value={search.course_id}
                                    onChange={(e) =>
                                        handleFilterChange(
                                            "course_id",
                                            e.target.value,
                                        )
                                    }
                                >
                                    {courses?.data?.map((res) => (
                                        <MenuItem key={res.id} value={res.id}>
                                            {getLastWord(res.name)}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </TableCell>
                        <TableCell>
                            <FormControl fullWidth>
                                <InputLabel id="semester-select-label">
                                    Semester
                                </InputLabel>
                                <Select
                                    label="Semester"
                                    labelId="semester-select-label"
                                    id="semester-select"
                                    name="semester"
                                    value={search.semester ?? ""}
                                    onChange={(e) =>
                                        handleFilterChange(
                                            "semester",
                                            e.target.value,
                                        )
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
                        </TableCell>
                        <TableCell>
                            <FormControl fullWidth>
                                <InputLabel id="academic-year-select-label">
                                    Academic Year
                                </InputLabel>
                                <Select
                                    labelId="academic-year-select-label"
                                    id="academic-year-select"
                                    name="academic_year"
                                    label="Academic Year"
                                    value={search.academic_year}
                                    onChange={(e) =>
                                        handleFilterChange(
                                            "academic_year",
                                            e.target.value,
                                        )
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
                        </TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subjects?.data?.map((res) => (
                        <TableRow
                            key={res.id}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {res.name}
                            </TableCell>
                            <TableCell>
                                {res?.user?.fname} {res?.user?.lname}
                            </TableCell>
                            <TableCell>{res.code}</TableCell>
                            <TableCell>{res?.course?.name ?? ""}</TableCell>
                            <TableCell>{res.semester}</TableCell>
                            <TableCell>{res.academic_year}</TableCell>
                            <TableCell>
                                <div className="flex gap-2">
                                    <UpdateSection data={res} />
                                    <DeleteSection data={res} />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
