import React from "react";
import styles from "./menu.module.scss"
import { Link } from "react-router-dom";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import banner from "./banner.svg"
import Login from "../../Login";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function NavList(){
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <ul className={styles.wrapperList}>
            <li className={styles.wrapperListItem}>
            <React.Fragment>
                <Button className={styles.personBtn} onClick={handleClickOpen}>
                  <PermIdentityIcon sx={{ color: 'black' }} />
                </Button>
                <Dialog
                  fullScreen={fullScreen}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="responsive-dialog-title"
                  TransitionComponent={Transition}
                  sx={{
                    '& .MuiDialog-paper': {
                      width: '600px',
                      height: '670px',
                      overflow: 'hidden'
                    },
                  }}
                >
                 
                  <Toolbar>
                      <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                      >
                        <CloseIcon />
                      </IconButton>
                    </Toolbar>
                    <Login/>
                </Dialog>
              </React.Fragment>
            </li>
            {/* <li className={styles.wrapperListItem}>
              <Link className={styles.listLink} to="/">
                <AddShoppingCartIcon sx={{ color: 'black' }}/>
              </Link>
            </li> */}
        </ul>
    </div>
  )
} 

export default NavList;