

import React from "react";


class Reg extends React.Component{
    constructor(){
       super();
       this.state={
        Fname:"",
        Email:"",
        Password:"",
        Cpassword:"",
        Fname1:"",
        Password1:""

       }
    }
    handleFname=(e)=>{
    this.setState({
       Fname:e.target.value
        })
    }
    handleEmail=(e)=>{
        this.setState({
           Email:e.target.value
            })
        }
        handlePassword=(e)=>{
            this.setState({
               Password:e.target.value
                })
            }
            handleCpassword=(e)=>{
                this.setState({
                   Cpassword:e.target.value
                    })
                }
    handleChange=()=>{
     const  pattern=/^[A-Z]?[a-z]+[0-9]+[@#%^&*$]+$/
     // ?==> 0 or 1 time
     // +==> 1 or more time
     // *==> 0 or more time
        if(!pattern.test(this.state.Fname)){

            console.log("Failure")
            alert("THIS IS notVLAID")
        }
        // else{
        //     console.log("failure")
        //     alert("this is invalid")
        // }
        else if(this.state.Password!==this.state.Cpassword){
            alert("password does not match")
        }
        else{
            alert("Form is submitted")
            localStorage.setItem("Name",this.state.Fname)
            localStorage.setItem("Password",this.state.Password)
           
        }
    }

    handleFname1=(f)=>{
        this.setState({
            Fname1:f.target.value
        })
    }

    handlePassword1=(f)=>{
        this.setState({
            Password1:f.target.value
        })
    }

    handleLogin=()=>{
        let a=localStorage.getItem("Name")
        let b=localStorage.getItem("Password")
        if(this.state.Fname1!==a){
            alert("Name is not match")
        }
        else if(this.state.Password1!==b){
            alert("Password does not match")
        }
        else{
            alert("Login the Page")
        }
        
    }
    render(){
        return(
            <div>
                <h1>SignIn</h1>
                <form onSubmit={this.handleChange}>
                <label>Name:</label>
                <input type="text" value={this.state.Fname} onChange={this.handleFname} />

                {/* //<button onClick={this.handleChange}>Click</button> */}
                <br/><br/>

                <lable>Email:</lable>
                <input type="email" value={this.state.Email} onChange={this.handleEmail} />
                <br/><br/>
                <lable>Password:</lable>
                <input type="password" value={this.state.Password} onChange={this.handlePassword} />
                <br/><br/>
                <label>Confirm Password:</label>
                <input type="password" value={this.state.Cpassword} onChange={this.handleCpassword} />
                <br/><br/>
                
                <input type="submit" value="Signin"/>

                </form>

                <br/><br/>

                <h1>Login</h1>
                <form onSubmit={this.handleLogin}>
                    <label>Name:</label>
                    <input type="text" value={this.state.Fname1} onChange={this.handleFname1} />
                    <br/><br/>
                    <label>Password:</label>
                    <input type="password" value={this.state.Password1} onChange={this.handlePassword1} />
                    <br/><br/>
                    <input type="submit" value="Login" />
                </form>
            </div>

        )
        }
                           }
export default Reg;
