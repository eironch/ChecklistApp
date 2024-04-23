import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'
import NavBar from './components/NavBar'
import Records from './components/Records'

const Homepage = () => {
    const [records, setRecords] = useState([]);
    const [isOptionShown, setIsOptionShown] = useState(false);
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
            const res = await axios.get('http://localhost:8800/student_records', { params: query })
            const data = await res.data
            setRecords(data);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            fetchAllRecords();
        }, 0);

        return () => clearTimeout(delayDebounce); 
    }, [query]);

    return  <div className="max-h-full">
        <NavBar query={ query } setQuery={ setQuery }  isOptionShown={ isOptionShown } setIsOptionShown={ setIsOptionShown }/>
        <Records records={ records } isOptionShown={ isOptionShown }/>
    </div>
    ;
}

export default Homepage