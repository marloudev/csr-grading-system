import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Alert, Autocomplete, CircularProgress, FormControl, InputLabel, MenuItem, Select, Snackbar, TextField } from '@mui/material';
import { useState } from 'react';
import { Edit } from '@mui/icons-material';
import { useEffect } from 'react';
import store from '@/app/pages/store/store';
import { get_enrollments_thunk, update_enrollments_thunk } from '../redux/enrollment-thunk';
import { useSelector } from 'react-redux';
import academic_year from '@/app/lib/academic-year';

export default function UpdateSection({ data }) {
    const [open, setOpen] = React.useState(false);
    const [form, setForm] = useState({})
    const [error, setError] = useState({})
    const [notify, setNotify] = useState(false)
    const [loading, setLoading] = useState(false)
    const { departments } = useSelector((state) => state.department)
    const { courses } = useSelector((state) => state.courses)
    const { sections } = useSelector((state) => state.sections)
    const { subjects } = useSelector((state) => state.subjects);

    useEffect(() => {
        setForm(data)
    }, [])
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    async function submitForm(params) {
        setLoading(true)
        const result = await store.dispatch(update_enrollments_thunk(form))
        if (result.status == 200) {
            await store.dispatch(get_enrollments_thunk())
            setNotify(true)
            setError({})
            setLoading(false)
        } else {
            setLoading(false)
            setError(result.response.data.errors)
        }
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotify(false)
        setOpen(false);
    };

    console.log('subject_codes',form)
    return (
        <div>
            <Snackbar open={notify}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={3000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Successfully Updated!
                </Alert>
            </Snackbar>
            <Button size='small' variant='contained' onClick={toggleDrawer(true)}><Edit /></Button>
            <Drawer

                anchor='right'
                open={open} onClose={toggleDrawer(false)}>
                <Box className="w-[500px] h-full flex" role="presentation" >
                    <div className='pt-20 px-3 w-full flex flex-col items-center justify-between pb-5'>
                        <div className='flex flex-col gap-3  w-full' >
                            <div className='text-2xl font-black'>
                                Edit enrollments
                            </div>
                            <TextField onChange={(e) => setForm({
                                ...form,
                                [e.target.name]: e.target.value
                            })}
                                value={form.user_id}
                                error={error?.user_id ? true : false}
                                helperText={error?.user_id ?? ''}
                                name="user_id"
                                type='text'
                                id="outlined-basic"
                                label="Employee ID"
                                variant="outlined"
                            />

                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Academic Year</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={form.academic_year ?? ''}
                                    name="academic_year"
                                    label="Academic Year"
                                    onChange={(e) => setForm({
                                        ...form,
                                        [e.target.name]: e.target.value
                                    })}
                                >
                                    {
                                        academic_year().map((res, i) => {
                                            return <MenuItem key={i} value={res}>{res}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Course</InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    name='course'
                                    label="Course"
                                    value={form.course_id}
                                    onChange={(e) => setForm({
                                        ...form,
                                        [e.target.name]: e.target.value
                                    })}
                                >
                                    {
                                        courses.data.map((res, i) => {
                                            return <MenuItem key={i} value={res.id}>{res.name}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    name='year'
                                    label="year"
                                    value={form?.year ?? ''}
                                    onChange={(e) => setForm({
                                        ...form,
                                        [e.target.name]: e.target.value
                                    })}
                                >
                                    <MenuItem value="1st Year">1st Year</MenuItem>
                                    <MenuItem value="2nd Year">2nd Year</MenuItem>
                                    <MenuItem value="3rd Year">3rd Year</MenuItem>
                                    <MenuItem value="4th Year">4th Year</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Section</InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    name='section_id'
                                    label="Section"
                                    value={form.section_id}
                                    onChange={(e) => setForm({
                                        ...form,
                                        [e.target.name]: e.target.value
                                    })}
                                >
                                    {
                                        sections.data.map((res, i) => {
                                            return <MenuItem key={i} value={res.id}>{res.name}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Semester</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={form.semester}
                                    name="semester"
                                    label="Semester"
                                    onChange={(e) => setForm({
                                        ...form,
                                        [e.target.name]: e.target.value
                                    })}
                                >
                                    <MenuItem value='1st Semester'>1st Semester</MenuItem>
                                    <MenuItem value='2nd Semester'>2nd Semester</MenuItem>
                                    <MenuItem value='Summer'>Summer</MenuItem>
                                </Select>
                            </FormControl>
                            <Autocomplete
                                id="multiple-limit-tags"
                                multiple
                                name="subjects"
                                options={subjects.data.map(res => ({
                                    label: res.name,
                                    value: res.code,
                                    code: res.code,
                                    id: res.id,
                                }))}
                                filterSelectedOptions
                                isOptionEqualToValue={(option, value) => option.value === value.value}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Subjects"
                                    />
                                )}
                                onChange={(e, value) => setForm({
                                    ...form,
                                    subject_codes: value,
                                })}
                            />
                        </div>
                        <Button
                            onClick={submitForm}
                            disabled={loading}
                            variant='contained'
                            className=' w-full'>
                            {loading ? <CircularProgress size={24} color="inherit" /> : 'Update'}
                        </Button>
                    </div>
                </Box>
            </Drawer>
        </div>
    );
}
