import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Typography } from '@mui/material';

const PasswordInput = ({ id, label, error, helperText }) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();

    };

    return (
        <FormControl variant="outlined">
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <OutlinedInput
                sx={{ fontStyle: "Poppins", fontSize: "16px", color: "#1C1B1F" }}

                id={id}
                type={showPassword ? 'text' : 'password'}

                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff sx={{ color: "#313131" }} /> : <Visibility sx={{ color: "#313131" }} />}
                        </IconButton>
                    </InputAdornment>
                }
                label="password"
            />
            {error && <Typography sx={{ color: "red" }}>{helperText}</Typography>}
        </FormControl>
    )
}

export default PasswordInput