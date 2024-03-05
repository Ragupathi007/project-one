"use client";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Login from "../../assect/login.svg"
import TextField from "@mui/material/TextField";
import { FaFacebook } from "react-icons/fa";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import * as React from "react";
import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import CssBaseline from "@mui/material/CssBaseline";
import "./page.css";
import Image from "next/image";
import Link from "next/link";

export default function Demo() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const label = { inputProps: { "aria-label": "Checkbox demo" } };

    return (
        <React.Fragment>
            <>
                <Box sx={{ margin: "20px", }} >
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography variant="h3">Login</Typography>
                                <Typography color="#313131" mt={1}>
                                    Login to access your travelwise account
                                </Typography>

                                <Grid container spacing={2} mt={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            placeholder="john.doe@gmail.com"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel htmlFor="outlined-adornment-password">
                                                Password
                                            </InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                type={showPassword ? "text" : "password"}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? (
                                                                <VisibilityOff />
                                                            ) : (
                                                                <Visibility />
                                                            )}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password"
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box className="password">
                                            <Box display="flex" alignItems="center">
                                                <Checkbox {...label} />
                                                <Typography>Remember me</Typography>
                                            </Box>
                                            <Typography className="forgetpassword">
                                                Forget Password
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            fullWidth
                                            style={{ textTransform: "none" }}
                                        >
                                            Login
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box textAlign="center" mt={2}>
                                            <Typography>
                                                Don't have an account?
                                                <Link style={{ textDecoration: "none " }} href="/sign-up" className="color">Sign up</Link>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider sx={{ mt: 3, color: "#313131" }}>
                                            Or login with
                                        </Divider>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack direction="row" spacing={2} justifyContent="center">
                                            <Button variant="outlined" className="button">
                                                <FaFacebook style={{ fontSize: "24px" }} />
                                            </Button>
                                            <Button variant="outlined" className="button">
                                                <FcGoogle style={{ fontSize: "24px" }} />
                                            </Button>
                                            <Button variant="outlined" className="button">
                                                <IoLogoApple style={{ fontSize: "24px" }} color="black" />
                                            </Button>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                                <Image
                                    src={Login}
                                    alt="image"
                                    style={{ maxWidth: "100%" }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </>
        </React.Fragment >
    );
}