

// Hooks Methods--it is used only for classes
// 1.useState()  -- state,setState
//state -- intial values
// setStsate-- used to update state values 
// 2.useEffect()
// 3.useContext()
// 4.useRef()
// 5.useCallback()
// 6.useReducer()
//7.useMeno()

import { useEffect, useState } from "react";



function App(){

  const [data,setData]=useState("Hello Good Morning")
  const [value,setValue]=useState(0)
  const [user,setUser]=useState("")

  const change=()=>{
    setData("Welcome All")
  }
useEffect(()=>{
  setTimeout(()=>{
    setValue(value+1)
  },3000)
},[])

const decrement=()=>{
  setValue(value-1)
}

const update=(a)=>{
setUser(a.target.user)
}
  return(
    <div>
        <center>
        <h3>useState</h3>
        {data}
        <button onClick={change}>Click</button>
        <h3>Count:{value}</h3>
        {/* <button onClick={increment}>Inc</button> */}
        <button onClick={decrement}>Dec</button>
        <br/><br/>
        <p>Current value:{user}</p>
        <input type="text" onChange={update}/>
        </center>
    </div>
  )
}

export default App;
