import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


            
export default function StudentGradeTableSection({ data }) {
    console.log('data',data)
    return (
            <TableContainer className="w-full" component={Paper}>
                <Table className="w-full" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {/* <TableCell>Student Name</TableCell> */}
                            <TableCell >Prelim</TableCell>
                            <TableCell >Midterm</TableCell>
                            <TableCell >Final</TableCell>
                            <TableCell >Grades</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            <TableRow
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                {/* <TableCell component="th" scope="row">
                                    {data?.user?.fname} {data?.user?.lname}
                                </TableCell> */}
                                <TableCell >
                                    {data.prelim}
                                </TableCell>
                                <TableCell >
                                    {data.midterm}
                                </TableCell>
                                <TableCell >{data.final}</TableCell>
                                <TableCell >
                                    {((data.prelim + data.midterm + data.final) / 3).toFixed(2)}
                                </TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
    );
}
