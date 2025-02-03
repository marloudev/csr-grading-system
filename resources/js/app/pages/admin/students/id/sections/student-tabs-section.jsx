import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import TableSection from "./student-id-table-section";

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
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function StudentTabsSection() {
    const { year_grade } = useSelector((store) => store.grades);
    const [value, setValue] = React.useState(0);
    

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="1st Year" {...a11yProps(0)} />
                    <Tab label="2nd Year" {...a11yProps(1)} />
                    <Tab label="3rd Year" {...a11yProps(2)} />
                    <Tab label="4th Year" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                
            <TableSection data={year_grade.stYear} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
            <TableSection data={year_grade.ndYear} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
               
            <TableSection data={year_grade.rdYear} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <TableSection data={year_grade.thYear} />
            </CustomTabPanel>
        </Box>
    );
}
