import React, {useState} from 'react';
import './pooja.css';
function App()
{
const [myCar,ChangeMyCar]=useState("BMW")

const changeInputValue =(e)=>

{
ChangeMyCar(e.target.value);
}
return(
  <div className="main_body">
    <h1>Select City :{myCar}</h1>
<select onChange={changeInputValue}>
<option>Pune</option>
<option>Mumbai</option>
<option>Solapur</option>

</select>
    
    
  </div>
);
}

export default App;