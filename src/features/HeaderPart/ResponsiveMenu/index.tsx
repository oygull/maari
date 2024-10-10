import React, { useState, MouseEvent } from 'react';
import styles from "./responsiveMenu.module.scss";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import logoSvg from "../Logo/logo.png"
import Accordion from '@mui/material/Accordion';
import headerItemsArr from "../../../app/assets/date/headwrItemsArr";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';

const ResponsiveMenu: React.FC = () =>  {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  // State to track which accordion is expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleIconClick = (event: MouseEvent<HTMLButtonElement>, index: number) => {
    event.stopPropagation();
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleAccordionClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
       <React.Fragment>
      <Button className={styles.diologBtn} variant="outlined" onClick={handleClickOpen}>
        <MenuIcon/>
      </Button>
      <Dialog
        fullScreen={fullScreen}
        className={styles.diologWrap}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="container">
        <DialogActions className={styles.dialogHeader}>
          <Link className={styles.logoLink} to="/">
              <img className={styles.logoImgLink} alt="logoSvg" src={logoSvg}/>
          </Link>
          <Button className={styles.diologBtn} variant="outlined" onClick={handleClose} autoFocus>
            <CloseIcon/>
          </Button>
        </DialogActions>
        <DialogContent className={styles.dialogContentBox}>
          <div>
            {
              headerItemsArr.map((el, i) =>
                <div key={i}>
                  {el.itemChildren.length === 0 ? (
                    <Link className={styles.dialogLink} to={el.path}>{el.itemNamme}</Link>
                  ) : (
                    <Accordion expanded={expandedIndex === i}>
                      <AccordionSummary
                        expandIcon={
                          <IconButton onClick={(e) => handleIconClick(e, i)}>
                            <ExpandMoreIcon />
                          </IconButton>
                        }
                        aria-controls={`panel${i}-content`}
                        id={`panel${i}-header`}
                        onClick={handleAccordionClick}
                      >
                        <Link className={styles.dropLink} to={el.path}>{el.itemNamme}</Link>
                      </AccordionSummary>
                      <AccordionDetails className={styles.details}>
                        {el.itemChildren.map((item, j) =>
                          <Link className={styles.detailsLink} key={j} to={`/eachitem/${item.childPath}`}>{item.childName}</Link>
                        )}
                      </AccordionDetails>
                    </Accordion>
                  )}
                </div>
              )
            }
          </div>
        </DialogContent>
        </div>
      </Dialog>
    </React.Fragment>
    </div>
  );
}

export default ResponsiveMenu;