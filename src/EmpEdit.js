import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

function EmpEdit(){
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [mobile,setMobile]=useState("")
    const [salary,setSalary]=useState("")
    const {empId}=useParams()

    const navigate=useNavigate() //naavigate directly empform to emplist

    const handleId=(e)=>{
        setId(e.target.value)
    }
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handleMobile=(e)=>{
        setMobile(e.target.value)
    }
    const handleSalary=(e)=>{
        setSalary(e.target.value)
    }
    useEffect(()=>{
        fetch("http://localhost:3006/Employe/"+empId)
        .then((resp)=>{
            return resp.json()
        })
        .then((res)=>{
            console.log(res)
            setId(res.id)
            setName(res.name)
            setEmail(res.email)
            setMobile(res.mobile)
            setSalary(res.salary)
        })
    },[])
    const handleSubmit=(event)=>{
        event.preventDefault()
        let data={id,name,email,mobile,salary}
        fetch("http://localhost:3006/Employe/"+empId,{
            method:"PUT",
            headers:{"content-type":"application/json"},//default header for any api
            body:JSON.stringify(data)
        })
        .then(()=>{
            alert("saved successfully")
            navigate("/")
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
    return(
        <div>
            <form className="container" onSubmit={handleSubmit}>
                < div className="card">
                    <div className="card-title">
                    <h3>Employee create list</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-8">
                                <label>ID:</label>
                                <input value={id} disabled="disabled" type="text" onChange={handleId} className="form-control"></input>

                            </div>
                            <div className="col-lg-8">
                                <label>Name:</label>
                                <input value={name} type="text" onChange={handleName}  className="form-control"></input>
                                
                            </div>
                            <div className="col-lg-8">
                                <label>Email:</label>
                                <input value={email} type="text" onChange={handleEmail}  className="form-control"></input>

                            </div>
                            <div className="col-lg-8">
                                <label>Mobile:</label>
                                <input value={mobile} type="text" onChange={handleMobile}  className="form-control"></input>

                            </div>
                            <div className="col-lg-8">
                                <label>Salary:</label>
                                <input value={salary} type="text" onChange={handleSalary}  className="form-control"></input>

                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                
                                    <Link to="/" className="btn btn-danger">Back</Link>
                                    
                                 
                            </div>
                            

                        </div>

                    </div>

                </div>

            </form>
            
        </div>
    )
}
export default EmpEdit;