import React from 'react';
import ReactJson from 'react-json-view';


const DataDisplay = ({ props }) => {

    return (
        <div className="container">
            <div className="content">
                <h2 className="data-display-title" >{props.title}</h2>
                <div className="json-view">
                    <ReactJson src={props.data} />
                </div>
            </div>
        </div>
    )
}

export default DataDisplay;