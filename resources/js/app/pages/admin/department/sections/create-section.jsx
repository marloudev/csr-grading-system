import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Alert, CircularProgress, Snackbar, TextField } from '@mui/material';
import { useState } from 'react';
import store from '@/app/pages/store/store';
import { get_department_thunk, store_department_thunk } from '../redux/department-thunk';

export default function CreateSection() {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [error, setError] = useState({})
    const [notify, setNotify] = useState(false)
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };


    async function submitForm(params) {
        setLoading(true)
        const result = await store.dispatch(store_department_thunk(data))
        if (result.status == 200) {
            await store.dispatch(get_department_thunk())
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
            <Button variant='contained' onClick={toggleDrawer(true)}>Create Department</Button>
            <Drawer

                anchor='right'
                open={open} onClose={toggleDrawer(false)}>
                <Box className="w-[500px] h-full flex" role="presentation" >
                    <div className='pt-20 px-3 w-full flex flex-col items-center justify-between pb-5'>
                        <div className='flex flex-col gap-3  w-full' >
                            <div className='text-2xl font-black'>
                                Create Department
                            </div>
                            <TextField onChange={(e) => setData({
                                ...data,
                                [e.target.name]: e.target.value
                            })}
                                error={error?.name ? true : false}
                                helperText={error?.name ?? ''}
                                name="name"
                                type='text'
                                id="outlined-basic"
                                label="Name of Department"
                                variant="outlined"
                            />
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
