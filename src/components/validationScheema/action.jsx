import React from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';


const FormValidation = ({ name, rules, control, render }) => {


    return (
        <Controller
            name={name}
            rules={rules}
            control={control}
            render={({ field, fieldState: { error } }) =>
                render({ field, error: error ? error.message : '' })
            }
        />
    );
};

export default FormValidation;