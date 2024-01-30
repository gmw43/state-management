import React from 'react'
import { useState, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(()=>{
        const counter = JSON.parse(localStorage.getItem('count'));
        return counter != null ? counter : 0;

    });

  

    let Increament = () => {
        setCount(count + 1)
    }

    let Decreament = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    useEffect(() => {
        JSON.parse(localStorage.getItem('count'));
     
        localStorage.setItem('count', JSON.stringify(count));
         
    }, [count])

    return (
        <>
            <h3 className='screen'>{count}</h3>

            <button className='btn' onClick={Increament}>Increaments</button>
            <button className='btn' onClick={Decreament}>Decreaments</button>
        </>
    )
}

export default Counter