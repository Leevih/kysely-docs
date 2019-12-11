import React, { useState, useContext } from 'react';
import OpenQuestion from './OpenQuestion';
import MultipleChoice from './MultipleChoice';
import TypeMenu from './TypeMenu';
import useForm from '../utilities/useForm';
import { TextField, Button } from '@material-ui/core';

import PreviewModal from './PreviewModal';
import ListModal from './ListModal'; 
import AppContext from '../utilities/AppContext';

const FormsPage = () => {
    const app = useContext(AppContext);
    const [type, setType] = useState('');
    const [openList, setOpenList] = useState(false);
    const [openPreview, setOpenPreview] = useState(false);
    const [values, handleChange] = useForm();
    const [savedValues, setSavedValues] = useState([]);

    const handleShowPreview = () => {
        setOpenPreview(!openPreview);
    }

    const handleChangeOpen = () => {
        setOpenList(!openList);
    }

    const handleRemoveItem = (item) => {
        const newOptions = app.state.options.filter(data => data !== item);
        if( newOptions.length > 1 ) {
            app.dispatch({ type: 'CLEAN_OPTIONS' })
        }
        app.dispatch({ type: 'REMOVE_OPTION', newOptions })
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
                {
                    openList ? <ListModal handleChangeOpen={handleChangeOpen} openList={openList} handleRemoveItem={handleRemoveItem}/> : null
                }
                {type === 'monivalinta' ? <Button onClick={handleChangeOpen}>Lisää vastausvaihtoehtoja</Button> : null}
                <Button
                    onClick={handleShowPreview}
                >
                    Esikatsele
                </Button>
                {
                    openPreview ? <PreviewModal handleShowPreview={handleShowPreview} openPreview={openPreview} handleRemoveItem={handleRemoveItem} /> : null
                }
            </div>
        </div>
    )
}

export default FormsPage;