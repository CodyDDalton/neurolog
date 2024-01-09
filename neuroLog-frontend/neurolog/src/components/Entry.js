const Entry = (props) => {

    return(
        <div id="entry" style={{ width:'85%', padding:'20px' }}>
            <form style={{ display: 'flex', flexDirection:'column', alignItems:'center'}}>
                <label for="title" style={{ color:'white', fontFamily:"'Roboto Slab', serif", marginBottom:'1%', fontSize:'1rem', letterSpacing:'2px'}}>Title</label>
                <input id="title" style={{ fontSize: '1.5rem', color: '#092865', fontFamily:"'Ubuntu', sans-serif", width:'95%', textAlign:'center', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding:'5px', borderRadius:'5px'}}></input><br></br>
                <label for="entryBody" style={{ color:'white', fontFamily:"'Roboto Slab', serif", marginBottom:'1%', fontSize:'1rem', letterSpacing:'2px'}}>Body</label>
                <textarea id="entryBody" style={{ fontSize: '1.25rem', fontFamily:"'Ubuntu, sans-serif", width: '95%', height:'300px', color: '#092865', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding:'5px', borderRadius:'5px'}}></textarea>
            </form>
        </div>
    )
}

export default Entry;