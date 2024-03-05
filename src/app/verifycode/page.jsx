"use client"
import "./page.css"
import * as React from 'react';
import verifyImg from "../../assect/verify.svg"
import Grid from '@mui/material/Grid';
import { IoIosArrowBack } from "react-icons/io";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Image from "next/image";
import PasswordInput from "../../components/lib/passwordInput";
import { useForm } from 'react-hook-form';
import Link from "next/link";

export default function VerifyCode() {


    const { register, handleSubmit, formState: { errors } } = useForm();



    const handleOnSubmit = (data) => {
        console.log(data);
    };





    return (
        <Box sx={{ width: '100%', bgcolor: "white" }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={12} md={6}>

                    <Box className="textGroup" sx={{ margin: "50px", height: "100vh", bgcolor: "white" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: '20px' }}>
                            <Link style={{ textDecoration: "none" }} href="/login" className="typo1">< IoIosArrowBack /> Back to login</Link>
                            <Typography className="typo2">Verify code</Typography>
                            <Typography className="typo3"> An authentication code has been sent to your email.</Typography>
                        </Box>


                        <form onSubmit={handleSubmit(handleOnSubmit)} >
                            <Box sx={{ marginTop: "50px" }} className="inputGroup">

                                <PasswordInput
                                    {...register("code", { required: "code must be 6 charecter" })}
                                    label="Enter Code"

                                    error={!!errors.code}
                                    helperText={errors.code ? "This field is required" : null}
                                />


                                <Typography className="resendtext">Didn’t receive a code? <span className="resendtextspan">Resend</span></Typography>
                            </Box>

                            <Box className="btndiv">
                                <Button sx={{ textTransform: "none" }} className="submitbutton " type="submit" variant="contained">Submit</Button>
                            </Box>
                        </form>




                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                        <Image
                            className="img"
                            src={verifyImg}
                            loading="lazy"
                            alt="image"
                        />
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}
