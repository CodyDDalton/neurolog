import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Astrid from '../images/astrid_default.png';
import Creator from '../images/neurolog-creator.jpg';

function Info(){

    return(
        <div id="infoPage">
            <Nav />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: "#092865", opacity: '0.95', width: '98%', marginTop:'1%', marginBottom: '1%', borderRadius: '5px', alignItems: 'center'}}>
                    <h3 style={{ textAlign: 'center', color: 'white', fontFamily: "'Roboto Slab', serif", fontSize: '2rem', textTransform:'uppercase'}}>Our Mission</h3>
                    <hr style={{ width: '75%', borderRadius: '60%', marginTop:'-1%'}}></hr>
                    <p style={{ lineHeight: '1.5', inlineSize: '65%', color: 'rgba(255, 255, 255, 0.95', fontFamily: "'Ubuntu', sans-serif", fontSize: '1rem', letterSpacing: '2px'}}>
                    For many of us, mental health is a daily struggle. It's a battle from sunrise to sunset, from the moment we awaken to the moment we fall asleep. Anxiety, depression, PTSD, ADHD, and other mood, behavioral, or development disorders afflict roughly 20% of adults and - in the U.S alone - nearly 22% of children.<br></br><br></br>
                    The science shows the most effective forms of treatment include medication and therapy. Yet, this is not a passive process. Even equipped with the best-suited medications and the best-trained mental health professionals, there is a large onus of responsibility on the individual to participate in their recovery and treatment. <br></br><br></br>
                    One of the early obstacles to recovery is a lack of self-awareness - that is, the diminished degree to which you understand yourself and what internal and external experiences may trigger your mental health struggles. The process of therapy can be helped along a great deal by becoming aware of these triggers and internal reactions, and NeuroLog has been designed to assist in your journey of self-discovery. <br></br><br></br>
                    It is our mission to assist you on your mental health journey by providing prompts for introspection and analytics related to your entries for the purpose of suggesting potential causal relationships between your mental health experiences and the events of your daily life. It is up to you to determine if our suggestions make sense to you, and it is up to you and your therapist to discover strategies for treatment. <br></br><br></br>
                    NeuroLog is not a replacement for mental health treatment. It is not the equivalent of seeing a licensed professional.</p>
                    
                    <h3 style={{ textAlign: 'center', color: 'white', fontFamily: "'Roboto Slab', serif", textTransform:'uppercase', fontSize: '2rem'}}>Meet Astrid</h3>
                    <hr style={{ width: '75%', borderRadius: '60%', marginTop: '1%'}}></hr>
                    <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                        <img src={Astrid} alt="Astrid pic" />
                        <p style={{ lineHeight: '1.5', inlineSize: '65%', color: 'rgba(255, 255, 255, 0.95', fontFamily: "'Ubuntu', sans-serif", fontSize: '1rem', letterSpacing: '2px'}}>
                        Astrid is a curious little robot with quite the interest in human beings. It's her job at NeuroLog to check in with you, ask you the hard questions, and present to you some of her possible findings. Astrid will be your companion along your journey using NeuroLog; here to help you: </p>
                        <ul style={{ lineHeight: '1.5', inlineSize: '55%', color: 'rgba(255, 255, 255, 0.95', fontFamily: "'Ubuntu', sans-serif", fontSize: '1rem', letterSpacing: '2px'}}>
                            <li>Expand upon your daily logs for crucial relevant information;</li><br></br><br></br>
                            <li>Understand the nature of the analytical data being collected about your daily patterns;</li><br></br><br></br>
                            <li>And provide emotional support for the intense process of therapy and mental health recovery.</li>
                        </ul>
                    </div>
                    <h3 style={{ textAlign: 'center', color: 'white', fontFamily: "'Roboto Slab', serif", textTransform:'uppercase', fontSize: '2rem'}}>Making NeuroLog</h3>
                    <hr style={{ width: '75%', borderRadius: '60%', marginTop:'-1%'}}></hr>
                    <p style={{ lineHeight: '1.5', inlineSize: '65%', color: 'rgba(255, 255, 255, 0.95', fontFamily: "'Ubuntu', sans-serif", fontSize: '1rem', letterSpacing: '2px'}}>
                        NeuroLog is the concept and creation of Cody Dalton, a Web Development student at Full Sail University. As part of Cody's education, he was assigned a project to be completed over three months. As part of this project, Cody conducted market research, wrote project proposals, and set forth on executing an idea for a helpful mental health journaling app.<br></br><br></br>
                        Cody himself deals with anxiety, ADHD, and the after-effects of emotional trauma. He is also part of a family and extended family of individuals with mental health struggles of their own. In Cody's experiences undergoing therapy and working through mental health difficulties on a daily basis, an idea was hatched for an application that could be used to
                        help others with similar problems. At most, he says, the app could be used to help individuals through the process of therapy along with a licensed professional. At least, it could provide support and comfort for users engaging in the battle against mental illness every day.<br></br>
                    </p><br></br>
                    <div style={{ display: 'flex', flexDirection: 'row', backgroundColor:'rgba(255, 255, 255, 0.95', borderRadius:'20px', color:'#092865', width: '65%'}}>
                        <img src={Creator} alt="Cody Dalton, creator of NeuroLog" style={{ height: '250px', padding:'20px', borderRadius:'50%'}} />
                        <p style={{  lineHeight: '1.5', inlineSize: '80%', padding:'20px', fontFamily: "'Ubuntu', sans-serif", fontSize: '1rem', letterSpacing: '2px'}}><strong>"I just want you all to know you're not alone in this. It's easy to think that you are, depending on the people you have around you. But, with NeuroLog, I just want you to know that Astrid and I are here for you. No matter how hopeless it may sometimes seem, I promise you it will get better. Put in your best efforts. Journal regularly. You won't believe the things you'll learn, 
                            and the progress you'll make."</strong><br></br><br></br>
                            
                            - Cody Dalton
                        </p>
                    </div>
                    <br></br><br></br>
                    
                </div>

            </div>
            
            
            <Footer />
        </div>

    )
}

export default Info;