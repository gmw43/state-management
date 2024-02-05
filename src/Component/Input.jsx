import React, { useState } from 'react'

function Input() {
    const [data , setdata] = useState('')

    const handleCahnge=(e)=>{
        setdata(e.target.value)
    }
    const handleClick=()=>{
        console.log(data)
    }
  return (
    <div>
        <input value={data}   onChange={handleCahnge}  />
        <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default Input