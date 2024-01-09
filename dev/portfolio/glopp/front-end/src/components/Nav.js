import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../images/homeIcon.png';
import SearchIcon from '../images/searchIcon.png';
import SettingsIcon from '../images/settingsIcon.png';

function Nav(){
        return(
            <nav style={styles.nav}>
                <div style={styles.iconBar}>
                    <Link to="/">
                        <img src={HomeIcon} style={styles.icons} alt="home"></img>
                    </Link>
                </div>
                <div>
                    <Link to="/Search">
                        <img src={SearchIcon} style={styles.icons} alt="search"></img>
                    </Link>
                </div>
                <div>
                    <Link to="/Settings">
                        <img src={SettingsIcon} style={styles.icons} alt="settings"></img>
                    </Link>
                </div>
            </nav>
        )
}

export default Nav;

const styles = {
    nav:{
        display:"flex",
        flexDirection:"horizontal",
        backgroundColor:"#010F24",
        width:"100%",
    },
    icons:{
        height:"32px",
        margin:"20px",
    },
    iconBar:{
        marginLeft:'42%'
    }

} 