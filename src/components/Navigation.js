import React, { useContext } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import AppContext from '../utilities/AppContext';


const Navigation = () => {
    const app = useContext(AppContext);

    const version = 2;

    const handleUrl = (endpoint) => {
        const url = `http://kyselyhomma${version}.herokuapp.com${endpoint}`;
        app.dispatch({ type: 'SET_CURRENT_URL', payload: url })
    }

    return (
        <AppBar position="static" color="secondary">
            <div className="navbar">
                <Toolbar>
                    <Button component={Link} to="/" color="inherit" onClick={() => handleUrl('')}>
                        Kotisivu
                </Button>
                    <Button component={Link} to="/kysymykset" color="inherit" onClick={() => handleUrl('/kysymykset')}>
                        Kysymykset
                </Button>
                    <Button component={Link} to="/vastaukset" color="inherit" onClick={() => handleUrl('/vastaukset')}>
                        Vastaukset
                </Button>
                    <Button component={Link} to="/kyselyt" color="inherit" onClick={() => handleUrl('/kyselyt')}>
                        Kyselyt
                </Button>
                <Button component={Link} to="/form-example" color="inherit" onClick={() => handleUrl('/')}>
                    Form esimerkit
                </Button>
                </Toolbar>
            </div>
        </AppBar>
    )
}

export default Navigation;

