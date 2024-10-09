import React, {useState} from "react";
import styles from "./login.module.scss";
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import TextField from '@mui/material/TextField';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";

const Login = ()=>{
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.loginTitle}>Добро пожаловать!</h2>
      <p className={styles.loginText}>Пожалуйста введите свой логин и пароль чтобы зайти на ваш личный аккаунт</p>
      <div className={styles.formBox}>
      <TextField sx={{ width: '100%' , backgroundColor: "#fbf2f9", borderRadius: "6px"}} id="outlined-basic" label="Логин" variant="outlined" />
      <FormControl sx={{ mt: 3, width: '100%', backgroundColor: "#fbf2f9", borderRadius: "6px" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl >
      <Link to="/"> </Link>
      </div>
    </div>
  )
} 

export default Login;