{} import { useState } from "react";

function App(){
const [count, setcount] = useState(0)

return <div>
  <button onClick={()=>{
    setcount(count +1)
  }}>cick me {count}</button>
   <Buttoncomponent/>    {/*This is just a normal static component that needs not to re render but it still does*/}
</div>



}
function Buttoncomponent(){
  console.log("Render")
  return <div>
    button here
  </div>
}

export default App;






// We will use memo to save our renders here
import { memo, useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => {
        setCount(count + 1);
      }}>
        Counter {count}
      </button>
      <br /> <br />
      <ButtonComponent />
    </div>
  );
}

const ButtonComponent = memo(() => {   // The ButtonComponent is wrapped with memo, which is a higher-order component that prevents unnecessary re-renders.
  console.log("render");              //When App re-renders (due to setCount being called), ButtonComponent will only re-render if its props change which it does not haver right now
  return <div>Button here</div>; 
});

export default App;
