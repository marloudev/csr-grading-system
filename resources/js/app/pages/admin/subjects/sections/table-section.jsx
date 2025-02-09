import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import UpdateSection from "./update-section";
import DeleteSection from "./delete-section";
import { useSelector } from "react-redux";

export default function TableSection() {
    const { subjects } = useSelector((state) => state.subjects);
   

 
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name of Course</TableCell>
                        <TableCell>Instructor</TableCell>
                        <TableCell>Subject Code</TableCell>
                        <TableCell>
                            Courses
                        </TableCell>
                        <TableCell>
                           Semester
                        </TableCell>
                        <TableCell>
                           Academic Year
                        </TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subjects?.data?.map((res) => (
                        <TableRow
                            key={res.id}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {res.name}
                            </TableCell>
                            <TableCell>
                                {res?.user?.fname} {res?.user?.lname}
                            </TableCell>
                            <TableCell>{res.code}</TableCell>
                            <TableCell>{res?.course?.name ?? ""}</TableCell>
                            <TableCell>{res.semester}</TableCell>
                            <TableCell>{res.academic_year}</TableCell>
                            <TableCell>
                                <div className="flex gap-2">
                                    <UpdateSection data={res} />
                                    <DeleteSection data={res} />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
