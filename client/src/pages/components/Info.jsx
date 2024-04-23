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
                    Cheiron S. Candelaria
                </label>
                <label className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 font-bold border-gray-400 overflow-hidden">
                    Student Num
                </label>
                <label className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 border-gray-400 overflow-hidden">
                    202211703
                </label>
                <label className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 font-bold border-gray-400 overflow-hidden">
                    Address
                </label>
                <label className="px-4 py-2 w-2/12 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 border-gray-400 overflow-hidden">
                    T.S. Cruz Almanza Dos, Las Piñas City
                </label>
                <label className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 font-bold border-gray-400 overflow-hidden">
                    Admission Date
                </label>
                <label className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 border-gray-400 overflow-hidden">
                    2022-08-22
                </label>
                <label className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 font-bold border-gray-400 overflow-hidden">
                    Contact Num
                </label>
                <label className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 border-gray-400 overflow-hidden">
                    09319819980
                </label>
                <label className="px-4 py-2 text-nowrap text-center bg-gray-500 relative z-10 border text-gray-300 font-bold border-gray-400 overflow-hidden">
                    Adviser Name
                </label>
                <label className="px-4 py-2 w-1/12 text-nowrap text-center bg-gray-500 relative z-10 rounded-r-2xl border text-gray-300 border-gray-400 overflow-hidden">

                </label>
            </div>
        </div>
    );
}

export default Info;