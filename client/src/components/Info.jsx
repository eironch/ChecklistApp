import React from 'react';

function Info(props) {
    const info = props.studentInfo[0];

    return (
        <div className="px-8 py-4 flex max-h-max overflow-hidden">
            <div className="w-full flex rounded-2xl font-bold border-gray-400 overflow-hidden">
                <div className="mr-4 px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 rounded-2xl border text-gray-300 border-gray-400 overflow-visible">
                    <b>Student Info</b>
                </div>
                    <div className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 rounded-l-2xl border font-bold text-gray-300 border-gray-400 overflow-hidden">
                    Full Name
                </div>
                <div className="px-5 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 border-gray-400 overflow-hidden">
                    {info?.student_name || 'N/A'}
                </div>
                <div className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 font-bold border-gray-400 overflow-hidden">
                    Student Num
                </div>
                <div className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 border-gray-400 overflow-hidden">
                    {info?.student_num || 'N/A'}
                </div>
                <div className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 font-bold border-gray-400 overflow-hidden">
                    Address
                </div>
                <div className="px-4 py-2 w-2/12 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 border-gray-400 overflow-hidden">
                    {info?.student_address || 'N/A'}
                </div>
                <div className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 font-bold border-gray-400 overflow-hidden">
                    Admission Date
                </div>
                <div className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 border-gray-400 overflow-hidden">
                    {info?.admission_date.split("T")[0] || 'N/A'}
                </div>
                <div className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 font-bold border-gray-400 overflow-hidden">
                    Contact Num
                </div>
                <div className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 border-gray-400 overflow-hidden">
                    {info?.contact_num || 'N/A'}
                </div>
                <div className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 font-bold border-gray-400 overflow-hidden">
                    Adviser Name
                </div>
                <div className={`${info ? "w-1/12 " :  "w-3/12"} px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 rounded-r-2xl border text-gray-300 border-gray-400 overflow-hidden`}>
                    {info?.adviser_name || 'N/A'}
                </div>
            </div>
        </div>
    );
}

export default Info;
