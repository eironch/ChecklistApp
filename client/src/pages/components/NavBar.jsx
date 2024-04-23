import React from 'react';
import Info from './Info';
import SearchBar from './SearchBar'
import SearchOptions from './SearchOptions'
import YearTabs from './YearTabs'

function NavBar(props) {
    return (
        <div className="max-h-full">
            <Info/>
            <YearTabs query={ props.query } setQuery={ props.setQuery }/>
            <SearchBar query={ props.query } setQuery={ props.setQuery }  isOptionShown={ props.isOptionShown } setIsOptionShown={ props.setIsOptionShown }/>
            <SearchOptions query={ props.query } setQuery={ props.setQuery } isOptionShown={ props.isOptionShown } setIsOptionShown={ props.setIsOptionShown }/>
        </div>
    );
}

export default NavBar;