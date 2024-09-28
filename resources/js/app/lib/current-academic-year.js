import moment from "moment";

// Generate a list of academic years from 2020 onwards using Moment.js
export default function current_academic_year() {
    const currentDate = moment();

    // Check if we are before September 1 of the current year
    let academicYear;
    if (currentDate.month() < 8) { // Before September (month index 8)
        academicYear = `${currentDate.year() - 1}-${currentDate.year()}`;
    } else { // From September onwards
        academicYear = `${currentDate.year()}-${currentDate.year() + 1}`;
    }
    return academicYear;
}