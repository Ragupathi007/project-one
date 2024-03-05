"use client";
import { Box, Grid, Typography, TextField, Button, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import Container from "@mui/material/Container";
import { LuUser2 } from "react-icons/lu";
import InputAdornment from "@mui/material/InputAdornment";
import { MdOutlineMail } from "react-icons/md";
import { MdLockOpen } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Register from "../../assect/sign-in.svg"
const register = () => {
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Box sx={{ marginLeft: "5px" }}>
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                        <Grid item xs={6}>
                            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                                <Image
                                    src={Register}
                                    alt="image"
                                    style={{ maxWidth: "100%" }}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={6}>
                            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                do you have account? <Link style={{ textDecoration: "none", color: "#4359C6" }} href="/login">Sign in</Link>
                            </Box>
                            <Box sx={{ mt: 15 }}>
                                <Typography variant="h3"> Create Account</Typography>
                                <Typography color="#313131" mt={1}>
                                    Follow the instructions to make it easier to register and you
                                    will be able to explore inside.
                                </Typography>
                            </Box>
                            <Box sx={{ mt: 4 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        <TextField
                                            placeholder="UserName"
                                            sx={{
                                                width: "100%",
                                                backgroundColor: "#F6F6F6",
                                                borderRadius: "10px",
                                            }}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <LuUser2 />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <TextField
                                            sx={{
                                                width: "100%",
                                                backgroundColor: "#F6F6F6",
                                                borderRadius: "10px",
                                            }}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <MdOutlineMail />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            placeholder="Email"
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <TextField
                                            sx={{
                                                width: "100%",
                                                backgroundColor: "#F6F6F6",
                                                borderRadius: "10px",
                                                outline: "none",
                                            }}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <MdLockOpen />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            placeholder="Password"
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                <Grid item xs={8}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        fullWidth
                                        style={{
                                            textTransform: "none",
                                            padding: "20px",
                                            borderRadius: "10px",
                                        }}
                                    >
                                        Create Account
                                    </Button>
                                </Grid>
                            </Box>
                            <Stack direction="row" spacing={3} sx={{ mt: 4 }}>
                                <Box>
                                    <Button
                                        variant="outlined"
                                        className="button"
                                        sx={{
                                            padding: "10px 70px 10px 20px",
                                        }}
                                    >
                                        <FcGoogle style={{ fontSize: 24 }} />
                                        <span
                                            style={{ textTransform: "capitalize", marginLeft: 8 }}
                                        >
                                            Google
                                        </span>
                                    </Button>
                                </Box>
                                <Box>
                                    <Button
                                        variant="outlined"
                                        className="button"
                                        sx={{
                                            padding: "10px 70px 10px 10px",
                                        }}
                                    >
                                        <FaFacebook style={{ fontSize: 24 }} />
                                        <span
                                            style={{ textTransform: "capitalize", marginLeft: 8 }}
                                        >
                                            Facebook
                                        </span>
                                    </Button>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
};

export default register;