import React, { useState, useContext, useEffect } from 'react';

import { Button } from '@material-ui/core';
import ReactJson from 'react-json-view';

import AppContext from '../utilities/AppContext';

const InteractiveGetDemo = ({ theme }) => {
    const [currentDemoData, setCurrentDemoData] = useState({});
    const [visibleJson, setVisibleJson] = useState(false);
    const app = useContext(AppContext);

    useEffect(() => {
        if ('content' in currentDemoData || 'name' in currentDemoData) {
            setVisibleJson(true);
        } else {
            setVisibleJson(false);
        }
    }, [currentDemoData])

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
                return;
            }
        }
    }

    return (
        <div className="interactive-demo">

            {/* questions */}

            {app.loadingState.questionsLoading ? 'loading...'
                :
            <Button
                    onClick={() => handleDemoInteraction('kysymykset')}
                >
                    GET kysymykset
            </Button>}

            {/* answers */}

            {app.loadingState.answersLoading ? 'loading...'
                :
            <Button
                    onClick={() => handleDemoInteraction('vastaukset')}
                >
                    GET vastaukset
            </Button>
            }

            {/* Polls */}

            {app.loadingState.pollsLoading ? 'loading...'
                :
            <Button
                    onClick={() => handleDemoInteraction('kyselyt')}
                >
                    GET kyselyt
            </Button>
            }

            <div className="demo-container">
                {visibleJson ? <ReactJson
                    src={currentDemoData}
                    theme={theme}
                    enableClipboard={false}
                />
                    :
                    null
                }
            </div>
        </div>
    )
}

export default InteractiveGetDemo;