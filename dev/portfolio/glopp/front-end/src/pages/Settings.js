import React from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';


function Settings(){
    return(
        <div style={styles.settingsPage}>
            <Header />
            <section style={styles.optionsSection}>
                <div style={styles.reserved}></div>
                <div style={styles.optionInterface}>
                </div>
            </section>
            <Nav />
        </div>
    )
}

export default Settings;

const styles = {
    settingsPage:{
        display:'flex',
        flexDirection:'column'
    },
    optionsSection:{
        height:'450px',
        backgroundColor:"#d3d1ed",
        
    },
    optionInterface:{
        backgroundColor:"#010F24",
        borderRadius:"20px",
        height:'400px',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:'2%',
         
    }
}