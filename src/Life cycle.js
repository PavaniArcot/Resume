import { Component } from "react";

class Shift extends Component{
    constructor(){
        super();
        this.state={
            data:"we are learning react js"
        }
    }
    componentWillMount(){
        alert("learnig life cycle method")
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("para2").innerHTML="previous state is"+prevState.data
    }
    render(){
        return(
            <div>
             <p>{this.state.data}</p>
             <p id="para"></p>
             <button onClick={this.delete}>delete</button>
            </div>
        )
    }
    componentDidMount(){
        setTimeout(()=>{
       this.setState({
        data:"javascript"
       })
        },2000)
    }
    componentWillUpdate(){
        alert("we are updating the state values...")
    }
    componentDidUpdate(){
        document.getElementById("para").innerHTML="updated state is"+this.state.data
    }
    shouldComponentUpdate(){
        return true
    }
    delete=()=>{
        this.setState({
            data:true
        })
    }
}
export default Shift;