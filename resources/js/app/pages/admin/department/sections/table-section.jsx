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


export default function TableSection() {
  const { departments } = useSelector((state) => state.department)
  console.log('departments',departments)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee ID</TableCell>
            {/* <TableCell>Firstname</TableCell>
            <TableCell >Lastname</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Age</TableCell> */}
            <TableCell>Created At</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {departments?.data.map((res,i) => {
            const dob = moment(res.dob, 'YYYY-MM-DD'); // Replace with actual date of birth
            const age = moment().diff(dob, 'years');
            return (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{res.name}</TableCell>
                {/* <TableCell>
                  {res.fname}
                </TableCell>
                <TableCell>
                  {res.lname}
                </TableCell>
                <TableCell>{res.email}</TableCell>
                <TableCell>{res.department}</TableCell>
                <TableCell>{res.course}</TableCell>
                <TableCell>{age}</TableCell> */}
                <TableCell>{res.created_at}</TableCell>
                <TableCell>
                  <div className='flex gap-2'>
                    <UpdateSection data={res} />
                    <DeleteSection data={res} />
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
