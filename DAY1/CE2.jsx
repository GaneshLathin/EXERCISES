import React from 'react';
function Msg()
{
  let myobject={name:"Madras"};
  let newObject =myobject;
  myobject.name="Chennai";
  console.log(myobject);
  let myarray=["a","e","i","o"];
  let vowelArray =myarray;
  myarray.push("u");
  console.log(myarray);
  alert("Check the console output!");
}
const App3=()=>{
  return(
    <div>

     <button onClick={Msg}>Click</button>
    </div>
  )
}
export default App3;
