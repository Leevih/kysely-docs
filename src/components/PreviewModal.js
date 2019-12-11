import React, { useContext } from 'react';
import AppContext from '../utilities/AppContext';

import { Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText } from '@material-ui/core'; 


const PreviewModal = ({ openPreview, handleShowPreview, handleRemoveItem }) => {
const app = useContext(AppContext);


    return (
        <Dialog fullWidth open={openPreview} onClose={handleShowPreview} aria-labelledby="form-dialog-title">
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
            </DialogContent>
        </Dialog>
    )
};

export default PreviewModal;