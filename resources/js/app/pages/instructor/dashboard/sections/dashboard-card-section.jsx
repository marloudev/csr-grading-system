import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';


export default function DashboardCardSection() {
    const { dashboards } = useSelector((store) => store.dashboards)
    console.log('dashboards', dashboards)
    return (
        <div className="grid grid-cols-2 gap-4 px-4 mt-8 sm:grid-cols-2 sm:px-8">
            <Card variant="outlined">
                <CardComponent
                    title="Number of Subjects"
                    count={dashboards.subjectCount}
                />
            </Card>
            <Card variant="outlined">
                <CardComponent
                    title="Number of Students"
                    count={dashboards.studentCount} 
                    />
            </Card>
            {/* <Card variant="outlined">
                <CardComponent
                    title="Number of Department"
                    count={dashboards.departmentCount} 
                    />
            </Card>
            <Card variant="outlined">
                <CardComponent
                    title="Number of Course Offered"
                    count={dashboards.courseCount} 
                    />
            </Card> */}
        </div>
    )
}

function CardComponent({ title, count }) {

    return (
        <React.Fragment>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body1">
                    Total {count}
                </Typography>
            </CardContent>
            <CardActions className='w-full items-center justify-end'>
                {/* <Button size="small">Show More</Button> */}
            </CardActions>
        </React.Fragment>
    )
}


