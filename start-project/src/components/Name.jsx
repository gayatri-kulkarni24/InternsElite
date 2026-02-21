import React from 'react';
import './Name.css';

function Name(props) {
    return(
        <div className='name'>{props.data}</div>

    );
}
export default Name;

//Assignment:
// 1. Create a new component called NameList.
// 2. Create a new state called nameList.
// 3. Create a new function called updateNameList.
// 4. Create a new button called Add Name.
// 5. Create a new input field called Name.
// 6. Create a new button called Add Name.
// 7. Create a new button called Remove Name.
// 8. Create a new button called Remove All Names.
// 9. Create a new button called Update Name.
// 10. Create a new button called Update All Names.