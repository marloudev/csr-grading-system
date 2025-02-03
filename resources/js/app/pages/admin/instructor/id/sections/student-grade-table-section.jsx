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


export default function StudentGradeTableSection({ data }) {
    return (
        <TableContainer className="w-full" component={Paper}>
            <Table className="w-full" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Student Name</TableCell>
                        <TableCell>Prelim</TableCell>
                        <TableCell>Midterm</TableCell>
                        <TableCell>Final</TableCell>
                        <TableCell>Grades</TableCell>
                        {/* <TableCell >Action</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.student_grade?.map((res, i) => (
                        <TableRow key={i}>
                            <TableCell sx={{ width: "20%" }}>
                                {res?.user?.fname} {res?.user?.lname}
                            </TableCell>
                            <TableCell sx={{ width: "20%" }}>
                                {/* {res.prelim} */}
                                <EditGradeSection
                                    type="prelim"
                                    data={res}
                                    value={res.prelim}
                                />
                            </TableCell>
                            <TableCell sx={{ width: "20%" }}>
                                <EditGradeSection
                                    type="midterm"
                                    data={res}
                                    value={res.midterm}
                                />
                            </TableCell>
                            <TableCell sx={{ width: "20%" }}>
                                <EditGradeSection
                                    type="final"
                                    data={res}
                                    value={res.final}
                                />
                            </TableCell>
                            <TableCell sx={{ width: "20%" }}>
                                {(
                                    (res.prelim + res.midterm + res.final) /
                                    3
                                ).toFixed(2)}
                            </TableCell>
                            {/* <TableCell >
                                  <EditGradeSection data={res}/>
                                </TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
