import React from 'react';

const Records = (props) => {
    return  (
        <div className="relative max-h-svh px-8 overflow-hidden">
            <div className="px-3 rounded-x-2xl rounded-t-2xl border-b-2 border-gray-400 text-gray-300 bg-gray-500 overflow-hidden">
                <table className="table table-fixed w-full overflow-hidden">
                    <thead>
                        <tr>
                            <th className="p-4 text-center" scope="col">Course Code</th>
                            <th className="p-4 text-center" scope="col">Course Title</th>
                            <th className="p-4 text-center" scope="col">Credit Unit (LEC)</th>
                            <th className="p-4 text-center" scope="col">Credit Unit (LAB)</th>
                            <th className="p-4 text-center" scope="col">Contact Hrs (LEC)</th>
                            <th className="p-4 text-center" scope="col">Contact Hrs (LAB)</th>
                            <th className="p-4 text-center" scope="col">Pre-requisite</th>
                            <th className="p-4 text-center" scope="col">Year & Sem Taken</th>
                            <th className="p-4 text-center" scope="col">Final Grade</th>
                            <th className="p-4 text-center" scope="col">Instructor Name</th>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className="pl-3 overflow-y-scroll rounded-x-2xl rounded-b-2xl max-w-full max-h-screen scrollable-div bg-gray-500 overflow-hidden" style={{maxHeight: `${props.isOptionShown ? "66.53svh" : "72.5svh"}`}}>
                <table className="table table-fixed w-full rounded-x-2xl text-gray-300 bg-gray-500 overflow-hidden">
                    <tbody>
                        {
                            props.records.length === 0 ? 
                            <tr>
                                <td className="p-4 text-center text-lg font-bold">No results found. Please try adjusting your search criteria.</td>
                            </tr>
                            :
                            props.records.length > 0 &&
                            props.records.map(record => (
                                <tr className="rounded-2xl hover:bg-gray-400 hover:text-white" key={record.course_code}>
                                    <td className="p-4 text-center border-b-2 border-gray-400">{record.course_code}</td> 
                                    <td className="p-4 text-center border-b-2 border-gray-400">{record.course_title}</td>
                                    <td className="p-4 text-center border-b-2 border-gray-400">{record.credit_unit_lec}</td>
                                    <td className="p-4 text-center border-b-2 border-gray-400">{record.credit_unit_lab}</td>
                                    <td className="p-4 text-center border-b-2 border-gray-400">{record.contact_hrs_lec}</td>
                                    <td className="p-4 text-center border-b-2 border-gray-400">{record.contact_hrs_lab}</td>
                                    <td className="p-4 text-center border-b-2 border-gray-400">{record.prerequisite}</td>      
                                    <td className="p-4 text-center border-b-2 border-gray-400">{record.year_taken && (<>Year {record.year_taken} Sem {record.sem_taken}</>)}</td>
                                    <td className="p-4 text-center border-b-2 border-gray-400">{record.final_grade}</td>
                                    <td className="p-4 text-center border-b-2 border-gray-400">{record.instructor_name}</td>  
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Records