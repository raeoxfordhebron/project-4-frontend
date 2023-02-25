import { navData } from "../lib/navData";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import { NavLink } from "react-router-dom";
import { useState } from "react";
import KeyBoardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

export default function Sidenav() {
    const [open, setOpen] = useState(true)
    const toggleOpen = () => {
        setOpen(!open)
    }
    return(
        <div className={open?styles.sidenav:styles.sidenavClosed}>
            <button className={styles.menuBtn} onClick={toggleOpen}>
               {open? <KeyboardDoubleArrowLeftIcon/>:<KeyBoardDoubleArrowRightIcon/>}
            </button>
            {navData.map(item => {
                return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
            {item.icon}
            <span className={open?styles.linkText:styles.linkTextClosed}>{item.text}</span>
            </NavLink>
            })}
        </div>
    )
}