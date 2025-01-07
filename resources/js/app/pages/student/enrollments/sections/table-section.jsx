import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import UpdateSection from './update-section';
// import DeleteSection from './delete-section';
import { useSelector } from "react-redux";
import moment from "moment";
import { Visibility } from "@mui/icons-material";
import { Button } from "@mui/material";
import { router } from "@inertiajs/react";
// import AddEnrollmentSection from './add-enrollment-section';

export default function TableSection() {
    // const { userEnrollments } = useSelector((state) => state.enrollments)
    const { userGrades } = useSelector((store) => store.grades);
    console.log("userGrades", userGrades);
    return (
        <TableContainer className="mt-3" component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Subject Name</TableCell>
                        <TableCell>Prelim</TableCell>
                        <TableCell>Midterm</TableCell>
                        <TableCell>Final</TableCell>
                        {/* <TableCell>Age</TableCell>
            <TableCell>Address</TableCell> */}
                        <TableCell>Grades</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userGrades?.map((res, i) => {
                        const dob = moment(res.dob, "YYYY-MM-DD"); // Replace with actual date of birth
                        const age = moment().diff(dob, "years");
                        return (
                            <TableRow
                                key={i}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell>{res.subject.name}</TableCell>
                                <TableCell>{res.prelim}</TableCell>
                                <TableCell>{res.midterm}</TableCell>
                                <TableCell>{res.final}</TableCell>
                                <TableCell>    {((res.prelim + res.midterm + res.final) / 3).toFixed(2)}</TableCell>
                            
                                {/* <TableCell>
                                    <div className="flex gap-2"> */}
                                        {/* {
                      !res.enrollment && <AddEnrollmentSection data={res}/>
                    }
                    
                    <UpdateSection data={res} />
                    <DeleteSection data={res} /> */}
                                        {/* <Button
                      onClick={()=>router.visit(`/student/enrollments/${res.id}`)}
                      size='small'
                      variant='contained'
                      color='success'>
                      <Visibility />
                    </Button> */}
                                    {/* </div>
                                </TableCell> */}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
