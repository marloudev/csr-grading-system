import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UpdateSection from './update-section';
import DeleteSection from './delete-section';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Visibility } from '@mui/icons-material';
import { Button } from '@mui/material';
import { router } from '@inertiajs/react';
import AddEnrollmentSection from './add-enrollment-section';


export default function TableSection() {
  const { enrollments } = useSelector((state) => state.enrollments)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student ID</TableCell>
            <TableCell>Firstname</TableCell>
            <TableCell >Lastname</TableCell>
            <TableCell>Semester</TableCell>
            <TableCell>Section</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Year</TableCell>
            {/* <TableCell>Age</TableCell>
            <TableCell>Address</TableCell> */}
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {enrollments?.data.map((res, i) => {
            const dob = moment(res?.user?.dob, 'YYYY-MM-DD'); // Replace with actual date of birth
            const age = moment().diff(dob, 'years');
            console.log('res',res)
            return (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{res?.user?.user_id}</TableCell>
                <TableCell>
                  {res?.user?.fname}
                </TableCell>
                <TableCell>
                  {res?.user?.lname}
                </TableCell>
                <TableCell>{res?.semester}</TableCell>
                <TableCell>{res?.section?.name ?? ''}</TableCell>
                <TableCell>{res?.course?.name ?? ''}</TableCell>
                <TableCell>{res?.year ?? ''}</TableCell>
                {/* <TableCell>{age}</TableCell>
                <TableCell>{res?.user?.address}</TableCell> */}
                <TableCell>
                  <div className='flex gap-2'>
                    {/* <AddEnrollmentSection data={res}/> */}
                    <UpdateSection data={res} />
                    <DeleteSection data={res} />
                    <Button
                      onClick={()=>router.visit(`/administrator/students/enrollment/${res.id}`)}
                      size='small'
                      variant='contained'
                      color='success'>
                      <Visibility />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
