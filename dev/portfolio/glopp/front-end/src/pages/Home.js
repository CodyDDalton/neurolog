import React from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import HtInc from '../images/htInc.png';

function Home(){
        return (
            <div>
                <div style={styles.page}>
                <section style={styles.logoContainer}>
                    <div>
                        <Link to="/"><img style={styles.logo} src={Logo} alt="logo"></img></Link>
                    </div>
                </section>
                <hr style={styles.divideLine}></hr>
                <section>
                    <div style={styles.quoteBox}>
                        <h2 style={styles.quote}>“Arrive.<br></br>Find Inhabitants.<br></br>Destroy Them.” <br></br>HT Inc. Founder Bzork Lazerlegs</h2>
                    </div>
                    <div>
                        <div style={styles.infoBox}>
                        <p style={styles.info}>Hostile Takeover Incorporated was founded 5 milennia ago by Bzork Lazerlegs
                        and Zzzzbeerg Martinson. Ever since, HT Inc. has serviced hundreds of hostile 
                        invaders in their pursuits for utter annihilation.</p>
                        
                        <p style={styles.info}>Our latest venture into the broad and bustling industry of global destruction
                        has resulted in our creation of the Global Living Organism Population Perceiver. 
                        Or GLOPP, for short. Strictly speaking, we only service America. That is the only 
                        place we invade. Ever. It’s a rule.</p>
                        </div>
                        <div style={styles.companyContainer}>
                            <div style={styles.companyLogo}>
                                <img src={HtInc} style={styles.htLogo} alt="htincLogo"></img>
                                <p style={styles.htName}>HT Inc</p>
                            </div>
                        </div>
                        
                        
                    </div>
                </section>
                </div>
                <Nav />
            </div>
        )
}

export default Home;

const styles = {
    page:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        marginLeft:'10%',
        marginRight:'10%',
        backgroundColor:'#d3d1ed',
    },
    logo:{
        height:'256px',
        display:'block',
    },
    logoContainer:{
        display:'flex',
        justifyContent:'center'

    },
    divideLine:{
        borderColor:"#010F24",
        borderRadius:'70%'
    },
    quoteBox:{
        display:'flex',
        justifyContent:'center'
    },
    quote:{
        fontSize: 24,
        color:"#010F24",
        textAlign:"center",
    },
    infoBox:{
        display:'flex',
        flexDirection:'column',
        marginLeft:'27%',
        marginRight:'25%'
        
    },
    info:{
        fontSize: 16,
        color:"#010F24",
        
    },
    htLogo:{
        height:'64px',
        width:'64px',
    },
    htName:{
        fontSize:16,
        textAlign:'center',
        marginTop:'-1%'
    },
    companyLogo:{
        display:'flex',
        flexDirection:'column',
    },
    companyContainer:{
        display:'flex',
        justifyContent:'center'
        
    }

}