import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { CircularProgress, TextField } from '@mui/material';
import { useState } from 'react';
import { Edit } from '@mui/icons-material';

export default function UpdateSection() {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = useState(false)
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };



    return (
        <div>
            <Button size='small' variant='contained' onClick={toggleDrawer(true)}><Edit /></Button>
            <Drawer

                anchor='right'
                open={open} onClose={toggleDrawer(false)}>
                <Box className="w-[500px] h-full flex" role="presentation" >
                    <div className='pt-20 px-3 w-full flex flex-col items-center justify-between pb-5'>
                        <div className='flex flex-col gap-3  w-full' >
                            <div className='text-2xl font-black'>
                                Update Instructor
                            </div>
                            <TextField type='text' id="outlined-basic" label="First Name" variant="outlined" />
                            <TextField type='text' id="outlined-basic" label="Last Name" variant="outlined" />
                            <TextField type='email' id="outlined-basic" label="Email" variant="outlined" />
                            <TextField id="outlined-basic" label="Department" variant="outlined" />
                            <TextField id="outlined-basic" label="Course" variant="outlined" />
                            <TextField type='date' id="outlined-basic" variant="outlined" />
                            <TextField id="outlined-basic" label="Address" variant="outlined" />
                        </div>
                        <Button
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
