import React, { useState, useRef, useCallback, useEffect } from 'react';
import axios from 'axios';
import { debounce } from 'lodash'

const Records = (props) => {
    const containerRef = useRef(null)
    const isInitialRender = useRef(0)
    const [offset, setOffset] = useState(0)
    const [loadNextRecords, setLoadNextRecords] = useState("No")
    const loadNextRecordsRef = useRef(loadNextRecords)

    async function fetchAllRecords() {
        try {
            console.log({...props.query, offset})
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/student_records`, { params: {...props.query, offset} })
            // const res = await axios.get(`http://localhost:8800/student_records`, { params: {...props.query, offset} })
            console.log(res)
            if (res.data.length === 0) {
                return setLoadNextRecords("Never");
            }
            const newRecords = [...props.records, ...res.data];
            setLoadNextRecords("No");
            props.setRecords(newRecords);
        } catch(err) {
            console.log(err);
        }
    }

    const debouncedHandleScroll = useCallback(debounce(() => {
            if (loadNextRecordsRef.current === "Yes" || loadNextRecordsRef.current === "Never") {
                return;
            }

            const container = containerRef.current

            if (container) {
                const scrollTop = container.scrollTop;
                const scrollHeight = container.scrollHeight;
                const clientHeight = container.clientHeight;
                const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
                
                if (scrollPercentage >= 75) {
                    setLoadNextRecords("Yes");
                    setOffset(prevOffSet => prevOffSet + 1)
                }
            }
        }, 150),[]
    )

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', debouncedHandleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', debouncedHandleScroll);
            }
        }
    }, []);

    useEffect(() => {
        loadNextRecordsRef.current = loadNextRecords;
    }, [loadNextRecords])

    useEffect(() => {
        if (isInitialRender.current < 2) {
            isInitialRender.current += 1;
        } else {
            fetchAllRecords();
        }
    }, [offset]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = 0;
        }

        setLoadNextRecords("No")
        setOffset(0)
    }, [props.query])

    return  (
        <div className="relative max-h-svh px-8 overflow-hidden">
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
            <div className="pl-3 overflow-y-scroll border border-t-0 border-gray-400 rounded-x-2xl rounded-b-2xl max-w-full max-h-screen scrollable-div bg-gray-500 overflow-hidden" ref={ containerRef } style={{height: `${props.isOptionShown ? "64svh" : "70svh"}`}}>
                {
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
                                    <tr className="hover:bg-gray-400 hover:text-white" key={index}>
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
                                        <td className="p-4 text-center border-b-2 border-gray-400">
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
            {
                loadNextRecords === "Yes" &&
                <div className="absolute inset-0 w-full flex justify-center items-center text-gray-300 text-lg font-bold pointer-events-none">
                    <div className="flex w-56 h-28 justify-center items-center bg-gray-400 bg-opacity-60 rounded-2xl">
                        Fetching records...
                    </div>
                </div>
            }
        </div>
    );
}

export default Records