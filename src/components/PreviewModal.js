import React, { useContext } from 'react';
import AppContext from '../utilities/AppContext';

import { Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Button } from '@material-ui/core';


const PreviewModal = ({ openPreview, handleShowPreview, type, question, handleSubmit }) => {
    const app = useContext(AppContext);

    return (
        <Dialog fullWidth open={openPreview} onClose={handleShowPreview} aria-labelledby="form-dialog-title">
            <DialogTitle>Luomasi kysymys</DialogTitle>
            <DialogContent>
                <h2>{question}</h2>
                { type === 'monivalinta' ?  
                <div className="question-options">
                    <h3>Valitsemasi vaihtoehdot</h3>
                    <List component="nav" aria-label="contacts">
                        {
                            app.state.options.map(item =>
                                <ListItem

                                    key={item + Math.random()}>
                                    <ListItemText primary={item} />
                                </ListItem>
                            )
                        }
                    </List>
                </div>
                :
                null
                }
                <Button
                    onClick={handleSubmit}
                >
                    Lähetä
                </Button>
            </DialogContent>
        </Dialog>
    )
};

export default PreviewModal;