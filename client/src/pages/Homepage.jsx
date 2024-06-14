import React, { useTransition, useState, useCallback, useEffect, useLayoutEffect } from 'react'
import axios from 'axios'
import { debounce } from 'lodash'

import NavBar from '../components/NavBar'
import Records from '../components/Records'

function Homepage() {
    const [records, setRecords] = useState([]);
    const [isOptionShown, setIsOptionShown] = useState(false);
    const [studentInfo, setStudentInfo] = useState([]);
    const [isPending, startTransition] = useTransition();
    const [query, setQuery] = useState({
        searchQuery: '',
        year: '',
        offset: 0,
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

    async function fetchStudentInfo() {
        try {
            // const res = await axios.get(`${process.env.REACT_APP_API_URL}/student_info`);
            const res = await axios.get(`http://localhost:8800/student_info`);
            setStudentInfo(res.data);
        } catch (err) {
            console.log(err)
        }
    }

    const debouncedFetchAllRecords = useCallback(debounce(async () => {
            try {
                // const res = await axios.get(`${process.env.REACT_APP_API_URL}/student_records`, { params: query })
                const res = await axios.get(`http://localhost:8800/student_records`, { params: query })
                setRecords(res.data);
            } catch(err) {
                console.log(err);
            }
        }, 300), 
        [query]
    )

    useLayoutEffect(() => {
        fetchStudentInfo();
        debouncedFetchAllRecords.flush();
    }, []);

    useEffect(() => {
        setRecords(["Fetching"])
        debouncedFetchAllRecords();
    }, [query, debouncedFetchAllRecords]);

    useEffect(() => {
        return () => {
            debouncedFetchAllRecords.cancel();
        };
    }, [debouncedFetchAllRecords]);

    return  (
        <div className="max-h-full">
            <NavBar startTransition={ startTransition } query={ query } setQuery={ setQuery }  isOptionShown={ isOptionShown } setIsOptionShown={ setIsOptionShown } studentInfo={ studentInfo }/>
            <Records records={ records } isOptionShown={ isOptionShown } setRecords={ setRecords } query={ query } setQuery={ setQuery } />
        </div>
    );
};

export default Homepage;