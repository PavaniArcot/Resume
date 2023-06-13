import {connect} from "react-redux"
import {inc} from "./action";
import {dec} from "./action";
import {reset} from "./action";
function Redux({variable,inc,dec,reset}){
    return(
        <div>
            <h3>React-Redux</h3>
            <h2>count:{variable}</h2>
            <button onClick={inc}>Inc</button>
            <button onClick={dec}>Dec</button>
            <button onClick={reset}>reset</button> 
        </div>
    )
}
const mapStateToProps=state=>({
    variable:state
})
export default connect(mapStateToProps,{inc,dec,reset}) (Redux);
