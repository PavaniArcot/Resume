import { Component } from "react";
import PropTypes from "prop-types"
class Pavani extends Component{
    render(){
        const {name,city,age,state}=this.Props
        return(
            <div>
               <p>
               name:{name}
                city:{city}
                age:{age}
                state:{state}
               </p>
            </div>
        )
    }
}

Pavani.PropTypes={
    name:PropTypes.string,
    city:PropTypes.array,
    age:PropTypes.number,
    state:PropTypes.string 
}
Pavani.defaultProps={
     name:"raghav",
     city:["bnglr","chennai","hyd"],
     age:25,
     state:"karnataka"
}
export default Pavani;
