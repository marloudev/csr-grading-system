import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useSelector } from "react-redux";

function GradeCategoryTable({ categoryName, grades }) {
    return (
        <Box className='py-6 w-full' sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
                {categoryName}
            </Typography>
            <Table size="small" aria-label="grades">
                <TableHead>
                    <TableRow>
                        <TableCell>Score</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>Percent</TableCell>
                        <TableCell>Remarks</TableCell>
                        <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {grades?.map((res, i) => (
                        <TableRow key={i}>
                            <TableCell>{res.score}</TableCell>
                            <TableCell>{res.total}</TableCell>
                            <TableCell>{res.percent}%</TableCell>
                            <TableCell>{res.remarks}</TableCell>
                            <TableCell>{res.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
}
function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    console.log('row',row)
    return (
        <React.Fragment>
        {/* The entire row is clickable to toggle */}
        <TableRow
            sx={{ '& > *': { borderBottom: 'unset' }, cursor: 'pointer' }}
            onClick={()=>setOpen(!open)}
        >
            <TableCell className="bg-blue-400 w-full">
                <IconButton aria-label="expand row" size="small">
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
                {row?.subject_code} ({row.academic_year})
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <div className='flex gap-3 w-full'>
                        <GradeCategoryTable
                            categoryName="Examination"
                            grades={row?.examination ?? []}
                        />
                        <GradeCategoryTable
                            categoryName="Quizzes"
                            grades={row?.quiz ?? []}
                        />
                    </div>
                    <div className='flex gap-3 w-full'>
                        <GradeCategoryTable
                            categoryName="Projects / Assignments"
                            grades={row?.projects ?? []}
                        />
                        <GradeCategoryTable
                            categoryName="Class Participation"
                            grades={row?.class_participation ?? []}
                        />
                    </div>

                </Collapse>
            </TableCell>
        </TableRow>
    </React.Fragment>
    );
}


export default function StudentIdTableSection() {
    
    const {userGrades} = useSelector((store)=>store.grades)
    console.log('userGrades',userGrades)
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <div className="font-black">School Year</div>
                        </TableCell>
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userGrades.map((row,i) => (
                        <Row key={i} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
