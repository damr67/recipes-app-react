import React from 'react';

const Form = ({onSearch}) => {
    return ( 
        <React.Fragment>
            <form onSubmit={onSearch}>
                <input type="text"/>
                <button type="submit">Search</button>
            </form>
        </React.Fragment>
     );
}
 
export default Form;