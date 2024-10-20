
import appSlice from '@/app/redux/app-slice';
import { configureStore } from '@reduxjs/toolkit';
import courseSlice from '../admin/courses/redux/course-slice';
import dashboardSlice from '../admin/dashboard/redux/dashboard-slice';
import departmentSlice from '../admin/department/redux/department-slice';
import gradeSlice from '../admin/grades/redux/grade-slice';
import instructorSlice from '../admin/instructor/redux/instructor-slice';
import settingsSlice from '../admin/settings/redux/settings-slice';
import studentSlice from '../admin/students/redux/student-slice';
import subjectSlice from '../admin/subjects/redux/subject-slice';
import sectionsSlice from '../admin/sections/redux/sections-slice';
import enrollmentSlice from '../admin/enrollment/redux/enrollment-slice';
const store = configureStore({
    reducer: {
        app: appSlice,
        courses: courseSlice,
        dashboards: dashboardSlice,
        department: departmentSlice,
        grades: gradeSlice,
        instructors: instructorSlice,
        settings: settingsSlice,
        students: studentSlice,
        subjects:subjectSlice,
        sections:sectionsSlice,
        enrollments:enrollmentSlice
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
