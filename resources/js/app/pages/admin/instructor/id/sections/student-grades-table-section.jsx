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

function GradeCategoryTable({ categoryName, grades }) {

    return (
        <Box className='py-6 w-full' sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
                <div className='font-black'>
                    {categoryName}
                </div>
            </Typography>
            <div className='font-bold text-lg'>
                Prelim
            </div>
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
                    {grades.prelim?.map((res, i) => (
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
            <div className='font-bold text-lg'>
                Midterm
            </div>
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
                    {grades.midterm?.map((res, i) => (
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
            <div className='font-bold text-lg'>
                Final
            </div>
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
                    {grades.final?.map((res, i) => (
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

    const group_examination = row.examination.reduce((acc, exam) => {
        const key = exam.assessment.toLowerCase();
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(exam);
        return acc;
    }, {});

    const group_quiz = row.quiz.reduce((acc, exam) => {
        const key = exam.assessment.toLowerCase();
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(exam);
        return acc;
    }, {});

    const group_project = row.project.reduce((acc, exam) => {
        const key = exam.assessment.toLowerCase();
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(exam);
        return acc;
    }, {});

    const group_class_participation = row.class_participation.reduce((acc, exam) => {
        const key = exam.assessment.toLowerCase();
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(exam);
        return acc;
    }, {});

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
                    {row?.user?.fname} {row?.user?.lname}
                </TableCell>
                <TableCell component="th" scope="row">

                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                        <div className='flex gap-3 w-full'>
                            <GradeCategoryTable
                                categoryName="Examination"
                                grades={group_examination ?? []}
                            />
                            <GradeCategoryTable
                                categoryName="Quizzes"
                                grades={group_quiz ?? []}
                            />
                            {/* <GradeCategoryTable
                                categoryName="Quizzes"
                                grades={row?.quiz ?? []}
                            /> */}
                        </div>
                        <div className='flex gap-3 w-full'>
                            <GradeCategoryTable
                                categoryName="Projects / Assignments"
                                grades={group_project ?? []}
                            />
                            <GradeCategoryTable
                                categoryName="Class Participation"
                                grades={group_class_participation ?? []}
                            />
                        </div>

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
    console.log('students', students)
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
