import"./cal.css"
import { Component } from "react";
class Lock extends Component{
  constructor(props){
    super(props);
    this.state={
      value:""
    }
  }
  click=(e)=>{
    this.setState({
      value:e.target.value
    }) 
  }
  render(){
    return(
        <div style={{textAlign:"center",padding:"300px",backgroundColor:"pink"}}>
          <input type="text"style={{height:"50px",backgroundColor:"grey",width:"195px"}}/><br/>
           <button style={{height:"50px",width:"100px"}}onClick={this.click}>AC</button>
           <button style={{height:"50px",width:"50px"}}onClick={this.click}>DEL</button>
           <button style={{height:"50px",width:"50px"}}onClick={this.click}>+</button><br/>
           <button style={{height:"50px",width:"50px"}}onClick={this.click}>1</button>
           <button style={{height:"50px",width:"50px"}}onClick={this.click}>2</button>
           <button style={{height:"50px",width:"50px"}}onClick={this.click}>3</button>
           <button style={{height:"50px",width:"50px"}}onClick={this.click}>*</button><br/>
           <button style={{height:"50px",width:"50px"}}onClick={this.click}>4</button>
           <button style={{height:"50px",width:"50px"}}onClick={this.click}>5</button>
           <button style={{height:"50px",width:"50px"}}onClick={this.click}>6</button>
           <button style={{height:"50px",width:"50px"}}onClick={this.click}>+</button><br/>
           <button style={{height:"50px",width:"50px"}}onClick={this.click}>7</button>
           <button style={{height:"50px",width:"50px"}}onClick={this.click}>8</button>
           <button style={{height:"50px",width:"50px"}}onClick={this.click}>9</button>
           <button style={{height:"50px",width:"50px"}}onClick={this.click}>-</button><br/>
           <button style={{height:"50px",width:"50px"}}onClick={this.click}>.</button>
           <button style={{height:"50px",width:"50px"}}onClick={this.click}>0</button>
           <button style={{height:"50px",width:"100px"}}className="span-two" onClick={this.click}>=</button>
          </div>
    )
  }
}
export default Lock;