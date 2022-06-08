
import React from "react";
import "./App.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add, Divide, Jor, Minus, Multiply, Subtract } from "./Store/action";


function App() {

  const dispatch=useDispatch()
  const count=useSelector((state)=>state.count)//hoo
 
   const [value, setvalue] = useState("")

  return (
    <>
    <div className="App">
     <h1>Counter:{count}</h1>
     <div ><button style={{marginRight:'20px'}} onClick={()=>dispatch(Add())}>+</button>
     <button onClick={()=>dispatch(Subtract())}>-</button>
     </div>
     <input style={{marginTop:"20px",width:"300px",padding:"10px 10px",fontSize:"20px",outline:"none",borderRadius:"20px"}} type="number" value={value} onChange={(e)=>setvalue(e.target.value)} />
    </div>
    <div className="butt" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <div style={{display:"flex" ,gap:"20px",marginTop:"20px"}}>
      <button onClick={()=>dispatch(Jor(Number(value)))}>ADD</button>
      <button onClick={()=>dispatch(Minus(Number(value)))}>Sub</button>
      </div>
   
      <div style={{display:"flex",gap:"20px",marginTop:"20px"}}>
      <button onClick={()=>dispatch(Multiply(Number(value)))}>Multiply</button>
      <button onClick={()=>dispatch(Divide(Number(value)))}>Divide</button>
      </div>
    </div>
    
   </>
  );
}

export default App;
