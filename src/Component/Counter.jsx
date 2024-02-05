

import React, { useState } from "react";

function Appp() {
  return (
    <div>
      <A />
    </div>
  );
}

function A() {
  const [showB, setShowB] = useState(false);
  const [showC, setShowC] = useState(false);
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
    setShowB(true);
    setShowC(true);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleInputChange} />
      {showB && <B text1={text} />}
      {showC && <C text2={text} />}
    </div>
  );
}

function B(props) {
  const { text1 } = props;
  return <h1>Component B - {text1.toUpperCase()}</h1>;
}

function C(props) {
  const { text2 } = props;
  return <h1>Component C - {text2.toLowerCase()}</h1>;
}

export default Appp;


// import React from 'react'
// import { useState, useEffect } from 'react'

// const Counter = () => {
//     const [count, setCount] = useState(()=>{
//         const counter = JSON.parse(localStorage.getItem('count'));
//         return counter != null ? counter : 0;

//     });

  

//     let Increament = () => {
//         setCount(count + 1)
//     }

//     let Decreament = () => {
//         if (count > 0) {
//             setCount(count - 1)
//         }
//     }

//     useEffect(() => {
//         JSON.parse(localStorage.getItem('count'));
     
//         localStorage.setItem('count', JSON.stringify(count));
         
//     }, [count])

//     return (
//         <>
//             <h3 className='screen'>{count}</h3>

//             <button className='btn' onClick={Increament}>Increaments</button>
//             <button className='btn' onClick={Decreament}>Decreaments</button>
//         </>
//     )
// }

// export default Counter

