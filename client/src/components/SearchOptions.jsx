import React from 'react';

function SearchOptions(props) {
    function updateQuery(e) {
        const {name, checked} = e.target;
        props.startTransition(() => {
            props.setQuery({...props.query, [name]: checked})
        });
    }

    function clearSearchOptions() {      
        props.setQuery({
            ...props.query,
            courseCode: false,
            courseTitle: false,
            creditUnitLec: false,
            creditUnitLab: false,
            contactHrsLec: false,
            contactHrsLab: false,
            yearTaken: false,
            prerequisite: false,
            finalGrade: false,
            instructorName: false
        });
    }

    return (
        <>
            {props.isOptionShown && (
            <div className="flex justify-center text-gray-400 pb-4 px-8">
                <div className="w-full grid grid-cols-11">
                    <label className={`${props.query.courseCode ? "bg-gray-500 text-gray-300" : "bg-gray-600 "} flex justify-center px-4 py-2 bg relative z-10 rounded-l-2xl border border-gray-400 hover:bg-gray-400 hover:text-white`}>
                        <input className="mx-2 hidden" type="checkbox" name="courseCode" onChange={ updateQuery } checked={ props.query.courseCode }/>
                        Course Code
                    </label>
                    <label className={`${props.query.courseTitle ? "bg-gray-500 text-gray-300" : "bg-gray-600 "} flex justify-center px-4 py-2 bg relative z-10 border border-gray-400 hover:bg-gray-400 hover:text-white`}>
                        <input className="mx-2 hidden" type="checkbox" name="courseTitle" onChange={ updateQuery } checked={ props.query.courseTitle }/>
                        Course Title
                    </label>
                    <label className={`${props.query.creditUnitLec ? "bg-gray-500 text-gray-300" : "bg-gray-600 "} flex justify-center px-4 py-2 bg relative z-10 border border-gray-400 hover:bg-gray-400 hover:text-white`}>
                        <input className="mx-2 hidden" type="checkbox" name="creditUnitLec" onChange={ updateQuery } checked={ props.query.creditUnitLec }/>
                        Credit Unit (LEC)
                    </label>
                    <label className={`${props.query.creditUnitLab ? "bg-gray-500 text-gray-300" : "bg-gray-600 "} flex justify-center px-4 py-2 bg relative z-10 border border-gray-400 hover:bg-gray-400 hover:text-white`}>
                        <input className="mx-2 hidden" type="checkbox" name="creditUnitLab" onChange={ updateQuery } checked={ props.query.creditUnitLab }/>
                        Credit Unit (LAB)
                    </label>
                    <label className={`${props.query.contactHrsLec ? "bg-gray-500 text-gray-300" : "bg-gray-600 "} flex justify-center px-4 py-2 bg relative z-10 border border-gray-400 hover:bg-gray-400 hover:text-white`}>
                        <input className="mx-2 hidden" type="checkbox" name="contactHrsLec" onChange={ updateQuery } checked={ props.query.contactHrsLec }/>
                        Contact Hrs (LEC)
                    </label>
                    <label className={`${props.query.contactHrsLab ? "bg-gray-500 text-gray-300" : "bg-gray-600 "} flex justify-center px-4 py-2 bg relative z-10 border border-gray-400 hover:bg-gray-400 hover:text-white`}>
                        <input className="mx-2 hidden" type="checkbox" name="contactHrsLab" onChange={ updateQuery } checked={ props.query.contactHrsLab }/>
                        Contact Hrs (LAB)
                    </label>
                    <label className={`${props.query.prerequisite ? "bg-gray-500 text-gray-300" : "bg-gray-600 "} flex justify-center px-4 py-2 bg relative z-10 border border-gray-400 hover:bg-gray-400 hover:text-white`}>
                        <input className="mx-2 hidden" type="checkbox" name="prerequisite" onChange={ updateQuery } checked={ props.query.prerequisite }/>
                        Pre-requisite
                    </label>
                    <label className={`${props.query.yearTaken ? "bg-gray-500 text-gray-300" : "bg-gray-600 "} flex justify-center px-4 py-2 bg relative z-10 border border-gray-400 hover:bg-gray-400 hover:text-white`}>
                        <input className="mx-2 hidden" type="checkbox" name="yearTaken" onChange={ updateQuery } checked={ props.query.yearTaken }/>
                        Year Taken
                    </label>
                    <label className={`${props.query.finalGrade ? "bg-gray-500 text-gray-300" : "bg-gray-600 "} flex justify-center px-4 py-2 bg relative z-10 border border-gray-400 hover:bg-gray-400 hover:text-white`}>
                        <input className="mx-2 hidden" type="checkbox" name="finalGrade" onChange={ updateQuery } checked={ props.query.finalGrade }/>
                        Final Grade
                    </label>
                    <label className={`${props.query.instructorName ? "bg-gray-500 text-gray-300" : "bg-gray-600 "} flex justify-center px-4 py-2 bg relative z-10 border border-gray-400 hover:bg-gray-400 hover:text-white`}>
                        <input className="mx-2 hidden" type="checkbox" name="instructorName" onChange={ updateQuery } checked={ props.query.instructorName }/>
                        Instructor Name
                    </label>
                    <button className="flex justify-center px-4 py-2 bg relative z-10 rounded-r-2xl border bg-gray-500 border-gray-400 hover:bg-gray-400 hover:text-white text-gray-300" onClick={ () => clearSearchOptions() }>
                        Clear
                    </button>
                </div>
            </div>)}
        </>
    );
}

export default SearchOptions;