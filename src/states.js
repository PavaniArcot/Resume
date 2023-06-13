//states--->pass the information within the component
//declare--{}
//mutable--update the data
//two types are there 
//1.constructor
//2.without constructor method

import {Component} from "react";
class  Type extends Component{
    constructor(props){
        super(props);
        this.state={
            id:1,
            book:"react js", 
            author:"john",
            data:0,
            value:""
        }
    }
    //setState()
    change=()=>{
        this.setState({
            id:2,
            book:"java",
            author:"vijay"
            
        })
    }
    inc=()=>{
        this.setState({
            data:this.state.data + 1 
        })
    }
    dec=()=>{
        this.setState({
            data:this.state.data - 1 
        })
    }
    reset=()=>{
        this.setState({
            data:this.state.data =0
        })
    }
    update=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
    render(){
        return(
            <div>
            <p>
                    ID:{this.state.id}<br/>
                    Book:{this.state.book}<br/>
                    Author:{this.state.author}
            </p>
            <button onClick={this.change}>update</button>
            <br/>
            <h3>Count:{this.state.data}</h3>
            <button onClick={this.inc}>inc</button>
            <button onClick={this.dec}>dec</button>
            <button onClick={this.reset}>reset</button>
            <br/><br/>
            <input type="text"onChange={this.update}/>
            <p>Current values:{this.state.value}</p>
            </div>
        )
       
    }
}
export default Type;