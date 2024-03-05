"use client"
import "./page.css"
import * as React from 'react';
import forgotPassword from "../../assect/forgotPassword.svg"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Image from "next/image";
import PasswordInput from "../../components/lib/passwordInput";

import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';




export default function setNewPassword() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const onError = (errors) => {
        console.log(errors)
    };




    const handleOnSubmit = (data) => {
        console.log(data);
    };







    return (
        <Box sx={{ width: '100%', bgcolor: "white" }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={12} md={6}>
                    <Typography> Your Logo</Typography>
                    <Box className="textGroup" sx={{ margin: "50px", height: "100vh", bgcolor: "white" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: '20px' }}>

                            <Typography className="typo2"> Set a password</Typography>
                            <Typography className="typo3"
                            >
                                Your previous password has been reseted. Please set a new <br /> password for your account.
                            </Typography>
                        </Box>
                        <form sx={{ marginTop: "50px" }} className="inputGroup">
                            <PasswordInput label="Create Password" />

                            <PasswordInput label="Re-enter Password" />
                            <Button sx={{ textTransform: "none" }} className="submitbutton " variant="contained">Set password</Button>
                        </form>


                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                        <Image
                            className="img"
                            src={forgotPassword}
                            loading="lazy"
                            alt="image"
                        />
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}
