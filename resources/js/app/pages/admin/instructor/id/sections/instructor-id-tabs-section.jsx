import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import StudentGradeTableSection from "./student-grade-table-section";
import AddStudentFormSection from "./add-student-form-section";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            className="w-full"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

export default function InstructorIdTabsSection() {
    const { handleds } = useSelector((store) => store.subjects);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log("handleds", handleds);
    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                height: 500,
            }}
        >
            <Tabs
                className="w-1/6"
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
            >
                {handleds.map((res, i) => {
                    return <Tab key={i} label={res.name} {...a11yProps(i)} />;
                })}
            </Tabs>
            <div className="flex w-full">
                {handleds.map((res, i) => {
                    return (
                        <TabPanel value={value} index={i}>
                            <AddStudentFormSection  subject={res}/>
                            <StudentGradeTableSection data={res} />
                        </TabPanel>
                    );
                })}
            </div>
        </Box>
    );
}
