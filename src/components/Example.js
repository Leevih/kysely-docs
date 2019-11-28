import React from 'react';
import ReactJson from 'react-json-view';


const Example = ({ data }) => {
    return (
        <div>
             <ReactJson src={data.display}/>
        </div>
    )
}

export default Example;