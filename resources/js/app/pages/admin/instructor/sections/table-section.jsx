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

function createData(name, calories, fat, carbs, protein,action) {
  return { name, calories, fat, carbs, protein,action };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0,<div className='flex gap-2'><UpdateSection /> <DeleteSection /></div>),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3,<div className='flex gap-2'><UpdateSection /> <DeleteSection /></div>),
  createData('Eclair', 262, 16.0, 24, 6.0,<div className='flex gap-2'><UpdateSection /> <DeleteSection /></div>),
  createData('Cupcake', 305, 3.7, 67, 4.3,<div className='flex gap-2'><UpdateSection /> <DeleteSection /></div>),
  createData('Gingerbread', 356, 16.0, 49, 3.9,<div className='flex gap-2'><UpdateSection /> <DeleteSection /></div>),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0,<div className='flex gap-2'><UpdateSection /> <DeleteSection /></div>),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3,<div className='flex gap-2'><UpdateSection /> <DeleteSection /></div>),
  createData('Eclair', 262, 16.0, 24, 6.0,<div className='flex gap-2'><UpdateSection /> <DeleteSection /></div>),
  createData('Cupcake', 305, 3.7, 67, 4.3,<div className='flex gap-2'><UpdateSection /> <DeleteSection /></div>),
  createData('Gingerbread', 356, 16.0, 49, 3.9,<div className='flex gap-2'><UpdateSection /> <DeleteSection /></div>),
];

export default function TableSection() {
  return (
    <TableContainer component={Paper}>
      <Table  sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Firstname</TableCell>
            <TableCell >Lastname</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
              <TableCell>{row.protein}</TableCell>
              <TableCell>{row.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
