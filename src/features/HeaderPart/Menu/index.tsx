import React from "react";
import styles from "./menu.module.scss"
import { Link } from "react-router-dom";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import banner from "./banner.svg"
import Login from "../../Login";

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
                  fullScreen
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Transition}
                  sx={{
                    '& .MuiDialog-paper': {
                      backgroundImage: `url(${banner})`,
                      backgroundSize: 'cover',  // Ensure the background covers the entire area
                      backgroundPosition: 'center',
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