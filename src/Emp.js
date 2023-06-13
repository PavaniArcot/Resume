import EmpList from "./EmpList";
import EmpForm from "./EmpForm";
import EmpEdit from "./EmpEdit";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function Emp(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<EmpList/>}/>
                    <Route path="/form" element={<EmpForm/>}/>
                    <Route path="/employe/:empId" element={<EmpEdit/>}/> 
                </Routes>
            </Router>

        </div>
    )
}
export default Emp;