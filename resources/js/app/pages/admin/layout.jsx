import React, { useEffect } from "react";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { router as route } from "@inertiajs/react";
import { useDispatch, useSelector } from "react-redux";
import { setPathname } from "@/app/redux/app-slice";
import { AssignmentInd, Engineering, FolderShared, HistoryEdu, School, SupervisedUserCircle } from "@mui/icons-material";

const NAVIGATION = [
    {
        kind: "header",
        title: "Main items",
    },
    {
        segment: "dashboard",
        title: "Dashboard",
        icon: <DashboardIcon />,
    },
    {
        segment: "instructor",
        title: "Instructor",
        icon: <SupervisedUserCircle />,
    },
    {
        segment: "students",
        title: "Students",
        icon: <AssignmentInd />,
    },
    {
        segment: "department",
        title: "Department",
        icon: <FolderShared />,
    },
    
    {
        segment: "subjects",
        title: "Subjects",
        icon: <HistoryEdu />,
    },
    {
        segment: "courses",
        title: "Courses",
        icon: <School />,
    },
    // {
    //     segment: "grades",
    //     title: "Grades",
    //     icon: <BarChartIcon />,
    // },
    {
        kind: "divider",
    },
    {
        kind: "header",
        title: "Analytics",
    },
    // {
    //     segment: "reports",
    //     title: "Reports",
    //     icon: <BarChartIcon />,
    //     children: [
    //         {
    //             segment: "sales",
    //             title: "Sales",
    //             icon: <DescriptionIcon />,
    //         },
    //         {
    //             segment: "traffic",
    //             title: "Traffic",
    //             icon: <DescriptionIcon />,
    //         },
    //     ],
    // },
    {
        segment: "settings",
        title: "Settings",
        icon: <Engineering />,
    },
];

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: "data-toolpad-color-scheme",
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});
function AdminLayout({ children }, props) {
    const { pathname } = useSelector((state) => state.app);
    const { window } = props;
    const dispatch = useDispatch();

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => {
                route.visit(String("/administrator" + path));
                dispatch(setPathname(path));
            },
        };
    }, [pathname]);

    // Remove this const when copying and pasting into your project.
    const demoWindow = window !== undefined ? window() : undefined;

    return (
        // preview-start
        <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
            branding={{
                logo: <img src="/images/logo.png" />,
                title: "CSR Grading System",
            }}
        >
            <DashboardLayout>
                <div className="p-4">{children}</div>
            </DashboardLayout>
        </AppProvider>
        // preview-end
    );
}

AdminLayout.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default AdminLayout;
