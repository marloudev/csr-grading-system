import store from '@/app/pages/store/store';
import React from 'react'
import { useEffect } from 'react';
import { get_instructor_thunk, search_students_thunk } from '../redux/instructor-thunk';
import { useSelector } from 'react-redux';

export default function print() {
    const { students } = useSelector((store) => store.instructors);
    const { search } = useSelector((store) => store.instructors)

    useEffect(() => {
        store.dispatch(get_instructor_thunk())
        store.dispatch(search_students_thunk())
    }, [])
    useEffect(() => {
        if (students.length !== 0) {
            window.print();
        }
    }, [students.length])
    return (
        <div id="printSection">
            <div className="overflow-hidden">
                <table
                    className="min-w-full text-left text-sm font-light text-surface ">
                    <thead
                        className="border-b border-black font-medium text-black">
                        <tr>
                            <th scope="col" className="px-6 py-4">Fullname</th>
                            <th scope="col" className="px-6 py-4">First</th>
                            <th scope="col" className="px-6 py-4">Last</th>
                            <th scope="col" className="px-6 py-4">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((res, i) => {
                            console.log('res', res)
                            return (
                                <tr className="border-2 border-black text-black">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium">{res.user.fname} {res.user.lname}</td>
                                    <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                    <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                    <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
