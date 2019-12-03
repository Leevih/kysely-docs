import React, { useState } from 'react';
import OpenQuestion from './OpenQuestion';
import MultipleChoice from './MultipleChoice';
import TypeMenu from './TypeMenu';
import useForm from '../utilities/useForm';
import { TextField, Dialog, Button, DialogContent, DialogTitle, ListItem, ListItemText } from '@material-ui/core';
import { FixedSizeList } from 'react-window';

const FormsPage = () => {
    const [type, setType] = useState('');
    const [open, setOpen] = useState(false);
    const [values, handleChange] = useForm();
    const [itemCount, setItemCount] = useState(0);
    const handleChangeOpen = () => {
        setOpen(!open);
    }

    const renderRow = (props) => {
        const { index, style } = props;

        return (
            <ListItem button style={style} key={index}>
                <ListItemText primary={`Item ${index + 1}`} />
            </ListItem>
        );
    }

    return (
        <div className="container">
            <div className="content">
                <form>
                    <TextField
                        //className="customer-form-item"
                        id="standard-name"
                        label={"Kysymys"}
                        name="kysymys"
                        value={values.kysymys || ''}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                </form>
                <TypeMenu state={{ type, setType }} margin="normal" />

                <Dialog fullWidth open={open} onClose={handleChangeOpen} aria-labelledby="form-dialog-title">
                    <DialogTitle>Vaihtoehdot</DialogTitle>
                    <DialogContent>
                        <FixedSizeList height={400} width={360} itemSize={46} itemCount={5}>
                            {renderRow}
                        </FixedSizeList>
                        <TextField
                            //className="customer-form-item"
                            id="standard-name"
                            label={"Vaihtoehto"}
                            name="vaihtoehto"
                            value={values.vaihtoehto || ''}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />

                    </DialogContent>
                </Dialog>

                {type === 'monivalinta' ? <Button onClick={handleChangeOpen}>Lisää vastausvaihtoehtoja</Button> : null}

            </div>
        </div>
    )
}

export default FormsPage;