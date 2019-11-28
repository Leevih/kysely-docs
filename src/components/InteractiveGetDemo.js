import React, { useState, useContext } from 'react';

import { Button } from '@material-ui/core';
import ReactJson from 'react-json-view';

import AppContext from '../utilities/AppContext';

const InteractiveGetDemo = ({ theme }) => {
    const [currentDemoData, setCurrentDemoData] = useState({});
    const app = useContext(AppContext);

    const handleDemoInteraction = (action) => {
        switch (action) {
            case 'kysymykset': {
                setCurrentDemoData(app.state.questions[0]);
                console.log(currentDemoData);
                return;
            }
            case 'vastaukset': {
                setCurrentDemoData(app.state.answers[0]);
                console.log(currentDemoData);
                return;
            }
            case 'kyselyt': {
                setCurrentDemoData(app.state.polls[0]);
                console.log(currentDemoData);
                return;
            }
            default: {
                setCurrentDemoData(app.state.questions[0]);
                return;
            }
        }
    }

    return (
        <div className="interactive-demo">
            <Button
                onClick={() => handleDemoInteraction('kysymykset')}
            >
                GET kysymykset
            </Button>
            <Button
                onClick={() => handleDemoInteraction('vastaukset')}
            >
                GET vastaukset
            </Button>
            <Button
                onClick={() => handleDemoInteraction('kyselyt')}
            >
                GET kyselyt
            </Button>
            <div className="demo-container">
                <ReactJson 
                src={currentDemoData}
                theme={theme}
                enableClipboard={false}
                />
            </div>
        </div>
    )
}

export default InteractiveGetDemo;