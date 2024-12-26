import React from 'react';

function Records(props) {
    function changeOffset(index) {
        if (index > props.maxOffset) {
            return;
        }

        props.debouncedFetchAllRecords(index);
        props.setRecords(["Fetching"]);
        props.setCurrentOffset(index);
    }

    return  (
        <div className="max-h-svh px-8 overflow-hidden">
            <div className="px-3 rounded-x-2xl rounded-t-2xl border border-b-2 border-gray-400 text-gray-300 bg-gray-500 overflow-hidden">
                <table className="table table-fixed w-full overflow-hidden">
                    <thead>
                        <tr>
                            <th className="p-4 text-center" scope="col">Course Code</th>
                            <th className="p-4 text-center" scope="col">Course Title</th>
                            <th className="p-4 text-center" scope="col">Credit Unit<br/>(LEC)</th>
                            <th className="p-4 text-center" scope="col">Credit Unit<br/>(LAB)</th>
                            <th className="p-4 text-center" scope="col">Contact Hrs<br/>(LEC)</th>
                            <th className="p-4 text-center" scope="col">Contact Hrs<br/>(LAB)</th>
                            <th className="p-4 text-center" scope="col">Pre-requisite</th>
                            <th className="p-4 text-center" scope="col">Year & Sem Taken</th>
                            <th className="p-4 text-center" scope="col">Final Grade</th>
                            <th className="p-4 text-center" scope="col">Instructor Name</th>
                            <th className="p-4 text-center" scope="col">Year & Sem</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="pl-3 overflow-y-scroll border border-t-0 border-gray-400 rounded-x-2xl max-w-full max-h-screen scrollable-div bg-gray-500 overflow-hidden" style={{height: `${props.isOptionShown ? "57.1svh" : "63.10svh" }`}}>
                {
                    props.records &&
                    props.records[0] !== "Fetching" ?
                    props.records.length === 0 ?
                    <p className="flex w-full h-full justify-center items-center text-lg font-bold text-center text-gray-300">
                        No results found.<br/>Please try adjusting your search criteria.
                    </p>
                    :
                    <table className="table table-fixed w-full rounded-x-2xl text-gray-300 bg-gray-500 overflow-hidden">
                        <tbody>
                            {
                                props.records.length > 0 &&
                                props.records.map((record, index) => (
                                    <tr className="hover:bg-gray-400 hover:text-gray-100" key={index}>
                                        <td className={`${(index + 1) !== props.records.length && "border-b-2"} p-4 text-center border-gray-400`}>{record.course_code}</td> 
                                        <td className={`${(index + 1) !== props.records.length && "border-b-2"} p-4 text-center border-gray-400`}>{record.course_title}</td>
                                        <td className={`${(index + 1) !== props.records.length && "border-b-2"} p-4 text-center border-gray-400`}>{record.credit_unit_lec}</td>
                                        <td className={`${(index + 1) !== props.records.length && "border-b-2"} p-4 text-center border-gray-400`}>{record.credit_unit_lab}</td>
                                        <td className={`${(index + 1) !== props.records.length && "border-b-2"} p-4 text-center border-gray-400`}>{record.contact_hrs_lec}</td>
                                        <td className={`${(index + 1) !== props.records.length && "border-b-2"} p-4 text-center border-gray-400`}>{record.contact_hrs_lab}</td>
                                        <td className={`${(index + 1) !== props.records.length && "border-b-2"} p-4 text-center border-gray-400`}>{record.prerequisite}</td>
                                        <td className={`${(index + 1) !== props.records.length && "border-b-2"} p-4 text-center border-gray-400`}>{record.year_taken && (<>Year {record.year_taken} Sem {record.sem_taken}</>)}</td>
                                        <td className={`${(index + 1) !== props.records.length && "border-b-2"} p-4 text-center border-gray-400`}>
                                            {/* {record.final_grade} */}
                                        </td>
                                        <td className={`${(index + 1) !== props.records.length && "border-b-2"} p-4 text-center border-gray-400`}>{record.instructor_name}</td>
                                        <td className={`${(index + 1) !== props.records.length && "border-b-2"} p-4 text-center border-gray-400`}>
                                            {
                                                record.course_year === 5 ?
                                                <>Year 3 Sem 3</>
                                                :
                                                <>Year {record.course_year} Sem {record.course_sem}</>
                                            }
                                        </td>  
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    :
                    <p className="flex w-full h-full justify-center items-center text-lg font-bold text-gray-300">
                        Fetching records, please wait...
                    </p> 
                }
            </div>
            <div className="px-3 rounded-b-2xl border border-b-2 border-gray-400 text-gray-300 bg-gray-500 overflow-hidden">
                <div className="grid grid-cols-3">
                    <div></div>
                    <div className="flex p-3 justify-center">
                        <div className="block">
                        <button className={`${props.currentOffset === 0 && "invisible"} inline-block rounded-2xl w-10 h-10 mx-1 text-lg font-semibold border border-gray-400 transform rotate-90 hover:bg-gray-400 hover:text-gray-100`} onClick={ () => changeOffset(props.currentOffset - 1) }>
                            ▼
                        </button> 
                            {
                                Array.from({length: props.maxOffset}, (_, index) => 
                                    <button className={`${props.currentOffset === index && "bg-gray-400"} inline-block rounded-2xl w-10 h-10 mx-1 text-lg font-semibold border border-gray-400 hover:bg-gray-400 hover:text-gray-100`} key={index} onClick={() => changeOffset(index)}>
                                        {index + 1}
                                    </button> 
                                )
                            }
                        </div>
                        <button className={`${(props.currentOffset === props.maxOffset - 1 || props.records.length === 0 || (props.records[0] === "Fetching" && props.maxOffset === 0)) && "invisible"} inline-block rounded-2xl w-10 h-10 mx-1 text-lg font-semibold border border-gray-400 transform -rotate-90 hover:bg-gray-400 hover:text-gray-100`} onClick={ () => changeOffset(props.currentOffset + 1) }>
                            ▼
                        </button> 
                    </div>
                    {
                        (props.maxOffset !== 0 && props.minRecord !== 0 && props.maxRecord !== 0) &&
                        <div className="flex p-3 justify-end items-center text-md font-semibold">
                            Showing records {props.minRecord}-{props.maxRecord}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Records
