import React from 'react';
import Info from './Info';
import SearchBar from './SearchBar'
import SearchOptions from './SearchOptions'
import YearTabs from './YearTabs'

function NavBar(props) {
    return (
        <div className="max-h-full">
            <Info studentInfo={ props.studentInfo }/>
            <YearTabs startTransition={ props.startTransition } query={ props.query } setQuery={ props.setQuery }/>
            <SearchBar startTransition={ props.startTransition } query={ props.query } setQuery={ props.setQuery }  isOptionShown={ props.isOptionShown } setIsOptionShown={ props.setIsOptionShown }/>
            <SearchOptions startTransition={ props.startTransition } query={ props.query } setQuery={ props.setQuery } isOptionShown={ props.isOptionShown } setIsOptionShown={ props.setIsOptionShown }/>
        </div>
    );
}

export default NavBar;