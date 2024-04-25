import React, { useTransition, useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './components/NavBar'
import Records from './components/Records'

const Homepage = () => {
    const [records, setRecords] = useState([]);
    const [isOptionShown, setIsOptionShown] = useState(false);
    const [studentInfo, setStudentInfo] = useState([]);
    const [isPending, startTransition] = useTransition();
    const [query, setQuery] = useState({
        searchQuery: '',
        year: '',
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


    const fetchAllRecords = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/student_records`, { params: query })
            // const res = await axios.get(`http://localhost:8800/student_records`, { params: query })
            setRecords(res.data);
        } catch(err) {
            console.log(err);
        }
    }

    const fetchStudentInfo = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/student_info`);
            // const res = await axios.get(`http://localhost:8800/student_info`);
            setStudentInfo(res.data);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchStudentInfo();
    }, []);

    useEffect(() => {
        fetchAllRecords();
    }, [query]);

    return  (
        <div className="max-h-full">
            <NavBar startTransition={ startTransition } query={ query } setQuery={ setQuery }  isOptionShown={ isOptionShown } setIsOptionShown={ setIsOptionShown } studentInfo={ studentInfo }/>
            <Records isPending={ isPending } records={ records } isOptionShown={ isOptionShown }/>
        </div>
    )
    ;
}

export default Homepage