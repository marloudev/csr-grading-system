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
  const { sections } = useSelector((state) => state.sections)
  console.log('sections',sections)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Name of Sections</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sections?.data.map((res,i) => {
            return (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell >{res.name}</TableCell>
                
                <TableCell align="right">
                  <div className='flex gap-2 items-end justify-end'>
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
