import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { router } from "@inertiajs/react";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: index,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function InstructorIdTabsSection() {
    const instructor_id = window.location.pathname.split("/")[3];
    const handleChange = (event, newValue) => {
        router.visit(
            `/instructor/subjects/${instructor_id}${event.target.id}`,
        );
    };
    function get_active(params) {
        const active = window.location.pathname.split("/")[4];
        if (active == "create_grades") {
            return 0
        } else 
        // if (active == "students") {
        //     return 1;
        // } 
        // else 
        {
            return 1;
        }
    }
    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={get_active()}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    {/* <Tab label="Details" id="" /> */}
                    <Tab label="Create Grades" id="/create_grades" />
                    <Tab label="Students" id="/students" />
                </Tabs>
            </Box>
        </Box>
    );
}
