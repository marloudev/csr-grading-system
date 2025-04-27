import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useState } from "react";
import { router } from "@inertiajs/react";
import store from "@/app/pages/store/store";
import { get_student_thunk } from "../redux/student-thunk";

export default function SearchSection() {
    const [search, setSearch] = useState("");
    function search_handler(e) {
        // e.preventDefault();
        // if (e.key == "Enter") {
        //     router.visit(`?search=${search}`);
        // }
        store.dispatch(get_student_thunk(e.target.value))
    }
    return (
        <Paper
            sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
            }}
        >
            <InputBase
                onKeyUp={search_handler}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                onChange={search_handler}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
