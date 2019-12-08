import React, { useContext, useState, useEffect } from 'react';
import {
    Dialog, DialogContent,
    DialogTitle, ListItem,
    ListItemText, List,
    Button, TextField
} from '@material-ui/core';

import AppContext from '../utilities/AppContext';


const ListMOdal = ({ handleChangeOpen, openList }) => {
    const app = useContext(AppContext);
    const [txt, setTxt] = useState('');

    const filter = data => {

        let inspected = app.state.options.find(item => item === data);
        return inspected;
    }

    const saveItem = () => {
        let inspectThis = txt;

        if (inspectThis !== undefined &&
            filter(inspectThis) === undefined &&
            inspectThis !== '') {

            app.dispatch({ type: 'ADD_OPTION', payload: txt })
        }

        setTxt('')
    }

    const handleRemoveItem = (item) => {
        const newOptions = app.state.options.filter(data => data !== item);
        if( newOptions.length > 1 ) {
            app.dispatch({ type: 'CLEAN_OPTIONS' })
        }
        app.dispatch({ type: 'REMOVE_OPTION', newOptions })
    }

    return (
        <Dialog fullWidth open={openList} onClose={handleChangeOpen} aria-labelledby="form-dialog-title">
            <DialogTitle>Vaihtoehdot</DialogTitle>
            <DialogContent>
                <List component="nav" aria-label="contacts">
                    {
                        app.state.options.map(item =>
                            <ListItem 
                            button={true} 
                            onClick={(item) => handleRemoveItem(item)} 
                            key={item + Math.random()}>
                                <ListItemText primary={item} />
                            </ListItem>
                        )
                    }
                </List>
                <TextField
                    //className="customer-form-item"
                    id="standard-name"
                    label={"Vaihtoehto"}
                    name="vaihtoehto"
                    value={txt}
                    onChange={(e) => setTxt(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button
                    onClick={() => saveItem()}
                >
                    Lisää
            </Button>
            </DialogContent>
        </Dialog>
    )
}

export default ListMOdal;