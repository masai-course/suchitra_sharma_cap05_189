import { useState } from "react"
const Counter=()=>{
    const [count, setCount]=useState(0)

    const IncrementBtn=()=>{
            setCount(count+1)
    }

    const DecrementBtn=()=>{
       if(count==0){
        return 0
       }
       else{
        setCount(count-1)
       }
}

const DoubleBtn=()=>{
    setCount(count*2)
}

    return(
        <>
            <h1>Counter : {count}</h1>
            <button onClick={IncrementBtn}>Increment</button>
            <button onClick={DecrementBtn}>Decrement</button>
            <button onClick={DoubleBtn}>Double</button>
        </>
    )
}


export default Counter