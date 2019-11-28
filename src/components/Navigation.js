import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

const Navigation = () => {
    const [currentUrl, setCurrentUrl] = useState('');

    const version = 1;

    return (
        <AppBar position="static">
            <div className="navbar">
                <Toolbar>
                    <Button component={Link} to="/" color="inherit" onClick={() => setCurrentUrl('')}>
                        Kotisivu
                </Button>
                    <Button component={Link} to="/kysymykset" color="inherit" onClick={() => setCurrentUrl('/kysymykset')}>
                        Kysymykset
                </Button>
                    <Button component={Link} to="/vastaukset" color="inherit" onClick={() => setCurrentUrl('/vastaukset')}>
                        Vastaukset
                </Button>
                    <Button component={Link} to="/kyselyt" color="inherit" onClick={() => setCurrentUrl('/kyselyt')}>
                        Kyselyt
                </Button>
                    <Typography style={{ marginLeft: '5rem' }}>
                        {currentUrl !== '' ? `http://kyselyhomma${version}.herokuapp.com${currentUrl}` : null}
                    </Typography>
                </Toolbar>
            </div>
        </AppBar>
    )
}

export default Navigation;

