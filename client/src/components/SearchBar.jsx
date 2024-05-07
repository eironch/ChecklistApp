import React from 'react';

function SearchBar(props) {
    function showOptions() {
        props.setIsOptionShown(!props.isOptionShown);
    };

    function handleKeyDown(event) {
        if (event.key === 'Backspace') {
            const searchQuery = "";
            props.startTransition(() => {
                props.setQuery({...props.query, searchQuery})
            });
        }
    };

    function handleInputChange(e) {
        const searchQuery = e.target.value;
        props.startTransition(() => {
            props.setQuery({...props.query, searchQuery})
        });
    };

    return (
        <div className="overflow-auto flex justify-center px-8 pb-4">
            <div className="bg-gray-600 w-full flex rounded-2xl border-gray-400">
                <input className="block w-full pl-4 rounded-l-2xl bg-transparent text-gray-300 placeholder-gray-300 border-l border-y border-gray-400 focus:ring-1 focus:outline-none focus:ring-inset focus:ring-gray-300" type="text" placeholder="Search" onKeyDown={ handleKeyDown } onChange={ handleInputChange }/>
                <button className={`${props.isOptionShown ? "bg-gray-500" : "bg-gray-600"} px-4 py-2 relative z-10 rounded-r-2xl border text-gray-300 border-gray-400 hover:bg-gray-400 hover:text-white`} onClick={ showOptions }>
                    {props.isOptionShown? "▼":"▲"}
                </button>
            </div>
        </div>
    );
}

export default SearchBar;