export const inc=(value)=>async dispatch=>{
    dispatch({
        type:"INCREMENT",
        payload:value
    })
   
}
export const dec=(value)=>async dispatch=>{
    dispatch({
        type:"DECREMENT",
        payload:value
    })
   
}
export const reset=(value)=>async dispatch=>{
    dispatch({
        type:"RESET",
        payload:value
    })
   
}
                
