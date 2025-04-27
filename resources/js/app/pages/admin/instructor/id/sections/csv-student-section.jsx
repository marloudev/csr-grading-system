import React, { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Button } from "@mui/material";
import moment from "moment";

export default function CsvStudentSection({ data }) {
    const [loading, setLoading] = useState(false);

    const handleDownload = () => {
        const studentRows = data?.student_grade?.map((res, index) => ({
            No: `${index + 1}.`,
            Name: `${res.user.fname} ${res.user.lname}`,
            Prelim: res.prelim,
            Midterm: res.midterm,
            Final: res.final,
            Grades: ((res.prelim + res.midterm + res.final) / 3).toFixed(0), // no decimals
            Remarks:
                ((res.prelim + res.midterm + res.final) / 3).toFixed(0) < 75
                    ? "Failed"
                    : "Passed",
        }));

        const headerRows = [
            ["Colegio de Santa Rita de San Carlos Inc."],
            ["Capstone 1"],
            [],
            ["Teacher:", "Erick Jason Batuto"],
            [],
            ["", "Name", "Prelim", "Midterm", "Final", "Grades", "Remarks"], // Add empty first column
            ...studentRows.map((row) => [
                row.No,
                row.Name,
                row.Prelim,
                row.Midterm,
                row.Final,
                row.Grades,
                row.Remarks,
            ]),
            // Add empty rows like in your image
            ["", "", "", "", "", "", ""],
            ["", "", "", "", "", "", ""],
            ["", "", "", "", "", "", ""],
        ];

        const worksheet = XLSX.utils.aoa_to_sheet(headerRows);

        worksheet["!cols"] = [
            { wch: 5 },   // No
            { wch: 20 },  // Name
            { wch: 10 },  // Prelim
            { wch: 10 },  // Midterm
            { wch: 10 },  // Final
            { wch: 10 },  // Grades
            { wch: 15 },  // Remarks
        ];

        // Center align the title rows
        const merge = [
            { s: { r: 0, c: 0 }, e: { r: 0, c: 6 } }, // merge across 7 columns
            { s: { r: 1, c: 0 }, e: { r: 1, c: 6 } }, // merge across 7 columns
        ];
        worksheet["!merges"] = merge;

        // Optionally apply some styles (basic only, xlsx lib is limited)
        worksheet["A1"].s = { alignment: { horizontal: "center" }, font: { bold: true, sz: 14 } };
        worksheet["A2"].s = { alignment: { horizontal: "center" }, font: { bold: true, sz: 12 } };
        worksheet["A4"].s = { font: { bold: true } };

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

        const excelBuffer = XLSX.write(workbook, {
            bookType: "xlsx",
            type: "array",
            cellStyles: true,
        });

        const file = new Blob([excelBuffer], { type: "application/octet-stream" });
        saveAs(file, `Student Record (${moment().format("LL")}).xlsx`);
    };

    return (
        <>
            <Button
                onClick={handleDownload}
                variant="contained"
                className="flex gap-2"
                disabled={loading}
            >
                <FileDownloadIcon />
                <div>{loading ? "Submitting..." : "EXPORT CSV"}</div>
            </Button>
        </>
    );
}
