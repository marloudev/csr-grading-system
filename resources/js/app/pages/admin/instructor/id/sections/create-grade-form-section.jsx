import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, FormHelperText } from '@mui/material';
import { Save } from '@mui/icons-material';
import store from '@/app/pages/store/store';
import { store_grade_thunk } from '../../../grades/redux/grade-thunk';
import { useEffect } from 'react';
import { setStudents } from '../../redux/instructor-slice';
import moment from 'moment';

export default function CreateGradeFormSection() {
    const [records, setRecords] = useState([]);
    const [quizType, setQuizType] = useState({});
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({}); // To store validation errors
    const { students, search } = useSelector((store) => store.instructors);
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (students.length > 0) {
            const defaultRecords = students.map(student => ({
                ...student,
                user_id: student.user.user_id,
                score: '', // Default empty score
                // Add any other fields if needed
            }));
            setRecords(defaultRecords);
        }
    }, [students.length]);

    const handleScoreChange = (e, user_id, user) => {
        const score = e.target.value;

        // Update records
        setRecords((prevRecords) => {
            const existingIndex = prevRecords.findIndex((item) => item.user_id === user_id);
            if (existingIndex !== -1) {
                const updatedRecords = [...prevRecords];
                updatedRecords[existingIndex].score = score;
                return updatedRecords;
            } else {
                return [...prevRecords, { user_id, user, score }];
            }
        });

        // Remove error for the current user if input is valid
        if (score !== "") {
            setErrors((prevErrors) => {
                const { [user_id]: removedError, ...rest } = prevErrors;
                return rest;
            });
        }
    };

    const validateScores = () => {
        let isValid = true;
        let validationErrors = {};

        // Validate if a lecture type has been selected
        if (!quizType.lecture) {
            validationErrors['lecture'] = "Lecture is required";
            isValid = false;
        }

        // Validate if an assessment type has been selected
        if (!quizType.assessment) {
            validationErrors['assessment'] = "Assessment is required";
            isValid = false;
        }

        // Validate each student's score
        records.forEach((record) => {
            if (record.score === "") {
                validationErrors[record.user_id] = "Score is required";
                isValid = false;
            }
        });

        setErrors(validationErrors);
        return isValid;
    };


    const submitRecords = async () => {
        if (!validateScores()) {
            return; // Don't proceed if validation fails
        }
        setLoading(true);
        try {
            const res = await store.dispatch(store_grade_thunk({
                ...quizType,
                search,
                records,
                date: moment().format('LL')
            }));
            dispatch(setStudents([]))
            setLoading(false);
        } catch (error) {
            console.error('Submission error:', error);
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col gap-5'>
            {students.length !== 0 && (
                <div className='flex gap-5'>
                    <FormControl fullWidth error={Boolean(errors['lecture'])}>
                        <InputLabel id="demo-simple-select-label">Lecture</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="lecture"
                            label="Lecture"
                            onChange={(e) => setQuizType({
                                ...quizType,
                                [e.target.name]: e.target.value,
                            })}
                            value={quizType.lecture ?? ''}
                        >
                            <MenuItem value='Examination'>Examination (30%)</MenuItem>
                            <MenuItem value='Quizzes'>Quizzes (30%)</MenuItem>
                            <MenuItem value='Projects/Assignment'>Projects/Assignment (20%)</MenuItem>
                            <MenuItem value='Class Participation'>Class Participation (20%)</MenuItem>
                        </Select>
                        <FormHelperText>{errors['lecture'] ?? ''}</FormHelperText>
                    </FormControl>

                    <FormControl fullWidth error={Boolean(errors['assessment'])}>
                        <InputLabel id="demo-simple-select-label">Assessment</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="assessment"
                            label="Assessment"
                            onChange={(e) => setQuizType({
                                ...quizType,
                                [e.target.name]: e.target.value,
                            })}
                        >
                            <MenuItem value='Prelim'>Prelim</MenuItem>
                            <MenuItem value='Midterm'>Midterm</MenuItem>
                            <MenuItem value='Final'>Final</MenuItem>
                        </Select>
                        <FormHelperText>{errors['assessment'] ?? ''}</FormHelperText>
                    </FormControl>
                </div>

            )}

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Students</TableCell>
                            <TableCell>Grades</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((res, i) => (
                            <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {res.user.fname} {res.user.lname}
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        onChange={(e) => handleScoreChange(e, res.user.user_id, res.user)}
                                        label="Score"
                                        variant="outlined"
                                        error={Boolean(errors[res.user.user_id])} // If error exists for user
                                        helperText={errors[res.user.user_id] ?? ''} // Show the error message
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {students.length !== 0 && (
                <div className='flex w-full items-end justify-end'>
                    <Button
                        onClick={submitRecords}
                        variant="contained"
                        className='flex gap-2'
                        disabled={loading}
                    >
                        <Save />
                        <div>{loading ? 'Submitting...' : 'Add Records'}</div>
                    </Button>
                </div>
            )}
        </div>
    );
}
