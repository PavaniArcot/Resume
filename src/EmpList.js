import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function EmpList(){
    const [data,setData]=useState(null)
    const navigate=useNavigate()
    useEffect(()=>{
        fetch("http://localhost:3006/Employe")
        .then((resp)=>{
            return resp.json()
        })
        .then((res)=>{
            console.log(res)
            setData(res)
        })
    },[])
    const Edit=(id)=>{
        navigate("employe/"+id)

    }
    const Delete=(id)=>{
        if(window.confirm("Do you want to remove")){
        fetch("http://localhost:3006/Employe/"+id,{
            method:"DELETE"
        })
        .then((resp)=>{
            alert("deleted sucessfuly")
            window.location.reload()
        })
       .catch((err)=>{
        console.log(err.message)
       })
    }

    }
    return(
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h3>Employee Management system</h3>

                </div>
                <div className="card-body">
                    <Link to="/form" className="btn btn-success">Add New(+)</Link>
                    <table className="table table-bordred">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Salary</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
{data && data.map(item=>(
    <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.mobile}</td>
        <td>{item.salary}</td>
        <td>
            <a onClick={()=>{Delete(item.id)}}className="btn btn-primary">Delete</a>
            <a onClick={()=>{Edit(item.id)}}className="btn btn-success">Edit</a>
            <a className="btn btn-danger">Edit</a>
        </td>
    </tr>
))}
                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    )
}
export default EmpList;