import React, { useContext } from 'react';
import ReactJson from 'react-json-view';
import AppContext from '../utilities/AppContext';

const DataDisplay = ({ props }) => {
    const app = useContext(AppContext);

    return (
        <div className="container">
            <div className="content">
                <h2 className="data-display-title" >{props.title}</h2>
                <p>
                    {app.state.currentUrl}
                </p>
                <div className="json-view">
                    <ReactJson 
                    src={props.data} 
                    enableClipboard={false}
                    theme='summerfruit'
                    />
                </div>
            </div>
        </div>
    )
}

export default DataDisplay;