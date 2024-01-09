import axios from 'axios';

const Post = (props) => {
    const title = props.postTitle;
    const author = props.postAuthor;
    const content = props.postContent;
    const date = props.postDate;
    const id = props.postId;
    const avatar = props.authorAvatar;

    const API_BASE = "http://localhost:8000/api/v1";

    const editPost = async (e) => {
        document.getElementById("editEntry").style.display = "block";
        document.getElementById(`${date}`).style.display = "none";
        await axios.get(`${API_BASE}/entries/${e}`)
        .then((response) => {
            console.log(response);
        })
    }

    const patchEntry = async () => {
        await axios.patch(`${API_BASE}/entries/${id}`, {
            username: author,
            title: document.getElementById("editTitle").value,
            content: document.getElementById("editBody").value
        })
        .then((response) => {
            setTimeout(() => {
                document.getElementById("postTitle").innerHTML = document.getElementById("editTitle").value;
                document.getElementById("postContent").innerHTML = document.getElementById("editBody").value;
                document.getElementById("editEntry").style.display = "none";
                document.getElementById(`${date}`).style.display = "flex";
            }, 1000)
  
        })
    }

    const cancelPatch = () => {
        document.getElementById("editEntry").style.display = "none";
        document.getElementById(`${date}`).style.display = "flex";
        document.getElementById("patchEntryButn").value = "";
        window.location.reload();
    }

    return(
        <div>
            <div id={date} style={{ display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:'rgba(9,40,101,0.8)', marginTop:'0', borderBottom:'1px solid white'}}>
                <div style={{ display:'flex', flexDirection:'row' }}>
                    <img src={avatar} alt={author} style={{ height:'64px', width:'64px', borderRadius:'60%', padding:'10px' }}/>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <h2 id="postTitle" style={{ fontFamily:"'Roboto Slab', serif", textTransform:'uppercase', color:'white' }}>{title}</h2>
                        <p style={{ marginTop:'-5%', fontFamily:"'Ubuntu', sans-serif", color:'white'}}> by <a href="#"><i style={{ color: '#709FFF'}}>{author}</i></a></p>
                    </div>
                </div>
                <hr style={{ width: '75%', borderRadius: '60%', marginTop:'-1%' }}></hr>
                <p id="postContent" style={{ color:'white', fontFamily:"'Ubuntu', sans-serif", textAlign:'justify', textWrap:'wrap', width:'80%', lineHeight:'22px', }}>{content}</p>
                <p id="date" style={{ color:'white', fontFamily:"'Ubuntu', sans-serif" }}>{date}</p>
                <div style={{ marginBottom:'5%' }}>
                    <button id="edit" style={{ padding: '10px', fontFamily: "'Roboto Slab', serif", textTransform: 'uppercase', letterSpacing: '2px', color: 'black', backgroundColor: '#709FFF', borderRadius: '5px' }} value={id} onClick={(e) => editPost(e.target.value)}>Edit</button>
                </div>
            </div>
            <div id="editEntry" style={{ display:'none', width:'85%', padding:'20px' }}>
                <form style={{ display: 'flex', flexDirection:'column', alignItems:'center'}}>
                    <label for="editTitle" style={{ color:'white', fontFamily:"'Roboto Slab', serif", marginBottom:'1%', fontSize:'1rem', letterSpacing:'2px'}}>Title</label>
                    <input id="editTitle" style={{ fontSize: '1.5rem', color: '#092865', fontFamily:"'Ubuntu', sans-serif", width:'95%', textAlign:'center', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding:'5px', borderRadius:'5px'}} value={title}></input><br></br>
                    <label for="editBody" style={{ color:'white', fontFamily:"'Roboto Slab', serif", marginBottom:'1%', fontSize:'1rem', letterSpacing:'2px'}}>Body</label>
                    <textarea id="editBody" style={{ fontSize: '1.25rem', fontFamily:"'Ubuntu, sans-serif", width: '95%', height:'300px', color: '#092865', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding:'5px', borderRadius:'5px'}}>{content}</textarea>
                </form>
                <div style={{ display:'flex', flexDirection:'row', alignItems:'center', marginBottom:'2%'}}>
                    <button id="patchEntryButn" type="submit" value="" onClick={patchEntry} style={{ padding: '10px', fontFamily: "'Roboto Slab', serif", textTransform: 'uppercase', letterSpacing: '2px', color: 'black', backgroundColor: '#709FFF', borderRadius: '5px'}}>Save</button>
                    <button type="button" onClick={cancelPatch} style={{ padding: '10px', fontFamily: "'Roboto Slab', serif", textTransform: 'uppercase', letterSpacing: '2px', color: 'black', backgroundColor: '#709FFF', borderRadius: '5px'}}>Cancel</button>
                </div>
            </div>

        </div>
        
       
    )
}

export default Post;