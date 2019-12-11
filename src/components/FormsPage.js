import React, { useState, useContext } from 'react';
import OpenQuestion from './OpenQuestion';
import MultipleChoice from './MultipleChoice';
import TypeMenu from './TypeMenu';
import useForm from '../utilities/useForm';
import { TextField, Button } from '@material-ui/core';

import ListModal from './ListModal'; 
import AppContext from '../utilities/AppContext';

const FormsPage = () => {
    const app = useContext(AppContext);
    const [type, setType] = useState('');
    const [openList, setOpenList] = useState(false);
    const [values, handleChange] = useForm();
    const [savedValues, setSavedValues] = useState([]);




    const handleChangeOpen = () => {
        setOpenList(!openList);
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
                    openList ? <ListModal handleChangeOpen={handleChangeOpen} openList={openList} /> : null
                }
                {type === 'monivalinta' ? <Button onClick={handleChangeOpen}>Lisää vastausvaihtoehtoja</Button> : null}
                <Button>
                    Esikatsele
                </Button>
            </div>
        </div>
    )
}

export default FormsPage;