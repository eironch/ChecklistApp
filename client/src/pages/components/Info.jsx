import React from 'react';

function Info(props) {
    return (
        <div className="px-8 py-4 overflow-hidden flex h-30">
            <div className="bg-gray-600 w-full flex rounded-2xl border-gray-400 overflow-hidden">
                <label className="mr-4 px-4 py-2 bg-gray-500 relative z-10 rounded-2xl border text-gray-200 border-gray-400">
                    <b>Student Info</b>
                </label>
                <label className="px-4 py-2 bg-gray-500 relative z-10 rounded-l-2xl border text-gray-300 border-gray-400">
                    Full Name
                </label>
                <label className="px-4 py-2 bg-gray-600 relative z-10 border text-gray-300 border-gray-400">
                    Cheiron S. Candelaria
                </label>
                <label className="px-4 py-2 bg-gray-500 relative z-10 border text-gray-300 border-gray-400">
                    Student Num
                </label>
                <label className="w-30 px-4 py-2 bg-gray-600 relative z-10 border text-gray-300 border-gray-400">
                    202211703
                </label>
                <label className="px-4 py-2 bg-gray-500 relative z-10 border text-gray-300 border-gray-400">
                    Address
                </label>
                <label className="px-4 py-2 bg-gray-600 relative z-10 border text-gray-300 border-gray-400">
                    T.S. Cruz Almanza Dos, Las Piñas City
                </label>
                <label className="px-4 py-2 bg-gray-500 relative z-10 border text-gray-300 border-gray-400">
                    Admission Date
                </label>
                <label className="px-4 py-2 bg-gray-600 relative z-10 border text-gray-300 border-gray-400">
                    2022-08-22
                </label>
                <label className="px-4 py-2 bg-gray-500 relative z-10 border text-gray-300 border-gray-400">
                    Contact Num
                </label>
                <label className="px-4 py-2 bg-gray-600 relative z-10 border text-gray-300 border-gray-400">
                    09319819980
                </label>
                <label className="px-4 py-2 bg-gray-500 relative z-10 border text-gray-300 border-gray-400">
                    Adviser Name
                </label>
                <label className="px-4 py-2 bg-gray-600 relative z-10 rounded-r-2xl border text-gray-300 border-gray-400" style={{width: "15svh"}}>

                </label>
            </div>
        </div>
    );
}

export default Info;