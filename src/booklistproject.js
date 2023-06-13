function Alexa(Props){
    return(
        <div>
            <p style={{border:"0px"}}>
                <img src={Props.img} style={{width:"10%"}}/><br/>
                Title:{Props.title}<br/>
                Author:{Props.author}

            </p>
        </div>
    )
}
function Siri(){
    return(
        <div>
            <Alexa img ="https://m.media-amazon.com/images/I/91UE0WbMKdL.jpg" title="Where the crawdads sing" author="Rachel" style="border:10px soloid black"/>
            <Alexa img ="https://m.media-amazon.com/images/I/91UE0WbMKdL.jpg" title="Where the crawdads sing" author="Rachel"/>
            <Alexa img ="https://m.media-amazon.com/images/I/91UE0WbMKdL.jpg" title="Where the crawdads sing" author="Rachel"/>
            <Alexa img ="https://m.media-amazon.com/images/I/91UE0WbMKdL.jpg" title="Where the crawdads sing" author="Rachel"/>
        </div>
    )
}
export default Siri;