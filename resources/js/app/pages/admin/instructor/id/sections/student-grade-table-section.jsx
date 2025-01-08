import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditGradeSection from "./edit-grade-section";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function StudentGradeTableSection({ data }) {
    return (
            <TableContainer className="w-full" component={Paper}>
                <Table className="w-full" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Student Name</TableCell>
                            <TableCell align="right">Prelim</TableCell>
                            <TableCell align="right">Midterm</TableCell>
                            <TableCell align="right">Final</TableCell>
                            <TableCell align="right">Grades</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.student_grade?.map((res, i) => (
                            <TableRow
                                key={i}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {res?.user?.fname} {res?.user?.lname}
                                </TableCell>
                                <TableCell align="right">
                                    {res.prelim}
                                </TableCell>
                                <TableCell align="right">
                                    {res.midterm}
                                </TableCell>
                                <TableCell align="right">{res.final}</TableCell>
                                <TableCell align="right">
                                    {((res.prelim + res.midterm + res.final) / 3).toFixed(2)}
                                </TableCell>
                                <TableCell align="right">
                                  <EditGradeSection data={res}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    );
}
