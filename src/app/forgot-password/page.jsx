"use client"
import "./page.css"
import * as React from 'react';
import forgotPasswordimg from "../../assect/forgotPassword.svg"
import Grid from '@mui/material/Grid';
import { IoIosArrowBack } from "react-icons/io";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { FaFacebook } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import Stack from '@mui/material/Stack';
import Image from "next/image";
import { useForm } from 'react-hook-form';
import Link from "next/link";

export default function ForgotPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm();

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
                            <Link style={{ textDecoration: "none" }} href="/login" className="typo1">< IoIosArrowBack /> Back to login</Link>
                            <Typography className="typo2">Forgot your password?</Typography>
                            <Typography className="typo3"
                            > Don’t worry, happens to all of us. Enter your email below to <br /> recover your password</Typography>
                        </Box>
                        <Box sx={{ marginTop: "50px" }} className="inputGroup">

                            <form onSubmit={handleSubmit(handleOnSubmit)}>
                                <TextField
                                    sx={{ width: '100%' }}
                                    placeholder="john.doe@gmail.com"
                                    id="outlined-basic"
                                    className="input"
                                    type="email"
                                    label="Email"
                                    variant="outlined"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                />
                                {errors.email && <Typography sx={{ color: "red" }}>{errors.email.message}</Typography>}
                                <Button sx={{ textTransform: "none", marginTop: "30px" }} className="submitbutton " type="submit" variant="contained">Submit</Button>

                            </form>
                        </Box>
                        <Box>
                            <Divider textAlign="center" className="divederText">Or login with</Divider>

                        </Box>
                        <Stack justifyContent="space-between" direction="row" spacing={1} marginTop="48px">

                            <Button className="button" variant="outlined">< FaFacebook className="icon" /></Button>
                            <Button className="button" variant="outlined"><FcGoogle className="icon" /></Button>
                            <Button className="button" variant="outlined">< IoLogoApple className="icon" color="black" /></Button>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                        <Image
                            className="img"
                            src={forgotPasswordimg}
                            loading="lazy"
                            alt="image"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
