import React from 'react';
import Nav from '../components/Nav';
import LogItem from '../components/LogItem';
import Post from '../components/Post';
import Footer from '../components/Footer';
import Default from '../images/default.png';
import Astrid from '../images/astrid_default.png';
import axios from 'axios';

function Archive(){

    const API_BASE = "http://localhost:8000/api/v1";

    const logs = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        const username = user.username;
        await axios.get(`${API_BASE}/logs`, {
            username: username
        })
        .then((response) => {
            localStorage.setItem("logs", JSON.stringify(response.data));
        })
        .catch ((error) => {
            console.error(error)
        })
    }

    logs();

    const user = JSON.parse(localStorage.getItem("user"));
    const name = user.firstName;
    const username = user.username;

    const userLogs = JSON.parse(localStorage.getItem("logs"));
    const userPosts = JSON.parse(localStorage.getItem("posts"));

    const time = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "2023", "2022", "2021"];

    return(
        <div className="App">
            <Nav />
            <div style={{ display:'flex', flexDirection: 'row' , width:'100%', marginTop:'1%', marginBottom:'1%', justifyContent:'center' }}>
                <div id="archivePosts" style={{ display:'flex', flexDirection:'column', width:'70%', backgroundColor:'#092865c5', overflow:'scroll'}}>
                    <h1 style={{ backgroundColor:'white', marginTop:'0', marginBottom:'0', fontFamily:"'Roboto Slab', serif", color:'rgba(0,0,0,0.8)'}}>{name}'s Journal Archive</h1>
                    {userPosts.length > 0
                        ? userPosts.map((post) =>
                            <Post 
                                postTitle={post.title}
                                postAuthor={post.username}
                                postContent={post.content}
                                postDate={post.created_at}
                                postId={post._id}
                                authorAvatar={Default}

                            />)
                        : <div>
                            <img src={Astrid} alt="Astrid" style={{marginTop:'5%'}} />
                            <h1 style={{ color:'white', fontFamily:"'Roboto Slab', serif" }}>You haven't posted anything yet, {name}!</h1>
                        </div>
                        

                    }
                </div>
                <div style={{ height:'85vh', width:'27%', display:'flex', flexDirection:'column', marginLeft:'1%'}}>
                    <div style={{ display: 'flex', flexDirection:'column', height:'85vh', border: '1px solid white', marginLeft:'1%', marginTop:'1%', marginRight:'1%', alignItems:'center', backgroundColor:'rgba(255, 255, 255, 0.5)', overflow:'scroll' }}>
                        <p style={{ backgroundColor:'white', width:'100%', marginTop:'0', fontSize:'1.5rem', marginBottom:'0'}}>Mood Log</p>
                            {userLogs.map((item) =>
                                <LogItem 
                                    mood = {item.mood}
                                    content = {item.content}
                                    created_at = {item.created_at}

                                />
                            )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Archive;