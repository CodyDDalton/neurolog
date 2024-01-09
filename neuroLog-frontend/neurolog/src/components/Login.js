import Astrid from '../images/astrid_joy.png';
import XMark from '../images/x-mark.png';
import Checkmark from '../images/checkmark.png';
import axios from 'axios';

const Login = () => {

    const API_BASE = process.env.NODE_ENV === 'development'
    ? "http://127.0.0.1:8000/api/v1"
    : process.env.REACT_APP_BASE_URL;

    const registerUser = () => {
        document.getElementById("registrationForm").style.display = "flex";
        document.getElementById("loginPage").style.display = "none";
    }

    const cancelRegister = () => {
        document.getElementById("registrationForm").style.display = "none";
        document.getElementById("loginPage").style.display = "flex";
    }

    const checkAvailable = async () => {
        let entry = document.getElementById("chooseUser").value;
        try {
            await axios.get(`${API_BASE}/neurolog-users`)
            .then((response) => {
              let usernames = response.data.map(user => user.username);
              let find = usernames.find((user) => user === entry);
              if(find === undefined){
                document.getElementById("usernameIndicator").src = Checkmark;
                document.getElementById("usernameIndicator").alt = "Available";
              } else {
                document.getElementById("usernameIndicator").src = XMark;
                document.getElementById("usernameIndicator").alt = "Unavailable";
              }
            })
            .catch((error) => {
              console.log(error)
            })
          } catch (error) {
            console.log(error)
          }
    }

    const checkValid = () => {
        if(document.getElementById("name").value === ""){
            document.getElementById("nameIndicator").src = XMark
            document.getElementById("nameIndicator").alt = "invalid"
        }
        if(document.getElementById("name").value !== "" && document.getElementById("name").value.length > 2){
            document.getElementById("nameIndicator").src = Checkmark
            document.getElementById("nameIndicator").alt = "valid"
        }
        if(document.getElementById("chooseUser").value === "" || document.getElementById("chooseUser").value.length < 6){
            document.getElementById("usernameIndicator").src = XMark
            document.getElementById("usernameIndicator").alt = "invalid"
        }
        if(document.getElementById("chooseUser").value.length >= 6){
            checkAvailable();
        }
        if(document.getElementById("email").value === ""){
            document.getElementById("emailIndicator").src = XMark
            document.getElementById("emailIndicator").alt = "invalid"
        }
        if(document.getElementById("email").value !== ""){
            document.getElementById("emailIndicator").src = Checkmark
            document.getElementById("emailIndicator").alt = "valid"
        }
        if(document.getElementById("choosePass").value === "" || document.getElementById("choosePass").value.length < 8){
            document.getElementById("passIndicator").src = XMark
            document.getElementById("passIndicator").alt = "invalid";
        }
        if(document.getElementById("choosePass").value.length >= 8){
            document.getElementById("passIndicator").src = Checkmark
            document.getElementById("passIndicator").alt = "valid"
        }
        if(document.getElementById("confirmPass").value === ""){
            document.getElementById("confirmPassIndicator").src = XMark
            document.getElementById("confirmPassIndicator").alt = "invalid"
        }
        if(document.getElementById("confirmPass").value !== "" && document.getElementById("confirmPass").value === document.getElementById("choosePass").value){
            document.getElementById("confirmPassIndicator").src = Checkmark
            document.getElementById("confirmPassIndicator").alt = "valid"
        }
    }

    const confirmRegister = async () => {
        
            const newUser = await axios.post(`${API_BASE}/neurolog-users/register`, {
                firstName: document.getElementById("name").value,
                username: document.getElementById("chooseUser").value,
                email: document.getElementById("email").value,
                country: document.getElementById("country").value,
                gender: document.getElementById("gender").value,
                password: document.getElementById("choosePass").value
            })
            .then(() => {
                console.log(newUser)
            })
            .catch((error) => {
                console.error(error.message)
            })
    }

    const handleLogin = async () => {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        let headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };

        let data = {
            username, password
        }

            await axios.post(`${API_BASE}/neurolog-users/login`, data, {
                headers: headers
            })
            .then(response => {
                console.log(response);
                if(response.data.token) {
                    localStorage.setItem("user", JSON.stringify({
                        firstName: response.data.firstName,
                        username: response.data.username,
                        email: response.data.email,
                        country: response.data.country,
                        gender: response.data.gender,
                        password: response.data.password,
                        token: response.data.token
                    }))
                    setTimeout(() => {
                        window.location.reload()
                    }, 1000);
                }
                return response.data
            })
            .catch(error => {
                console.log(error);
            })
        }
    
    return(
        <div style={{ width: '100%', height: '100%' }}>
            <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                   <div id="loginPage" style={{ backgroundColor: 'rgba(9, 40, 101, 0.8)', border:'5px solid #092865', width: '50%', marginTop: '2%', marginBottom:'2%', alignItems: 'center', height: '85%', display: 'flex', flexDirection:'column', justifyContent:'center', padding: '20px', borderRadius: '20px'}}>
                        <img src={Astrid} alt="Astrid is happy to see you!" style={{ width: '25%', }}/>
                        <h3 style={{ fontFamily: "'Roboto Slab', serif", fontSize: '1rem', textTransform: 'uppercase', textAlign: 'center', color: 'white', backgroundColor: '#709FFF', padding: '20px', borderRadius: '60%'}}>Welcome to NeuroLog<b style={{ fontSize:'1.25rem'}}>!</b><br></br>Please Login or Register</h3>
                    
                        <div style={{ display: 'flex', flexDirection: 'column', width: '75%', marginLeft:'12%', marginRight:'12%', textAlign: 'center', padding: '10px', alignItems: 'center'}}>
                            <label for="username" style={{ padding: '5px', fontFamily: "'Roboto Slab', serif", textTransform: 'uppercase', color: 'white', marginBottom: '2%'}}>Username</label>
                            <input id="username" type="text" style={{ padding: '5px', fontSize: '1rem', textAlign: 'center', fontFamily: "'Roboto Slab', serif", width: '75%', borderRadius: '10px' }}></input>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '75%', marginLeft:'12%', marginRight:'12%', textAlign: 'center', padding: '10px', alignItems: 'center' }}> 
                            <label for="password" style={{ padding: '5px', fontFamily: "'Roboto Slab', serif", textTransform: 'uppercase', color: 'white', marginBottom: '2%'}}>Password</label>
                            <input id="password" type="password" style={{ padding: '5px', fontSize: '1rem', textAlign: 'center', fontFamily: "'Roboto Slab', serif", width: '75%', borderRadius: '10px' }}></input>
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: "column", marginTop:'2%', width:'60%'}}>
                            <button id="loginButn" className="loginButn" style={{ padding: '10px', fontFamily: "'Roboto Slab', serif", textTransform: 'uppercase', letterSpacing: '2px', color: 'black', backgroundColor: '#709FFF', borderRadius: '5px', display:'block', width:'100%' }} onClick={handleLogin}>Login</button>
                            <button id="registerButn" className="loginButn" style={{ padding: '10px', fontFamily: "'Roboto Slab', serif", textTransform: 'uppercase', letterSpacing: '2px', color: 'black', backgroundColor: '#709FFF', borderRadius: '5px', display:'block'}} onClick={registerUser}>Register</button>
                        </div>
                    </div>
                    <div id="registrationForm" style={{ display:'none', flexDirection:'column', marginTop:'2%', marginBottom: '2%', border: "5px solid #092865", borderRadius:'15px', color:'white', backgroundColor:'rgba(9, 40, 101, 0.8)', width:'50%', padding:'20px', alignItems:'center' }}>
                        <h3 style={{ fontSize: '2.5rem', color:'white', fontFamily:"'Roboto Slab', serif", textTransform:'uppercase'}}>Registration Form</h3>
                        <hr style={{ width: '75%', borderRadius: '60%', marginTop:'-5%'}}></hr>
                        <form style={{ display:'flex', flexDirection:'column', alignItems:'center', fontFamily:"'Ubuntu',sans-serif", marginBottom:'5%' }}>
                            <div style={{ display:'flex', flexDirection:'row', marginTop:'2%', marginLeft:'5%'}}>
                                <div style={{ display:'flex', flexDirection:'row', justifyContent:'center'}}>
                                    <img id="nameIndicator" src="" alt="" style={{ padding:'5px', width:'25px', marginTop:'8%'}}/>
                                    <div style={{ display: 'flex', flexDirection:'column'}}>
                                        <label for="name">First Name:</label>
                                        <input id="name" onChange={checkValid} maxLength="12" style={{ padding:'5px', fontSize:'1rem', textAlign:'center', borderRadius:'10px'}}></input>     
                                    </div>
                                    
                                </div>
                                
                                <div style={{ display:'flex', flexDirection:'row', justifyContent:'center'}}>
                                    <img id="usernameIndicator" src="" alt="" style={{ padding:'5px', width:'25px', marginTop:'8%' }} />
                                    <div style={{ display: 'flex', flexDirection:'column'}}>
                                        <label for="username">Choose a Username:</label>
                                        <input id="chooseUser" onChange={checkValid} maxLength="12" style={{ padding:'5px', fontSize:'1rem', textAlign:'center', borderRadius:'10px'}}></input>
                                    </div>
                                    
                                </div>
                            </div>
                            <div style={{ display:'flex', flexDirection:'row', width:'100%', marginTop:'10%', marginLeft:'5%', justifyContent:'center', alignItems:'center'}}>
                                <div style={{ display:'flex', flexDirection:'row', justifyContent:'center'}}>
                                    <img id="emailIndicator" src="" alt="" style={{ padding:'5px', width:'25px', marginTop:'6%' }}/>
                                    <div style={{ display: 'flex', flexDirection:'column'}}>
                                        <label for="email">Email:</label>
                                        <input id="email" type="email" onChange={checkValid} maxLength="320" style={{ padding:'5px', fontSize:'1rem', textAlign:'center', marginRight:'35px', borderRadius:'10px'}}></input>
                                    </div>
                                    
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row', width:'100%' }}>
                                    <div style={{ display:'flex', flexDirection:'row', justifyContent:'center',}}>
                                        <div style={{ display: 'flex', flexDirection:'column'}}>
                                            <label for="country">Country:</label>
                                            <select id="country" required style={{ padding:'5px', fontSize: '1rem', width:'125px', textAlign:'center', borderRadius:'10px' }}>
                                                <option>---------</option>
                                                <option>United States</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div style={{ display:'flex', flexDirection:'row', }}>
                                        <div style={{ display: 'flex', flexDirection:'column'}}>
                                            <label for="gender">Gender:</label>
                                            <select id="gender" required style= {{ padding: '5px', fontSize:'1rem', width: '75px', marginLeft:'7px', textAlign:'center', borderRadius:'10px'}}>
                                                <option>---------</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display:'flex', flexDirection:'row', marginTop:'10%', marginLeft:'5%'}}>
                                <div style={{ display:'flex', flexDirection:'row', justifyContent:'center'}}>
                                    <img id="passIndicator" src="" alt="" style={{ padding:'5px', width:'25px', marginTop:'8%' }} />
                                    <div style={{ display: 'flex', flexDirection:'column'}}>
                                        <label for="choosePass">Choose a Password:</label>
                                        <input id="choosePass" type="password" maxLength="12" onChange={checkValid} style={{ padding:'5px', fontSize:'1rem', textAlign:'center', borderRadius:'10px'}}></input>
                                    </div>
                                    
                                </div>
                                <div style={{ display:'flex', flexDirection:'row', justifyContent:'center'}}>
                                    <img id="confirmPassIndicator" src="" alt="" style={{ padding:'5px', width:'25px', marginTop:'8%' }}/>
                                    <div style={{ display: 'flex', flexDirection:'column'}}>
                                        <label for="confirmPass">Confirm Password:</label>
                                        <input id="confirmPass" type="password" maxLength="12" onChange={checkValid} style={{ padding:'5px', fontSize:'1rem', textAlign:'center', borderRadius:'10px' }}></input>
                                    </div>
                                </div>    
                            </div>
                                <div style={{ display:'flex', flexDirection:"column", alignItems:'center', marginTop:'5%', width:'75%', marginLeft:'5%'}}>
                                    <button id="confirmRegister" className="registerButn" style={{ padding: '10px', fontFamily: "'Roboto Slab', serif", textTransform: 'uppercase', letterSpacing: '2px', color: 'black', backgroundColor: '#709FFF', borderRadius: '5px', width:'100%' }} onClick={confirmRegister}>Submit</button>
                                    <button id="cancelRegister" className="registerButn" style={{ padding: '10px', fontFamily: "'Roboto Slab', serif", textTransform: 'uppercase', letterSpacing: '2px', color: 'black', backgroundColor: '#709FFF', borderRadius: '5px', width:'100%'}} onClick={cancelRegister}>Cancel</button>
                                </div>
                        </form>
                    </div>
            </div>
        </div>
    ) 
}

export default Login;