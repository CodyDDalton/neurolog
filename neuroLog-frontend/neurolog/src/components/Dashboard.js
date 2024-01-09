import React from 'react';
import axios from 'axios';
import Nav from './Nav';
import Entry from './Entry';
import Post from './Post';
import Log from './Log';
import LogItem from './LogItem';
import Astrid from '../images/astrid_joy.png';
import Default from '../images/default.png';

const Dashboard = () => {

    const API_BASE = "http://localhost:8000/api/v1";

    const user = JSON.parse(localStorage.getItem("user"));
    const name = user.firstName;
    const username = user.username;

    const posts = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        const username = user.username;
        await axios.get(`${API_BASE}/entries`)
        .then((response) => {
            let entries = response.data;
            let userEntries = entries.filter((entry) => entry.username === username).reverse();
            localStorage.setItem("posts", JSON.stringify(userEntries));
        } )
    }

    const logs = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        const username = user.username;
        await axios.get(`${API_BASE}/logs`)
        .then((response) => {
            let logs = response.data;
            let userLogs = logs.filter((log) => log.username === username).reverse();
            localStorage.setItem("logs", JSON.stringify(userLogs));
        })
        .catch ((error) => {
            console.error(error)
        })
    }

    posts();
    logs();

    const dashPosts = JSON.parse(localStorage.getItem("posts"));
    const userPosts = []

    for(let i = 0; i <= dashPosts.length-1; i++){
        let post = dashPosts[i];
        userPosts.push(post);
    }

    const userLogs = JSON.parse(localStorage.getItem("logs"));

    const writeEntry = () => {
        document.getElementById("left").style.width = "37%";
        document.getElementById("middle").style.display = "flex";
    }

    const writeLog = () => {
        document.getElementById("log-zone").style.display = "flex";
    }

    const postLog = async () => {

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        let now = mm + '/' + dd + '/' + yyyy;
        console.log(now)

        await axios.post(`${API_BASE}/logs`, {
            username: username,
            mood: localStorage.getItem("mood"),
            content: document.getElementById("log-body").value,
            created_at: now
           }, {
            headers: {
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin":"*"
            }
           })
           .then(() => {
                logs();
                window.location.reload();
           })
    }

    const cancelLog = () => {
        document.getElementById("log-zone").style.display = "none";
    }

    const postEntry = async () => {

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        let now = mm + '/' + dd + '/' + yyyy;
        
       await axios.post(`${API_BASE}/entries`, {
        username: username,
        title: document.getElementById("title").value,
        content: document.getElementById("entryBody").value,
        created_at: now
       }, {
        headers: {
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin":"*"
        }
       })
       .then(() => {
            posts();
            window.location.reload();
       })
    }

    const cancelEntry = () => {
        document.getElementById("left").style.width = "75%";
        document.getElementById("middle").style.display = "none";
    }

    return(
        <div className="dashboard-page">
            <Nav />
            <div className="dashboard-undernav">
                <img src ={Astrid} alt="Astrid says hello!" style={{ width:'25%' }} />
                <h1 style={{ fontFamily:"'Roboto Slab', serif", color: 'white', fontSize:'2rem'}}>Welcome back, <i style={{ color: '#709FFF'}}>{name}</i> !</h1>
                    
                </div>
                <div style={{ display:'flex', flexDirection:'row', backgroundColor:'#092865', justifyContent:'center', width:'98%', marginLeft:'1%', borderRadius:'0px 0px 15px 15px'}}>
                    <button type="button" onClick={writeLog} style={{ adding: '10px', fontFamily: "'Roboto Slab', serif", textTransform: 'uppercase', letterSpacing: '2px', color: 'black', backgroundColor: '#709FFF', borderRadius: '5px', padding:'20px', marginBottom:'1%', width:'25%'}}>Post Log</button>
                    <button type="button" onClick={writeEntry} style={{ adding: '10px', fontFamily: "'Roboto Slab', serif", textTransform: 'uppercase', letterSpacing: '2px', color: 'black', backgroundColor: '#709FFF', borderRadius: '5px', padding:'20px', marginBottom:'1%', width:'25%'}}>Post Entry</button>
                </div>
                <div id="log-zone" style={{ display:'none', flexDirection:'column', width:'98%', justifyContent:'center', alignItems:'center', marginTop:'2%', backgroundColor:'rgba(9,40,101,0.8)', marginLeft:'1%'}}>
                    <Log />
                    <div style={{ marginBottom:'5%'}}>
                        <button id="postLog" style={{ padding: '10px', fontFamily: "'Roboto Slab', serif", textTransform: 'uppercase', letterSpacing: '2px', color: 'black', backgroundColor: '#709FFF', borderRadius: '5px' }} onClick={postLog}>Post</button>
                        <button id="cancelLog" style={{ padding: '10px', fontFamily: "'Roboto Slab', serif", textTransform: 'uppercase', letterSpacing: '2px', color: 'black', backgroundColor: '#709FFF', borderRadius: '5px' }} onClick={cancelLog}>Cancel</button>
                    </div>
                </div>
            <div style={{ display:'flex', flexDirection:'row'}}>
                <div id="left" style={{ display:'flex', flexDirection:'column', height:'85vh', overflow:'scroll', width:'75%', marginLeft:'1%', marginTop:'1%', marginBottom:'1%', border:'1px solid white'}}>
                <p style={{ backgroundColor:'white', width:'100%', marginTop:'0', fontSize:'1.5rem', marginBottom:'0', fontFamily:"'Ubuntu', sans-serif", color:'rgba(0,0,0,0.9)'}}>Recent Posts</p>
                    {userPosts.length > 0
                    ? userPosts.map((post) => 
                        <Post 
                            postTitle={post.title}
                            postAuthor={post.username}
                            postContent={post.content}
                            postDate={post.created_at}
                            postId={post._id}
                            authorAvatar={Default}
                    /> )
                    : <div>
                        <img src={Astrid} alt="Astrid" style={{marginTop:'5%'}} />
                        <h1 style={{ color:'white', fontFamily:"'Roboto Slab', serif" }}>To write your first entry, click on the 'post entry' button!</h1>
                    </div>
                    
                        
                    }
                </div>
                <div id="middle" style={{ display:'none', flexDirection:'column', alignItems:'center', border: '3px solid #092865', marginBottom:'1%', width:'37%', marginTop:'1%', marginLeft:'1%', height:'85vh', backgroundColor:'rgba(9,40,101,0.8)' }}>
                    <Entry />
                    <div style={{ display:'flex', flexDirection:'row', alignItems:'center', marginBottom:'2%'}}>
                        <button type="submit" onClick={postEntry} style={{ padding: '10px', fontFamily: "'Roboto Slab', serif", textTransform: 'uppercase', letterSpacing: '2px', color: 'black', backgroundColor: '#709FFF', borderRadius: '5px'}}>Post</button>
                        <button type="button" onClick={cancelEntry} style={{ padding: '10px', fontFamily: "'Roboto Slab', serif", textTransform: 'uppercase', letterSpacing: '2px', color: 'black', backgroundColor: '#709FFF', borderRadius: '5px'}}>Cancel</button>
                    </div>  
                </div>
                <div id="right" style={{ display: 'flex', flexDirection:'column', height:'85vh', width:'21%', border: '1px solid white', marginLeft:'1%', marginTop:'1%', marginRight:'1%', alignItems:'center', backgroundColor:'rgba(255, 255, 255, 0.5)', overflow:'scroll'}}>
                    <p style={{ backgroundColor:'white', width:'100%', marginTop:'0', fontSize:'1.5rem', marginBottom:'0', fontFamily:"'Ubuntu', sans-serif", color:'rgba(0,0,0,0.9)'}}>Mood Log</p>
                    {userLogs.length > 0
                    ? userLogs.map((log) => 
                        <LogItem 
                            mood={log.mood}
                            content={log.content}
                            created_at={log.created_at}
                    /> )
                    : <LogItem
                        mood="Mood"
                        content="To make your fist log, click 'Post Log'!"
                        created_at="1/1/23"
                        />
                    }
                    
                </div>
                
            </div>
            
            
            
        </div>
    )
}

export default Dashboard;