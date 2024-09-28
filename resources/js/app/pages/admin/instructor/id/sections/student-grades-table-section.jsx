import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useSelector } from 'react-redux';

// Reusable GradeCategoryTable component for different grade types
function GradeCategoryTable({ categoryName, grades }) {
    return (
        <Box className='py-6' sx={{ margin: 1 }}>
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

function Row({ row, isOpen, onClick }) {
    return (
        <React.Fragment>
            {/* The entire row is clickable to toggle */}
            <TableRow 
                sx={{ '& > *': { borderBottom: 'unset' }, cursor: 'pointer' }} 
                onClick={onClick}
            >
                <TableCell>
                    <IconButton aria-label="expand row" size="small">
                        {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row?.user?.fname} {row?.user?.lname}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                        <GradeCategoryTable
                            categoryName="Examination"
                            grades={row?.grade?.examination ?? []}
                        />
                        <GradeCategoryTable
                            categoryName="Quizzes"
                            grades={row?.grade?.quiz ?? []}
                        />
                        <GradeCategoryTable
                            categoryName="Projects / Assignments"
                            grades={row?.grade?.projects ?? []}
                        />
                        <GradeCategoryTable
                            categoryName="Class Participation"
                            grades={row?.grade?.class_participation ?? []}
                        />
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default function StudentGradesTableSection() {
    const { students } = useSelector((store) => store.instructors);
    const [openRowIndex, setOpenRowIndex] = React.useState(null); // Track the currently open row

    const handleRowClick = (index) => {
        // If the row is already open, close it; otherwise, open it and close any other row
        setOpenRowIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableBody>
                    {students.map((student, i) => (
                        <Row
                            key={i}
                            row={student}
                            isOpen={openRowIndex === i} // Check if this row is open
                            onClick={() => handleRowClick(i)} // Pass index to toggle row
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
