
export function App(){
  return(
    <div>
      <table style={{width:"50%"}}>
        <thead style={{color:"pink",backgroundColor:"orange"}}>
          <tr>
            <th>s.no</th>
            <th>Name</th>
            <th>city</th>
            <th>state</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>1</td>
          <td>pavani</td>
          <td>chittoor</td>
          <td>AP</td>
          </tr>
          <tr>
          <td>1</td>
          <td>pavani</td>
          <td>chittoor</td>
          <td>AP</td>
          </tr>
          <tr>
          <td>1</td>
          <td>pavani</td>
          <td>chittoor</td>
          <td>AP</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
//export default App;



 export function Hi(){
  return(
    <div>
      <label>Fullname :</label>
      <input type="text"/>
      <br></br>
      <label>email</label>
      <input type="text"/>
      <br></br>
      <label>password</label>
      <input type="password"/>
    </div>
  )
}
