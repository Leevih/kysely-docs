import React, { useContext, useEffect } from 'react';

import AppContext from '../utilities/AppContext';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
});




const VastausTable = () => {
    const classes = useStyles();
    const app = useContext(AppContext);

    useEffect(() => {
        console.log(app.state.vastaukset)
    }, [])


    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Vastaus</TableCell>
                        <TableCell>id</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {app.state.vastaukset.map(row => (
                        <TableRow key={row.vastausId}>
                            <TableCell component="th" scope="row">
                                {row.content}
                            </TableCell>
                             <TableCell align="right">{row.vastausId}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default VastausTable;