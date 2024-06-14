import React, { useState, useRef, useLayoutEffect } from 'react';

function SearchBar(props) {
    const [searchValue, setSearchValue] = useState("")
    const isInitialRender = useRef(true)

    function showOptions() {
        props.setIsOptionShown(!props.isOptionShown);
    }

    function handleKeyDown(event) {
        if (event.key === 'Backspace') {
            const searchQuery = "";
            props.startTransition(() => {
                props.setQuery({...props.query, searchQuery})
            });
        }
    }

    function handleInputChange(e) {
        setSearchValue(e.target.value);
    }

    function saveToQuery() {
        props.startTransition(() => {
            props.setQuery({...props.query, searchQuery: searchValue})
        });
    }

    function clearSearch() {
        setSearchValue('');
    }

    useLayoutEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false;
        } else {
            saveToQuery();
        }
    }, [searchValue])

    return (
        <div className="overflow-auto flex justify-center px-8 pb-4">
            <div className="relative bg-gray-600 w-full flex rounded-2xl border-gray-400">
                {
                    searchValue &&
                    <div className="absolute inset-0 mr-14 flex justify-end items-center pointer-events-none">
                        <button className="text-gray-400 p-1 px-2.5 hover:text-gray-100 hover:bg-gray-400 rounded-3xl pointer-events-auto" onClick={ () => clearSearch() }>𐌗</button>
                    </div>
                }
                <input className="block w-full pl-4 rounded-l-2xl bg-transparent text-gray-300 placeholder-gray-400 border-l border-y border-gray-400 focus:ring-1 focus:outline-none focus:ring-inset focus:ring-gray-300" 
                    type="text" placeholder="Search" value={ searchValue } 
                    onKeyDown={ handleKeyDown } onChange={ (e) => {handleInputChange(e)} } 
                />
                <button className={`${props.isOptionShown ? "bg-gray-500" : "bg-gray-600"} px-4 py-2 relative z-10 rounded-r-2xl border text-gray-300 border-gray-400 hover:bg-gray-400 hover:text-white`} onClick={ showOptions }>
                    {props.isOptionShown? "▼":"▲"}
                </button>
            </div>
        </div>
    );
}

export default SearchBar;