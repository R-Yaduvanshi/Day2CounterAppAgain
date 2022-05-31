import React,{useState} from 'react'

const Counter = ({ initialValue }) => {
    const [counter,setCounter]=useState(initialValue);
    let colors = [];
    if(counter % 2 == 0)
    {
        colors.push('counter_green')
    }
    else if (counter % 2 != 0){
        colors.push('counter_red')
    }
    // console.log(useState);
    // {
    //     if(counter % 2 === 0)
    //     {
    //         console.log("even")
    //     }
    //     else{
    //         console.log("odd")
    //     }
    // }

  return (
    <>
      <h1 className={colors}>Counter App: {counter}</h1>
      <button onClick={() => setCounter(counter+1)}>Increament</button>
      <button
        onClick={() => {
            if(counter > 0)
            {
                setCounter(counter-1)
            }
        }}
      >Decreament</button>
      <button onClick={() => setCounter(counter*2)}>Double</button>
    </>
  )
}

export default Counter