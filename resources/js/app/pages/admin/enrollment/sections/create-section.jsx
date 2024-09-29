import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Alert, CircularProgress, FormControl, InputLabel, MenuItem, Select, Snackbar, TextField } from '@mui/material';
import { useState } from 'react';
import store from '@/app/pages/store/store';
import { get_enrollments_thunk, store_enrollments_thunk } from '../redux/enrollment-thunk';
import { useSelector } from 'react-redux';
import academic_year from '@/app/lib/academic-year';
import { useEffect } from 'react';
import current_academic_year from '@/app/lib/current-academic-year';

export default function CreateSection() {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [error, setError] = useState({})
    const [notify, setNotify] = useState({
        isOpen: false,
        message: '',
        type: ''
    })
    const { departments } = useSelector((state) => state.department)
    const { courses } = useSelector((state) => state.courses)
    const { sections } = useSelector((state) => state.sections)

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    useEffect(() => {
        setData({
            ...data,
            academic_year: current_academic_year()
        })
    }, [])

    async function submitForm(params) {
        setLoading(true)
        const result = await store.dispatch(store_enrollments_thunk({
            ...data,
            user_type: 3
        }))
        if (result.status == 200) {
            await store.dispatch(get_enrollments_thunk())
            setNotify({
                isOpen: true,
                message: 'Successfully Registered!',
                type: 'success'
            })
            setError({})
            setLoading(false)
        } else {
            setLoading(false)
            setNotify({
                isOpen: true,
                message: 'Student is already enrolled!',
                type: 'warning'
            })
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

    return (
        <div>
            <Snackbar open={notify.isOpen}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                autoHideDuration={3000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={notify.type}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {notify.message}
                </Alert>
            </Snackbar>
            <Button variant='contained' onClick={toggleDrawer(true)}>Create enrollments</Button>
            <Drawer

                anchor='right'
                open={open} onClose={toggleDrawer(false)}>
                <Box className="w-[500px] h-full flex" role="presentation" >
                    <div className='pt-20 px-3 w-full flex flex-col items-center justify-between pb-5'>
                        <div className='flex flex-col gap-3  w-full' >
                            <div className='text-2xl font-black'>
                                Create enrollments
                            </div>
                            <TextField onChange={(e) => setData({
                                ...data,
                                [e.target.name]: e.target.value
                            })}
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
                                    value={data.academic_year ?? ''}
                                    name="academic_year"
                                    label="Academic Year"
                                    onChange={(e) => setData({
                                        ...data,
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
                                    name='course_id'
                                    label="Course"
                                    value={data.course_id}
                                    onChange={(e) => setData({
                                        ...data,
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
                                    value={data.year}
                                    onChange={(e) => setData({
                                        ...data,
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
                                    name='section'
                                    label="Section"
                                    value={data.section}
                                    onChange={(e) => setData({
                                        ...data,
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
                                    value={data.section}
                                    name="semester"
                                    label="Semester"
                                    onChange={(e) => setData({
                                        ...data,
                                        [e.target.name]: e.target.value
                                    })}
                                >
                                    <MenuItem value='1st Semester'>1st Semester</MenuItem>
                                    <MenuItem value='2nd Semester'>2nd Semester</MenuItem>
                                    <MenuItem value='Summer'>Summer</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <Button
                            onClick={submitForm}
                            disabled={loading}
                            variant='contained'
                            className=' w-full'>
                            {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
                        </Button>
                    </div>
                </Box>
            </Drawer>
        </div>
    );
}
