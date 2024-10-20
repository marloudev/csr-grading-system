import React from 'react'
import { useSelector } from 'react-redux';

export default function PrintGradeSection() {

    const { search } = useSelector((store) => store.instructors)
    let currentPath = window.location.pathname;

    let updatedPath = currentPath.replace(/\/students/, '/print');
console.log('search',search)
    return (
        <div className="App">

<a
  href={`${updatedPath}?academic_year=${search.academic_year}&section_id=${search.section_id}&semester=${search.semester}&subject_code=${search.subject_code}&year=${search.year}`}
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  target="_blank"
>
  Print Section
</a>
        </div>
    )
}
