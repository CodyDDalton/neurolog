import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("user");
        setTimeout(() => {
            window.location.reload();
        }, 1000)
    }

    return(
        <nav style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', marginTop: '0%',  }}>
            <button id="navButn" style={{ width: '25%', padding: '10px', fontFamily: "'Roboto Slab', serif", textTransform: 'uppercase', letterSpacing: '2px', color: 'white', backgroundColor: '#092865'}} onClick={(() => navigate("/"))}>Dashboard</button>
            <button id="navButn" style={{ width: '25%', padding: '10px', fontFamily: "'Roboto Slab', serif", textTransform: 'uppercase', letterSpacing: '2px', color: 'white', backgroundColor: '#092865'}} onClick={(() => navigate("/archive"))}>Archive</button>
            <button id="navButn" style={{ width: '25%', padding: '10px', fontFamily: "'Roboto Slab', serif", textTransform: 'uppercase', letterSpacing: '2px', color: 'white', backgroundColor: '#092865'}} onClick={(()=> navigate("/info") )}>Info</button>
            <button id="navButn" style={{ width: '25%', padding: '10px', fontFamily: "'Roboto Slab', serif", textTransform: 'uppercase', letterSpacing: '2px', color: 'white', backgroundColor: '#092865'}} onClick={handleLogout}>Logout</button>
        </nav>
    )
}

export default Nav;