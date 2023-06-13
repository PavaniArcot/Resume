
import React from "react";
class Crud extends React.Component{
    constructor(){
        super();
        this.input=React.createRef()
        this.input1=React.createRef()
        this.input2=React.createRef()
        this.input3=React.createRef()
        this.input4=React.createRef()

        this.state={
            list:[]
        }
    }

    addTodo=()=>{
        const Item={
            value:this.input.current.value,
            value1:this.input1.current.value,
            value2:this.input2.current.value,
            value3:this.input3.current.value,
            value4:this.input4.current.value
        }
        if(localStorage.getItem("list")===null){
            const list=[]
            list.push(Item)
            localStorage.setItem("list",JSON.stringify(list))
        }
        else{
            const list=JSON.parse(localStorage.getItem("list"))
            list.push(Item)
            localStorage.setItem("list",JSON.stringify(list))
        }
        this.setState({
         list:JSON.parse(localStorage.getItem("list"))

        })
        document.getElementById("user").value=""
    }
    componentDidMount(){
        const list=window.localStorage.getItem("list")
        const value=JSON.parse(list)
        if(list=== null){
            return false
        }
        else{
            this.setState({
                list:value
            })
        }
    }
    delete=()=>{
        const list1=JSON.parse(localStorage.getItem("list"))
        list1.splice(0,1)
        this.setState({
            list:list1
        })
        localStorage.setItem("list",JSON.stringify(list1))
    }




    render(){
        return(
            <div>
                <center>
                    <main>
                <label>Full Name : </label>&ensp;&ensp;
                <input id="user" type="text" ref={this.input} placeholder="fullname"/><br/><br/>
                <label>E-mail : </label>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                <input type="text" ref={this.input1} placeholder="e-mail"/><br/><br/>
                <label>city : </label>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                <input type="text" ref={this.input2} placeholder="city"/><br/><br/>
                <label>Mobile No : </label>&ensp;&ensp;
                <input type="text" ref={this.input3} placeholder="mobile no"/><br/><br/>
                <label>Salary : </label>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                <input type="text" ref={this.input4} placeholder="salary"/><br/><br/>
                <button onClick={this.addTodo}>Add</button>&ensp;&ensp;
                <button>Remove</button>
                </main>
                <br/>
                <br/>
                <table>
                    <thead>
                        <tr>
                            <th>FullName</th>
                            <th>E-mail</th>
                            <th>City</th>
                            <th>Mobile No</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    
                {this.state.list.map((item)=>{
                    return(
                       // <ul key={item}>
                        //    <li>
                         //       {item.value}
                         //   </li>
                       // </ul>
                       <tbody>
                        <tr key={item}>
                            <td>{item.value}</td>
                            <td>{item.value1}</td>
                            <td>{item.value2}</td>
                            <td>{item.value3}</td>
                            <td>{item.value4}</td>
                            <td>
                                <button onClick={this.delete}>delete</button>
                            </td>
                        </tr>
                       </tbody>
                    )
                })}
                </table>
                </center>


            </div>
        )
    }
}
export default Crud;