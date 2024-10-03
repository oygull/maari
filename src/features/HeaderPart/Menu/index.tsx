import React from "react";
import styles from "./menu.module.scss"
import { Link } from "react-router-dom";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Login from "../../Login"

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
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
                <Button className={styles.listLink}  onClick={handleClickOpen}>
                    <PermIdentityIcon sx={{ color: 'black' }}/>
                </Button>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    className={styles.dialogWrap}
                    onClose={handleClose}
                    PaperProps={{
                      sx: { width: '80vw', maxWidth: '100vw' }  // Custom size: 80% of viewport width
                    }}
                    aria-describedby="alert-dialog-slide-description"
                  >
                    <Login/>
               </Dialog>
              </React.Fragment>
            </li>
            <li className={styles.wrapperListItem}>
              <Link className={styles.listLink} to="/">
                <AddShoppingCartIcon sx={{ color: 'black' }}/>
              </Link>
            </li>
        </ul>
    </div>
  )
} 

export default NavList;