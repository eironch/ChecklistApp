import React from 'react';

function Info(props) {
    return (
        <div className="px-8 py-4 flex max-h-max overflow-hidden">
            <div className="w-full flex rounded-2xl border-gray-400 overflow-hidden">
                <label className="mr-4 px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 rounded-2xl border text-gray-200 border-gray-400 overflow-visible">
                    <b>Student Info</b>
                </label>
                <label className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 rounded-l-2xl border font-bold text-gray-300 border-gray-400 overflow-hidden">
                    Full Name
                </label>
                <label className="px-5 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 border-gray-400 overflow-hidden">
                    {props.studentInfo.student_name}
                </label>
                <label className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 font-bold border-gray-400 overflow-hidden">
                    Student Num
                </label>
                <label className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 border-gray-400 overflow-hidden">
                    {props.studentInfo.student_num}
                </label>
                <label className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 font-bold border-gray-400 overflow-hidden">
                    Address
                </label>
                <label className="px-4 py-2 w-2/12 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 border-gray-400 overflow-hidden">
                    {props.studentInfo.student_address}
                </label>
                <label className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 font-bold border-gray-400 overflow-hidden">
                    Admission Date
                </label>
                <label className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 border-gray-400 overflow-hidden">
                    {props.studentInfo.admission_date}
                </label>
                <label className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 font-bold border-gray-400 overflow-hidden">
                    Contact Num
                </label>
                <label className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 border-gray-400 overflow-hidden">
                    {props.studentInfo.contact_num}
                </label>
                <label className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 font-bold border-gray-400 overflow-hidden">
                    Adviser Name
                </label>
                <label className="px-4 py-2 w-1/12 text-nowrap text-center bg-gray-500 relative z-10 rounded-r-2xl border text-gray-300 border-gray-400 overflow-hidden">
                    {props.studentInfo.adviser_name}
                </label>
            </div>
        </div>
    );
}

export default Info;