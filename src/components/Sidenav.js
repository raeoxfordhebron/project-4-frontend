import { NavLink, useLoaderData } from "react-router-dom";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft"
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"
import styles from "./sidenav.module.css"
import { useState } from "react";
import { Button } from "semantic-ui-react";
import { navData } from "../lib/navData";

export default function Sidenav({childToParent}){
    const data = useLoaderData()
    const [open, setOpen] = useState(true)
    const toggleOpen = () => {
        setOpen(!open)
    }
    console.log(data)
    return(<>
        <div>
            <Button primary onClick={() => childToParent(data)}>Click Sidenav</Button>
        </div>
        <div className={open?styles.sidenav:styles.sidenavClosed}>
            <button className={styles.menuBtn} onClick={toggleOpen}>
                {open? <KeyboardDoubleArrowLeftIcon/> : <KeyboardDoubleArrowRightIcon/>}
            </button>
            {navData.map(item => {
                return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
                    {item.icon}
            <span className={open? styles.linkText:styles.linkTextClosed}>{item.text}</span>
            </NavLink>
            })}
        </div>
        </>
    )
}