import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../images/searchIcon.png';
import { data } from '../pages/Search';

function SearchBar(){
    return(
        <header style={styles.header}>
            <label for ="selectState">Select U.S. State</label>
            
            <div style={styles.searchSpot}>
                <Link to="/Search"><img style={styles.searchIcon} src={SearchIcon} alt="search"></img></Link>
            </div>
            <div>
                <input type="text" style={styles.searchInput} placeholder="Search GLOPP"></input>
            </div>
        </header>
    )
}
export default SearchBar;

const styles = {
    header:{
        backgroundColor:"#3e3c63",
        justifyContent:'justify-between',
        display:'flex',
        flexDirection:'row'
    },
    searchSpot:{
        padding:"5px",
        marginLeft:'2%',
        marginRight:'30%',

    },
    searchIcon:{
        marginTop:'10%',
    },
    search:{
        textSize:36,
        textAlign:"center"
    },
    searchInput:{
        marginTop:'15%',
        padding:'20px 200px 20px 10px',
        marginBottom:'15%',
        fontSize:24,
        borderRadius:'20px'
    }
}