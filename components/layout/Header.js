import React from "react";
import styles from '../../styles/Header.module.css'
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';

function Home(){

}

export default function Header(){
    return(
        <div>
            <div className={styles.Header}>
                <div id={styles.Icon}>
                    <HomeIcon/>
                    MANOJ KUMAR
                </div>
                <div id={styles.Icon}>
                    <MailIcon/>
                    KUMAR.MANOJ05@OUTLOOK.COM
                </div>
            </div>
        </div>
    )
}