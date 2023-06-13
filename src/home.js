function Home(){
    return(
        <header style={{display:"grid",gridTemplateColumns:"50% 50%",padding:"20px",backgroundColor:"pink"}}>
            <div>
            <p>Kids Learning Center</p>
            <hr></hr>
            <h3>New Approach to<br/>Kids education</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque repellendus cum ea in quis, corporis deleniti veritatis impedit, iste sit libero molestias facere expedita vero est ullam. Fuga, commodi optio cum necessitatibus tempore eos minima totam reiciendis iste, nobis consequatur.</p>
            <hr></hr>
            <button style={{backgroundColor:"blue"}}>Learn more</button>
            </div>
            <div>
            <img src="https://static9.depositphotos.com/1441191/1150/v/950/depositphotos_11503019-stock-illustration-kid-reading-open-book.jpg"style={{width:"30%",borderRadius:"50%"}}/>   
            </div>
        </header>
    )
}
export default Home;