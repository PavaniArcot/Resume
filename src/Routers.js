//routers---it is used connect one component to another component
//dependency--npm i react-router-dom
import "./Router.css"
import Home from "./home";
import About from "./about";
import Page from "./page";
import Gallery from "./gallery";
import Contact from "./contact"
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
function Routers(){
    return(
        <div>
            <Router>
            <ul style={{backgroundColor:"aquamarine",padding:"20px"}}>
                <li>React developer</li>
                <li><Link to="/home">Home</Link></li> 
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">contact</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/page">Page</Link></li>
            </ul>
            <Routes>
                <Route path="/home"element={<Home/>}/> 
                <Route path="/about"element={<About/>}/> 
                <Route path="/page"element={<Page/>}/> 
                <Route path="/gallery"element={<Gallery/>}/> 
                <Route path="/contact"element={<Contact/>}/> 

            </Routes>
            </Router>
        </div>
    )
}
export default Routers;