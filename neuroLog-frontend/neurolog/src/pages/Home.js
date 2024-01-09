import {React, useState, useEffect} from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';

function Home() {

  useEffect(() => {
    let user = localStorage.getItem("user");
    if(user !== null){
      setToken(user.token);
    }
  }, [])

  const [token, setToken] = useState("");


  return(
    <div className="App">
      {token === ""
        ? <Login />
        : <Dashboard />
      }
      <Footer />
         
    </div>
  )
}
  
export default Home;
