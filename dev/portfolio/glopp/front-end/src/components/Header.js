import React from 'react';
import { Link } from 'react-router-dom';
import SettingsIcon from '../images/settingsIcon.png';

function Header(){
    return(
       <header>
            <div style={styles.headBox}>
                <Link to="/Settings"><img style={styles.settingsIcon} src={SettingsIcon} alt="settings"></img></Link>
                <h1 style={styles.title}>MODIFICATIONS</h1>
            </div>
       </header>

    )
}
export default Header;

const styles = {
    headBox:{
        backgroundColor:"#3e3c63",
        display:"flex",
        flexDirection:"row",
        justifyContent:'center',
        color:"#010F24"

    },
    settingsIcon:{
        marginTop:"25%",

    },
    title:{
        fontSize:86,

    }


}