import React, { useState } from 'react';
import useForm from '../utilities/useForm';
import { TextField } from '@material-ui/core';

const OpenQuestion = () => {
    const [values, handleChange] = useForm();
    
    return (
        <div className="open-question">
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
        </div>
    )
}
    
export default OpenQuestion;