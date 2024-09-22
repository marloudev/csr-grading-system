import moment from "moment";

const startYear = 2020;

// Generate a list of academic years from 2020 onwards using Moment.js
export default function academic_year() {
    const currentYear = moment().year();
    let years = [];
    for (let i = startYear; i <= currentYear; i++) {
        years.push(`${i}-${i + 1}`);
    }
    return years;
}