const LogItem = (props) => {

    const mood = props.mood;
    const content = props.content;
    const date = props.created_at;

    return(
        <div style={{ display:"flex", flexDirection:'column', alignItems:'center', marginBottom:'1%', backgroundColor:'rgba(9, 40, 101, 0.8)', width:'100%', marginTop:'0', borderBottom:'1px solid white'}}>
            <div style={{ display:'flex', flexDirection:'column' }}>
                <p style={{ color:'white', fontFamily:"'Roboto Slab', serif", textTransform:'uppercase', padding:'10px', marginTop:'-5%', marginBottom:'-10%'}}>{mood}</p>
                <p style={{ color:'#709FFF', fontFamily:"'Ubuntu', sans-serif", fontStyle:'italic', marginTop:'5%', marginBottom:'-5%'}}>{content}</p>
            </div>
           <p style={{ fontFamily:"'Roboto Slab', serif", color:'white', fontSize:'.75rem' }}> at {date}</p>

        </div>
    )
}

export default LogItem;