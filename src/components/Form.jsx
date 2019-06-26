import React from 'react';

const Form = ({onSearch, onInput, searchText}) => {
    return ( 
        <React.Fragment>
            <form onSubmit={onSearch}>
                <input type="text" value={searchText} onChange={onInput}/>
                <button type="submit">Search</button>
            </form>
        </React.Fragment>
     );
}
 
export default Form;