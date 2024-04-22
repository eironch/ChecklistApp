import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'
import NavBar from './components/NavBar'
import Records from './components/Records'

import '../index.css';
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

    const handleSearch = () => {
        fetchAllRecords();
    };

    const fetchAllRecords = async () => {
        try {
            const res = await axios.get('http://localhost:8800/student_records', {params: query})
            // console.log(query)
            // console.log(res.data)
            setRecords(res.data);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchAllRecords();
    }, [query]);

    return  <div className="max-h-full overflow-hidden">
        <NavBar onSearch={ handleSearch } query={ query } setQuery={ setQuery }  isOptionShown={ isOptionShown } setIsOptionShown={ setIsOptionShown }/>
        <Records records={ records } isOptionShown={ isOptionShown }/>
    </div>
    ;
}

export default Homepage