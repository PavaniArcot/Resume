import {Link} from "react-router-dom"; 
function About(){
    return(
        <footer style={{display:"grid",gridTemplateColumns:"50% 50%"}} >
            <div>
            <h3>Enriching and fun early years <br/> Matter preschool curriculum </h3>
            <hr></hr>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellendus cum ea in quis, corporis deleniti veritatis impedit, iste sit libero molestias facere expedita vero est ullam. Fuga, commodi optio cum necessitatibus tempore eos minima totam reiciendis iste, nobis consequatur.</p>
            </div> 
            <div>
            <img src="https://us.123rf.com/450wm/robuart/robuart1809/robuart180900392/110406625-kids-self-development-hobby-reading-of-books-for-children-girl-sitting-in-armchair-enjoying-process.jpg?ver=6"style={{width:"30%"}}/>
            </div>
            
            <section style={{display:"grid",gridTemplateColumns:"auto auto"}}>
            <div>
            <img src="https://st2.depositphotos.com/1967477/7245/v/950/depositphotos_72456615-stock-illustration-cartoon-little-boy-reading-a.jpg"style={{width:"50%"}}/>
            </div> 
            <div>
            <h3>Socio-emotional & physical <br/> Development </h3> 
            <hr></hr>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellendus cum ea in quis, corporis deleniti veritatis impedit, iste sit libero molestias facere expedita vero est ullam. Fuga, commodi optio cum necessitatibus tempore eos minima totam reiciendis iste, nobis consequatur.</p>
            </div>
            </section>
            <br></br>
           <aside style={{display:"grid",gridTemplateColumns:"50% 50%"}}>
            <div>
            <h3>Milestone tracking and <br/> Regular assessement</h3>
            <hr></hr>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellendus cum ea in quis, corporis deleniti veritatis impedit, iste sit libero molestias facere expedita vero est ullam. Fuga, commodi optio cum necessitatibus tempore eos minima totam reiciendis iste, nobis consequatur.</p>
            </div>
            <div>
            <img src="https://static9.depositphotos.com/1441191/1150/v/950/depositphotos_11503019-stock-illustration-kid-reading-open-book.jpg"style={{width:"30%"}}/>
            </div>
           </aside> 
        </footer>
    )
    

}
export default About;