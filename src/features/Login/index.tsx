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
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const Login = ()=>{
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleStyle = () => {
    setIsActive(!isActive);  
  };

  return (
    <div  style={{
      transform: isActive ? 'translateY(-630px)' : 'translateY(0)',
      transition: "0.5s ease all"
    }}>
       <div className={styles.wrapper}>
          <h2 className={styles.loginTitle}>Добро пожаловать!</h2>
          <p className={styles.loginText}>Пожалуйста введите свой логин и пароль чтобы зайти в свой личный кабинет</p>
          <div className={styles.formBox}>
          <TextField 
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#5e5555bb', 
              },
              '&:hover fieldset': {
                borderWidth: '1px', 
                borderColor: '#604545', 
              },
              '&.Mui-focused fieldset': {
                borderWidth: '1px', 
                borderColor: '#604545', 
              },
            },
            '& label.Mui-focused': {
              color: '#675f66',
            }, width: '100%' , backgroundColor: "#fbf2f9", borderRadius: "6px"}} id="outlined-basic" label="Логин" variant="outlined" />
          <FormControl 
          sx={{'& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#5e5555bb', 
              },
              '&:hover fieldset': {
                borderWidth: '1px', 
                borderColor: '#604545', 
              },
              '&.Mui-focused fieldset': {
                borderWidth: '1px', 
                borderColor: '#604545', 
              },
            },
            '& label.Mui-focused': {
        color: '#675f66',
      }, mt: 3, width: '100%', backgroundColor: "#fbf2f9", borderRadius: "6px", borderColor: "black"}} variant="outlined">
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
            <Link className={styles.passwordReset} to="/">Забыли пароль? </Link>
            <Link className={styles.loginBtn} to="/"> <LoginIcon/> Войти в аккаунт </Link>
            <p className={styles.signInText}>Если у вас нету акаунта то пройдите регистрацию прямо сейчас!</p>
            <Link onClick={toggleStyle} className={styles.loginBtn} to="/"> <HowToRegIcon/> Зарегистрироваться </Link>
          </div>
       </div> 
       <div className={styles.wrapperSignin}>
          <h2 className={styles.loginTitle}>Регистрация аккаунта!</h2>
          <p className={styles.loginText}>Пожалуйста введите свои данные чтобы создать свой личный кабинет</p>
          <div className={styles.formBox}>
            <div className={styles.formWrap}>
            <TextField 
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#5e5555bb', 
              },
              '&:hover fieldset': {
                borderWidth: '1px', 
                borderColor: '#604545', 
              },
              '&.Mui-focused fieldset': {
                borderWidth: '1px', 
                borderColor: '#604545', 
              },
            },
            '& label.Mui-focused': {
              color: '#675f66',
            }, width: '100%' , backgroundColor: "#fbf2f9", borderRadius: "6px"}} id="outlined-basic" label="Логин" variant="outlined" />
              <TextField 
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#5e5555bb', 
              },
              '&:hover fieldset': {
                borderWidth: '1px', 
                borderColor: '#604545', 
              },
              '&.Mui-focused fieldset': {
                borderWidth: '1px', 
                borderColor: '#604545', 
              },
            },
            '& label.Mui-focused': {
              color: '#675f66',
            }, width: '100%' , backgroundColor: "#fbf2f9", borderRadius: "6px"}} id="outlined-basic" label="Почта" variant="outlined" />
            </div>
            <div className={styles.formWrap}>
            <FormControl 
          sx={{'& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#5e5555bb', 
              },
              '&:hover fieldset': {
                borderWidth: '1px', 
                borderColor: '#604545', 
              },
              '&.Mui-focused fieldset': {
                borderWidth: '1px', 
                borderColor: '#604545', 
              },
            },
            '& label.Mui-focused': {
        color: '#675f66',
      }, mt: 3, width: '100%', backgroundColor: "#fbf2f9", borderRadius: "6px", borderColor: "black"}} variant="outlined">
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
            <FormControl 
          sx={{'& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#5e5555bb', 
              },
              '&:hover fieldset': {
                borderWidth: '1px', 
                borderColor: '#604545', 
              },
              '&.Mui-focused fieldset': {
                borderWidth: '1px', 
                borderColor: '#604545', 
              },
            },
            '& label.Mui-focused': {
        color: '#675f66',
      }, mt: 3, width: '100%', backgroundColor: "#fbf2f9", borderRadius: "6px", borderColor: "black"}} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Повторите Пароль</InputLabel>
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
            </div>
           
            <p className={styles.rememberMe}>
              <Checkbox  defaultChecked  
              sx={{
                color: pink[300],
                '&.Mui-checked': {
                 color: pink[300],
                },
              }}
            /> Запомнить меня</p>
            <Link className={styles.loginBtn} to="/"> <LoginIcon/>Зарегистрироваться   </Link>
            <p className={styles.signInText}>Если у вас нету акаунта то пройдите регистрацию прямо сейчас!</p>
            <Link onClick={toggleStyle} className={styles.loginBtn} to="/"> <HowToRegIcon/>Войти в аккаунт </Link>
          </div>
       </div> 
    </div>
   
  )
} 

export default Login;