// src/components/DashboardLineGraph.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DashboardLineGraph = () => {


    const { dashboards } = useSelector((store) => store.dashboards)
    const courseData = dashboards.courseEnrollments
    const semesters = dashboards.uniqueSemesters


    const predefinedColors = [
        "rgb(255, 0, 0)",    // Red
        "rgb(0, 255, 0)",    // Green
        "rgb(0, 0, 255)",    // Blue
        "rgb(255, 255, 0)",  // Yellow
        "rgb(0, 255, 255)",  // Cyan
        "rgb(255, 0, 255)",  // Magenta
        "rgb(128, 0, 128)",  // Purple
        "rgb(255, 165, 0)"   // Orange
    ];

    let chartData = []
    if (semesters && courseData) {
        chartData = courseData.map(res => {
            const { enrollments } = res;

            return {
                ...res,
                data: semesters.map((semester) => {
                    const matchingEnrollment = enrollments.find(enrollment =>
                        enrollment.semester === semester.semester &&
                        enrollment.academic_year === semester.academic_year
                    );

                    return {
                        ...semester,
                        total: matchingEnrollment ? matchingEnrollment.total : 0
                    };
                })
            };
        });

    }

    console.log('Processed Data:', chartData); // Log the final processed data


    const data = {
        labels: semesters?.map(res => `${res.semester} ${res.academic_year}`),
        datasets: chartData?.map((res, i) => ({
            label: res?.course_name,
            data: res?.data?.map(res => res.total),
            fill: false,
            borderColor: predefinedColors[i],
            tension: 0.1,
        }))
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Student Enrollment Analytics',
            },
        },
    };

    return <>
        {
            semesters && courseData && <Line data={data} options={options} />
        }
    </>;
};

export default DashboardLineGraph;
