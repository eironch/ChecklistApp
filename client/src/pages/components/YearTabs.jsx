import React from 'react';

function YearTabs(props) {
    const handleYearChange = (e) => {
        const yearChosen = e.target.name;
        props.setQuery({...props.query, year: `${props.query.year!==yearChosen? yearChosen : ''}`});
    };

    return (
        <div className="flex justify-center px-8 pb-4">
            <div className="grid w-full grid-cols-4">
                <button className={`${props.query.year === "1" ? "bg-gray-500" : "bg-gray-600 "} px-4 py-2 relative z-10 rounded-l-2xl border text-gray-300 border-gray-400 hover:bg-gray-400 hover:text-gray-100`} name="1" onClick={ handleYearChange }>
                    Freshman
                </button>
                <button className={`${props.query.year === "2" ? "bg-gray-500" : "bg-gray-600 "} px-4 py-2 relative z-10 border text-gray-300 border-gray-400 hover:bg-gray-400 hover:text-gray-100`} name="2" onClick={ handleYearChange }>
                    Sophomore
                </button>
                <button className={`${props.query.year === "3" ? "bg-gray-500" : "bg-gray-600 "} px-4 py-2 relative z-10 border text-gray-300 border-gray-400 hover:bg-gray-400 hover:text-gray-100`} name="3" onClick={ handleYearChange }>
                    Junior
                </button>
                <button className={`${props.query.year === "4" ? "bg-gray-500" : "bg-gray-600 "} px-4 py-2 relative z-10 rounded-r-2xl border text-gray-300 border-gray-400 hover:bg-gray-400 hover:text-gray-100`} name="4" onClick={ handleYearChange }>
                    Senior
                </button>
            </div>
        </div>
    );
}

export default YearTabs;