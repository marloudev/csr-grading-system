import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Alert, CircularProgress, FormControl, InputLabel, MenuItem, Select, Snackbar, TextField } from '@mui/material';
import { useState } from 'react';
import store from '@/app/pages/store/store';
import { get_instructor_thunk, store_instructor_thunk } from '../redux/instructor-thunk';
import { useSelector } from 'react-redux';

export default function CreateSection() {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [error, setError] = useState({})
    const [notify, setNotify] = useState(false)
    const { departments } = useSelector((state) => state.department)

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };


    async function submitForm(params) {
        setLoading(true)
        const result = await store.dispatch(store_instructor_thunk(data))
        if (result.status == 200) {
            await store.dispatch(get_instructor_thunk())
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
                    Successfully Created!
                </Alert>
            </Snackbar>
            <Button variant='contained' onClick={toggleDrawer(true)}>Create Instructor</Button>
            <Drawer

                anchor='right'
                open={open} onClose={toggleDrawer(false)}>
                <Box className="w-[500px] h-full flex" role="presentation" >
                    <div className='pt-20 px-3 w-full flex flex-col items-center justify-between pb-5'>
                        <div className='flex flex-col gap-3  w-full' >
                            <div className='text-2xl font-black'>
                                Create Instructor
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
                            <TextField onChange={(e) => setData({
                                ...data,
                                [e.target.name]: e.target.value
                            })}
                                error={error?.fname ? true : false}
                                helperText={error?.fname ?? ''}
                                name="fname"
                                type='text'
                                id="outlined-basic"
                                label="First Name"
                                variant="outlined"
                            />
                            <TextField
                                onChange={(e) => setData({
                                    ...data,
                                    [e.target.name]: e.target.value
                                })}
                                error={error?.lname ? true : false}
                                helperText={error?.lname ?? ''}
                                name='lname'
                                type='text'
                                id="outlined-basic"
                                label="Last Name"
                                variant="outlined" />
                            <TextField
                                onChange={(e) => setData({
                                    ...data,
                                    [e.target.name]: e.target.value
                                })}
                                error={error?.email ? true : false}
                                helperText={error?.email ?? ''}
                                name='email'
                                type='email'
                                id="outlined-basic"
                                label="Email"
                                variant="outlined" />
                            <TextField
                                onChange={(e) => setData({
                                    ...data,
                                    [e.target.name]: e.target.value
                                })}
                                error={error?.password ? true : false}
                                helperText={error?.password ?? ''}
                                name='password'
                                type='password'
                                id="outlined-basic"
                                label="Password"
                                variant="outlined" />

                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Department</InputLabel>
                                <Select
                                    id="demo-simple-select"
                                    name='department_id'
                                    label="Department"
                                    onChange={(e) => setData({
                                        ...data,
                                        [e.target.name]: e.target.value
                                    })}
                                >
                                    {
                                        departments.data.map((res, i) => {
                                            return <MenuItem key={i} value={res.id}>{res.name}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>

                            {/* <TextField
                                onChange={(e) => setData({
                                    ...data,
                                    [e.target.name]: e.target.value
                                })}
                                error={error?.course ? true : false}
                                helperText={error?.course ?? ''}
                                name='course'
                                id="outlined-basic"
                                label="Course"
                                variant="outlined" /> */}
                            <TextField
                                onChange={(e) => setData({
                                    ...data,
                                    [e.target.name]: e.target.value
                                })}
                                error={error?.dob ? true : false}
                                helperText={error?.dob ?? ''}
                                name='dob'
                                type='date'
                                id="outlined-basic"
                                variant="outlined" />
                            <TextField
                                onChange={(e) => setData({
                                    ...data,
                                    [e.target.name]: e.target.value
                                })}
                                error={error?.address ? true : false}
                                helperText={error?.address ?? ''}
                                name='address'
                                id="outlined-basic"
                                label="Address"
                                variant="outlined" />
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
