import React, { useTransition, useState, useCallback, useRef, useEffect, useLayoutEffect } from 'react'
import axios from 'axios'
import { debounce } from 'lodash'

import NavBar from '../components/NavBar'
import Records from '../components/Records'

function Homepage() {
    const [records, setRecords] = useState([]);
    const [isOptionShown, setIsOptionShown] = useState(false);
    const [studentInfo, setStudentInfo] = useState([]);
    const [maxOffset, setMaxOffset] = useState(0);
    const [currentOffset, setCurrentOffset] = useState(0);
    const currentOffsetRef = useRef(currentOffset);
    const [minRecord, setMinRecord] = useState();
    const [maxRecord, setMaxRecord] = useState();
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
            console.log(err);
        }
    }

    const debouncedFetchAllRecords = useCallback(debounce(async (offset) => {
            try {
                // const res = await axios.get(`${process.env.REACT_APP_API_URL}/student_records`, { params: query })
                const res = await axios.get(`http://localhost:8800/student_records`, { params: {queryParams: query, offset} })
                
                setRecords(res.data.records);
                setMaxOffset(res.data.maxOffset);
    
                if (res.data.offset !== 0) {
                    setMinRecord((res.data.offset * 10) + 1);
                    setMaxRecord(res.data.records.length + (res.data.offset * 10));
                } else {
                    setCurrentOffset(res.data.offset);
                    setMinRecord(res.data.records.length && 1);
                    setMaxRecord(res.data.records.length);
                }
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
        setRecords(["Fetching"]);
        debouncedFetchAllRecords(0);
        setCurrentOffset(0);
    }, [query, debouncedFetchAllRecords]);

    useEffect(() => {
        currentOffsetRef.current = currentOffset;
    }, [currentOffset])

    useEffect(() => {
        return () => {
            debouncedFetchAllRecords.cancel();
        };
    }, [debouncedFetchAllRecords]);

    return  (
        <div className="max-h-full">
            <NavBar startTransition={ startTransition } query={ query } setQuery={ setQuery }  isOptionShown={ isOptionShown } setIsOptionShown={ setIsOptionShown } studentInfo={ studentInfo }/>
            <Records records={ records } isOptionShown={ isOptionShown } setRecords={ setRecords } query={ query } setQuery={ setQuery } maxOffset={ maxOffset } currentOffset={ currentOffset } setCurrentOffset={ setCurrentOffset } minRecord={ minRecord } maxRecord={ maxRecord } setMinRecord={ setMinRecord } setMaxRecord={ setMaxRecord } debouncedFetchAllRecords={ debouncedFetchAllRecords }/>
        </div>
    );
};

export default Homepage;