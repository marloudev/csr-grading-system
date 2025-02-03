import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import React from "react";
import academic_year from "@/app/lib/academic-year";
import { useState } from "react";
import { PersonSearch } from "@mui/icons-material";
import { router } from "@inertiajs/react";
import { useEffect } from "react";

export default function SearchSubjectSection() {
    const [form, setForm] = useState({});
    console.log("academic_year()", academic_year());
    useEffect(() => {
        // Get query string from the current URL
        const query = window.location.search;

        // Parse query string using URLSearchParams
        const params = new URLSearchParams(query);
        const parsedParams = {
            academic_year:
                params.get("academic_year") ??
                academic_year()[academic_year().length - 1],
            semester: params.get("semester") ?? "1st Semester",
        };

        setForm(parsedParams);
    }, []);

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    function search_grades(params) {
        router.visit(
            `?academic_year=${form.academic_year}&semester=${form.semester}`,
        );
    }
    return (
        <div className="flex gap-3">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                    Academic Year
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={form.academic_year ?? ""}
                    name="academic_year"
                    label="Academic Year"
                    onChange={handleChange}
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
                <InputLabel id="demo-simple-select-label">Semester</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={form.semester ?? ""}
                    name="semester"
                    label="Semester"
                    onChange={handleChange}
                >
                    <MenuItem value="1st Semester">1st Semester</MenuItem>
                    <MenuItem value="2nd Semester">2nd Semester</MenuItem>
                    <MenuItem value="Summer">Summer</MenuItem>
                </Select>
            </FormControl>
            <Button
                onClick={search_grades}
                variant="contained"
                className="w-1/2"
            >
                <PersonSearch />
                Search
            </Button>
        </div>
    );
}
