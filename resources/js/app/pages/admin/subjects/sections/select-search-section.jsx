import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { PersonSearch } from "@mui/icons-material";
import { router } from "@inertiajs/react";
import academic_year from "@/app/lib/academic-year";

export default function SelectSearchSection() {
    const { courses } = useSelector((state) => state.courses);
    const params = new URLSearchParams(window.location.search);

    const [search, setSearch] = useState({
        course_id: params.get("course_id") ?? "",
        semester: params.get("semester") ?? "",
        academic_year: params.get("academic_year") ?? "",
    });

    const handleFilterChange = useCallback((key, value) => {
        setSearch((prevSearch) => ({ ...prevSearch, [key]: value }));
    }, []);

    const searchSubjects = () => {
        const queryString = Object.entries(search)
            .filter(([_, val]) => val !== "")
            .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
            .join("&");

        router.visit(`?${queryString}`);
    };


    return (
        <div className="flex gap-3">
            <FormControl fullWidth>
                <InputLabel id="course-select-label">Course</InputLabel>
                <Select
                    labelId="course-select-label"
                    id="course-select"
                    name="course_id"
                    label="Course"
                    value={search.course_id}
                    onChange={(e) => handleFilterChange("course_id", e.target.value)}
                >
                    {courses?.data?.map((res) => (
                        <MenuItem key={res.id} value={res.id}>
                            {res.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="semester-select-label">Semester</InputLabel>
                <Select
                    labelId="semester-select-label"
                    id="semester-select"
                    name="semester"
                    label="Semester"
                    value={search.semester}
                    onChange={(e) => handleFilterChange("semester", e.target.value)}
                >
                    <MenuItem value="1st Semester">1st Semester</MenuItem>
                    <MenuItem value="2nd Semester">2nd Semester</MenuItem>
                    <MenuItem value="Summer">Summer</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="academic-year-select-label">Academic Year</InputLabel>
                <Select
                    labelId="academic-year-select-label"
                    id="academic-year-select"
                    name="academic_year"
                    label="Academic Year"
                    value={search.academic_year}
                    onChange={(e) => handleFilterChange("academic_year", e.target.value)}
                >
                    {academic_year().map((res, i) => (
                        <MenuItem key={i} value={res}>
                            {res}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button onClick={searchSubjects} variant="contained" className="w-1/2">
                <PersonSearch />
                Search
            </Button>
        </div>
    );
}
